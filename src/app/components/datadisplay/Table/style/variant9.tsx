// @ts-nocheck
import { createMuiTheme } from '@material-ui/core/styles';
import { ProjectPalette, TextStyle } from 'app/theme';
import { commonStyles } from 'app/components/datadisplay/Table/style/common/commonStyles';

export const variant9 = createMuiTheme({
  overrides: {
    MuiSvgIcon: commonStyles.MuiSvgIcon,
    MUIDataTableToolbar: {
      root: {
        paddingLeft: 0,
      },
      titleText: {
        fontFamily: TextStyle.fontFamily,
        fontSize: '20px',
        fontWeight: '600',
        lineHeight: '1.5',
        letterSpacing: 'normal',
        color: ProjectPalette.common.black,
      },
    },
    MUIDataTable: commonStyles.MuiDataTable,
    MUIDataTableHeadCell: {
      root: {
        fontSize: '12px',
        fontWeight: 'normal',
        letterSpacing: '0.42px',
        lineHeight: '1.33',
        padding: '17px 24px',
        color: 'rgba(1, 1, 10, 0.6)',
      },
      sortAction: {
        lineHeight: '1',
      },
    },
    MUIDataTableBodyCell: {
      root: {
        fontSize: '14px',
        padding: '13px 24px',
        color: ProjectPalette.common.black,
        fontWeight: 'normal',
        '& a': {
          fontWeight: '600',
        },
        '&:nth-child(1)': {
          width: '50px',
        },
        '&:nth-child(2)': {
          width: '140px',
        },
        '&:nth-child(3)': {
          width: '50px',
        },
      },
    },
    MuiTablePagination: commonStyles.MuiTablePagination,
    MuiTableCell: commonStyles.MuiTableCell,
    MUIDataTableBodyRow: commonStyles.MUIDataTableBodyRow,
    // /* MuiTableHead: {
    //   root: {
    //     '& * > th': {
    //       height: '0',
    //       padding: '0',
    //     },
    //   },
    // },*/
  },
});
