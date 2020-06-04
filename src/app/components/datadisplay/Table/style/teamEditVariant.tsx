// @ts-nocheck
import { createMuiTheme } from '@material-ui/core/styles';
import { ProjectPalette, TextStyle } from 'app/theme';

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
      titleText: {
        fontFamily: TextStyle.fontFamily,
        fontSize: '20px',
        textAlign: 'left',
        fontWeight: '600',
        lineHeight: '1.5',
        letterSpacing: 'normal',
        color: ProjectPalette.common.black,
        '@media (max-width: 1200px)': {
          fontSize: '20px !important',
        },
      },
      titleRoot: {
        textAlignLast: 'left',
      },
      actions: {
        textAlignLast: 'right',
      },
    },
    MUIDataTable: {
      liveAnnounce: { display: 'none' },
      tableRoot: {
        border: 'solid 1px rgba(198, 198, 198, 0.2)',
      },
    },
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
        '&:nth-child(2)': {
          padding: '13px 0 13px 24px',
          width: '63px',
          maxWidth: '63px',
        },
        '&:nth-child(6)': {
          padding: '13px 27px',
          width: '180px',
          maxWidth: '70px',
        },
        '&:nth-child(8)': {
          padding: '13px 27px',
          width: '70px',
          maxWidth: '70px',
        },
      },
    },
    MuiTablePagination: {
      toolbar: {
        fontSize: '12px',
        color: 'rgba(1, 1, 10, 0.6)',
        borderBottom: 'none',
      },
    },
    MUIDataTablePagination: {
      root: {
        '&:last-child': {
          padding: '0 14px 0 14px',
        },
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: '0 white solid !important',
      },
    },
    MUIDataTableBodyRow: {
      root: {
        border: 'solid 1px rgba(198, 198, 198, 0.2)',
      },
    },
  },
});
