// @ts-nocheck
import React from 'react';
import 'styled-components/macro';
import MUIDataTable from 'mui-datatables';
import { TableLayoutModel } from 'app/components/datadisplay/Table/model';
import { changeTableRowColor } from 'app/components/datadisplay/Table/helpers';
import { useTranslation } from 'react-i18next';
import { MuiThemeProvider } from '@material-ui/core/styles';
import {
  mobileStyle,
  standard,
} from 'app/components/datadisplay/Table/style/standard';
import { variant9 } from 'app/components/datadisplay/Table/style/variant9';
import { variant10 } from 'app/components/datadisplay/Table/style/variant10';
import { reportsVariant } from 'app/components/datadisplay/Table/style/reportsVariant';
import { teamEditVariant } from 'app/components/datadisplay/Table/style/teamEditVariant';
import { useMediaQuery } from '@material-ui/core';
import { MobileVerticalScroll } from 'app/components/layout/MobileVerticalScroll';

function setTableVariant(cssVariant: string) {
  switch (('cssvar', cssVariant)) {
    /* todo: rename variant9 to something more descriptive */
    case 'variant9':
      return variant9;
    /* todo: rename variant10 to something more descriptive */
    case 'variant10':
      return variant10;
    case 'reportsVariant':
      return reportsVariant;
    case 'teamEditVariant':
      return teamEditVariant;
    default:
      return standard;
  }
}

export const TableLayout = (props: TableLayoutModel) => {
  const { t } = useTranslation();
  const isMobileWidth = useMediaQuery('(max-width: 600px)');

  React.useEffect(() => {
    if (props.changeTableRowColor) {
      changeTableRowColor(props.changeTableRowColor);
    }
  }, [props.changeTableRowColor]);

  return (
    <MobileVerticalScroll>
      <MuiThemeProvider theme={setTableVariant(props.cssVariant)}>
        <MUIDataTable
          data={props.data}
          title={t(props.title)}
          options={props.options}
          columns={props.columns}
          data-cy="mui-data-table"
          css={`
            ${isMobileWidth && mobileStyle}
            && {
              box-shadow: none;
              border-color: white;
            }
          `}
        />
      </MuiThemeProvider>
    </MobileVerticalScroll>
  );
};
