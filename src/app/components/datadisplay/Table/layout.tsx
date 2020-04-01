// @ts-nocheck
import React from 'react';
import MUIDataTable from 'mui-datatables';
import { TableLayoutModel } from 'app/components/datadisplay/Table/model';
import { changeTableRowColor } from 'app/components/datadisplay/Table/helpers';
import 'styled-components/macro';
import { CustomStyleDataTable } from 'app/components/datadisplay/Table/styles';
import { useTranslation } from 'react-i18next';

function setTableVariant(cssVariant: string) {
  switch (cssVariant) {
    case 'variant9':
      return CustomStyleDataTable.variant9;
    case 'variant10':
      return CustomStyleDataTable.variant10;
    case 'reportsVariant':
      return CustomStyleDataTable.reportsVariant;
    default:
      return CustomStyleDataTable.standard;
  }
}

export const TableLayout = (props: TableLayoutModel) => {
  React.useEffect(() => {
    props.changeTableRowColor && changeTableRowColor(props.changeTableRowColor);
  }, [props.changeTableRowColor]);
  const { t, i18n } = useTranslation();
  return (
    <MUIDataTable
      data={props.data}
      title={t(props.title)}
      options={props.options}
      columns={props.columns}
      css={setTableVariant(props.cssVariant)}
    />
  );
};
