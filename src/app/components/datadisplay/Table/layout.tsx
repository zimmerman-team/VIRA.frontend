// @ts-nocheck
import React from 'react';
import 'styled-components/macro';
import MUIDataTable from 'mui-datatables';
import { TableLayoutModel } from 'app/components/datadisplay/Table/model';
import { changeTableRowColor } from 'app/components/datadisplay/Table/helpers';
import { useTranslation } from 'react-i18next';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { standard } from 'app/components/datadisplay/Table/style/standard';
import { variant9 } from 'app/components/datadisplay/Table/style/variant9';
import { variant10 } from 'app/components/datadisplay/Table/style/variant10';
import { reportsVariant } from 'app/components/datadisplay/Table/style/reportsVariant';

function setTableVariant(cssVariant: string) {
  switch (cssVariant) {
    case 'variant9':
      return variant9;
    case 'variant10':
      return variant10;
    case 'reportsVariant':
      return reportsVariant;
    default:
      return standard;
  }
}

export const TableLayout = (props: TableLayoutModel) => {
  const { t } = useTranslation();
  React.useEffect(() => {
    if (props.changeTableRowColor) {
      changeTableRowColor(props.changeTableRowColor);
    }
  }, [props.changeTableRowColor]);
  return (
    <MuiThemeProvider theme={setTableVariant(props.cssVariant)}>
      <MUIDataTable
        data={props.data}
        title={t(props.title)}
        options={props.options}
        columns={props.columns}
        css={`
          && {
            box-shadow: none;
            border-color: white;
          }
        `}
      />
    </MuiThemeProvider>
  );
};
