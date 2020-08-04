// @ts-nocheck
import { createMuiTheme } from '@material-ui/core/styles';
import { ProjectPalette, TextStyle } from 'app/theme';
import { commonStyles } from 'components/datadisplay/Table/style/common/commonStyles';

export const standard = createMuiTheme({
  overrides: {
    MuiSvgIcon: commonStyles.MuiSvgIcon,
    MUIDataTableToolbar: {
      root: {
        paddingLeft: 0,
      },
      titleText: commonStyles.titleText,
      titleRoot: {
        textAlignLast: 'left',
      },
      actions: {
        textAlignLast: 'right',
      },
    },
    MUIDataTable: commonStyles.MuiDataTable,
    MUIDataTableHeadCell: commonStyles.MUIDataTableHeadCell,
    MUIDataTableBodyCell: {
      root: {
        fontSize: '14px',
        // padding: '13px 24px',
        color: ProjectPalette.common.black,
        fontWeight: 'normal',
        '& a': {
          fontWeight: '600',
        },
      },
    },
    MuiTablePagination: commonStyles.MuiTablePagination,
    MuiTableCell: commonStyles.MuiTableCell,
    MUIDataTableBodyRow: commonStyles.MUIDataTableBodyRow,
    MUIDataTableFilterList: commonStyles.MUIDataTableFilterList,
  },
});

export const mobileStyle: any =
  '' +
  '* { white-space: nowrap} ' + //On mobile there should be no text wrap so everything is on 1 line
  '[aria-label*="Search"]{ display: none; } ' + //No search functionality on mobile
  '[aria-label*="Next Page"]{ padding: 0 !important;}' + //Amending the bottom toolbar
  '[aria-label*="Previous Page"]{ padding: 0 !important; } ' +
  '[class *= "MuiTableCell-footer"]{padding-left: 0 !important; float: left; padding-top: 10px; position: absolute;}';
