/* eslint-disable no-case-declarations */
/* eslint-disable no-plusplus */

/* core */
import { TableCell, TableRow } from '@material-ui/core';
/* project-comps */
import InfoCellModule from 'app/components/datadisplay/Table/common/InfoCell';
import LinkCellModule from 'app/components/datadisplay/Table/common/LinkCell';
import {
  LocalTableStateModel,
  TableModuleModel,
  TotalRowColModel,
} from 'app/components/datadisplay/Table/model';
import filter from 'lodash/filter';
/* third-party */
import find from 'lodash/find';
import findIndex from 'lodash/findIndex';
import indexOf from 'lodash/indexOf';
import sumBy from 'lodash/sumBy';
import { MUIDataTableState } from 'mui-datatables';
import React from 'react';

const nf = (currency: string) => {
  return new Intl.NumberFormat(undefined, {
    currency,
    style: 'currency',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

// TODO: get rid of "any" types
/* method for getting the correct expandable table cell component depending on the table variant */
export function getExpandableTableCell(
  type: string,
  value: string | string[],
  link: string | undefined
): React.ReactNode {
  switch (type) {
    case 'LinkCellModule':
      return <LinkCellModule value={value} link={link as string} />;
    default:
      return value;
  }
}

/* method for checking if total row exists, or not to add it */
export function checkAndAddTotalRow(
  totalData: (string | number)[] | undefined,
  update?: boolean
) {
  const totalCell = document.getElementById('total-cell') as HTMLElement;
  const tbody = document.getElementsByClassName('MuiTable-root');
  if (totalData && !totalCell && tbody.length > 0) {
    const tr = document.createElement('tr');
    tr.id = 'total-cell';
    tr.className = 'MuiTableRow-root';
    totalData.forEach(item => {
      const td = document.createElement('td');
      td.className = 'MuiTableCell-root MuiTableCell-body TotalCell';
      td.innerText = item.toString();
      tr.appendChild(td);
    });
    tbody[0].appendChild(tr);
  } else if (update && totalCell && totalData) {
    const totalCellNodes = totalCell.childNodes as NodeListOf<HTMLElement>;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < totalCellNodes.length; i++) {
      totalCellNodes[i].innerText = totalData[i].toString();
    }
  }
}

/* method for getting table header cell with an info icon hover tooltip */
export function getInfoTHead(value: string, infoText: string): React.ReactNode {
  return (
    <TableCell variant="head">
      <InfoCellModule value={value} info={infoText} />
    </TableCell>
  );
}

function onTableChange(
  action: string,
  tableState: MUIDataTableState,
  localTableState: LocalTableStateModel,
  setLocalTableState: Function,
  setTotalData: Function,
  totalRowColsDef: TotalRowColModel[] | undefined
) {
  if (
    indexOf(['changePage', 'changeRowsPerPage', 'propsUpdate'], action) > -1 &&
    localTableState.prevAction !== action
  ) {
    setLocalTableState({
      page: tableState.page,
      prevAction: action,
      rowsPerPage: tableState.rowsPerPage,
    });
  }
  if (
    indexOf(['search', 'filterChange'], action) > -1 &&
    localTableState.prevAction !== action &&
    totalRowColsDef
  ) {
    setLocalTableState({
      ...localTableState,
      prevAction: action,
    });
    setTotalData(calculateTotalRow(tableState, totalRowColsDef));
  }
}

function onColumnViewChange(
  changedColumn: string,
  action: string,
  configProps: TableModuleModel
) {
  const totalCell = document.getElementById('total-cell') as HTMLElement;
  const colIndex = findIndex(configProps.columns, {
    name: changedColumn,
  });
  if (colIndex > -1 && totalCell) {
    const totalCellNodes = totalCell.childNodes[colIndex] as HTMLElement;
    if (action === 'add') {
      totalCellNodes.style.display = 'table-cell';
    } else {
      totalCellNodes.style.display = 'none';
    }
  }
}

function renderExpandableRow(
  rowMeta: { dataIndex: number; rowIndex: number },
  configProps: TableModuleModel
) {
  const dataArr = configProps.expandableData
    ? configProps.expandableData[rowMeta.dataIndex]
    : [];
  return dataArr.map((row, i) => (
    <TableRow key={`${rowMeta.dataIndex}-${rowMeta.rowIndex}-${row[0].value}`}>
      <TableCell />
      {row.map(item => (
        <TableCell colSpan={item.colSpan} key={item.value}>
          {getExpandableTableCell(item.type, item.value, item.link)}
        </TableCell>
      ))}
    </TableRow>
  ));
}

export function formatMoney(value: number, currency?: string): string {
  const currenc = currency || 'EUR';
  return nf(currenc).format(value);
}

export function calculateTotalRow(tableState: any, totalRowColsDef: any) {
  const data = tableState.displayData
    ? filter(tableState.data, (d: any) => {
        return find(tableState.displayData, { dataIndex: d.index });
      })
    : tableState.data;
  const totalRowData = totalRowColsDef.map((cd: any, index: any) => {
    switch (cd.dataType) {
      case 'money':
        const validData = filter(data, (item: any) => {
          return typeof item.data[index] === 'number';
        });
        return formatMoney(sumBy(validData, `data[${index}]`));
      case 'percentage':
        const count = filter(data, (item: any) => {
          return item.data[index] === cd.percValue;
        }).length;
        const percVal = (count / data.length) * 100;
        return `${count} (${percVal.toFixed(2)}%)`;
      case 'count':
        return data.length;
      default:
        return '';
    }
  });
  checkAndAddTotalRow(totalRowData, true);
  return totalRowData;
}

/* additional config */
export function addConfig(
  configProps: TableModuleModel,
  localTableState: LocalTableStateModel,
  setLocalTableState: Function,
  setTotalData: Function
) {
  let { options } = configProps;
  if (configProps.totalCell) {
    options = {
      ...options,
      onTableChange: (action: any, tableState: any) =>
        onTableChange(
          action,
          tableState,
          localTableState,
          setLocalTableState,
          setTotalData,
          configProps.totalRowColsDef
        ),
      /* when column view changes we need to also change the column in the custom total row */
      onColumnViewChange: (changedColumn: any, action: any) =>
        onColumnViewChange(changedColumn, action, configProps),
    };
  }
  if (configProps.expandableData) {
    options = {
      ...options,
      renderExpandableRow: (rowData: any, rowMeta: any) =>
        renderExpandableRow(rowMeta, configProps),
    };
  }
  return options;
}

export function changeTableRowColor(index: number) {
  const tbody = document.getElementsByClassName('MuiTableBody-root');
  if (
    tbody &&
    tbody[0] &&
    tbody[0].getElementsByTagName('tr') &&
    tbody[0].getElementsByTagName('tr')[index]
  ) {
    const tds = tbody[0]
      .getElementsByTagName('tr')
      [index].getElementsByTagName('td');
    tbody[0].getElementsByTagName('tr')[index].className += ' TransparentCell';
    for (let i = 0; i < tds.length; i++) {
      tbody[0].getElementsByTagName('tr')[index].getElementsByTagName('td')[
        i
      ].className += ' TransparentCell';
    }
  }
}
