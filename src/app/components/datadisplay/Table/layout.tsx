// @ts-nocheck
import React from 'react';
import MUIDataTable from 'mui-datatables';
import { TableLayoutModel } from 'app/components/datadisplay/Table/model';
import { changeTableRowColor } from 'app/components/datadisplay/Table/helpers';
import 'styled-components/macro';
import { CustomStyleDataTable } from 'app/components/datadisplay/Table/styles';

function setTableVariant(styleVariant: string) {
  //TODO: make switch
  if (styleVariant === 'variant9') {
    return CustomStyleDataTable.variant9;
  }
  return CustomStyleDataTable.standard;
}
export const TableLayout = (props: TableLayoutModel) => {
  React.useEffect(() => {
    props.changeTableRowColor && changeTableRowColor(props.changeTableRowColor);
  }, [props.changeTableRowColor]);

  return (
    <MUIDataTable
      data={props.data}
      title={props.title}
      options={props.options}
      columns={props.columns}
      css={setTableVariant(props.styleVariant)}
    />
  );
};
