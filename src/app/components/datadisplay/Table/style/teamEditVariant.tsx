// @ts-nocheck
import { createMuiTheme } from '@material-ui/core/styles';
import { ProjectPalette, TextStyle } from 'app/theme';
import { commonStyles } from 'components/datadisplay/Table/style/common/commonStyles';

export const teamEditVariant = createMuiTheme({
  overrides: {
    MuiTableHead: {
      root: {
        display: 'none',
      },
    },
    MuiCheckbox: {
      root: {
        color: ProjectPalette.grey[900] + '!important',
      },
      colorSecondary: {
        color: ProjectPalette.secondary.main + '!important',
      },
    },
    MuiSvgIcon: {
      colorSecondary: {
        fill: ProjectPalette.grey[900],
      },
    },
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
        '&:nth-child(1)&:nth-child(1)': {
          // border: '1px solid red',
          // padding: '13px 0 13px 24px',
          width: '63px',
          maxWidth: '63px',
        },
        '&:nth-child(6)': {
          // padding: '13px 27px',
          // width: '180px',
          // maxWidth: '70px',
        },
        '&:nth-child(8)': {
          // padding: '13px 27px',
          // width: '70px',
          // maxWidth: '70px',
        },
      },
    },
    MuiTablePagination: commonStyles.MuiTablePagination,
    MUIDataTablePagination: {
      root: {
        '&:last-child': {
          padding: '0 14px 0 14px',
        },
      },
    },
    MuiTableCell: commonStyles.MuiTableCell,
    MUIDataTableBodyRow: commonStyles.MUIDataTableBodyRow,
    MUIDataTableFilterList: commonStyles.MUIDataTableFilterList,
  },
});
