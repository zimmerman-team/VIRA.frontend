import { ProjectPalette, TextStyle } from 'app/theme';

export const commonStyles = {
  MuiSvgIcon: {
    root: {
      fill: ProjectPalette.grey[900],
    },
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
      // padding: '17px 24px',

      color: 'rgba(1, 1, 10, 0.6)',
    },
    sortAction: {
      lineHeight: '1',
    },
  },
  MuiTablePagination: {
    toolbar: {
      fontSize: '12px',
      color: 'rgba(1, 1, 10, 0.6)',
      borderBottom: 'none',
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
  MUIDataTableFilterList: {
    chip: {
      marginBottom: '8px',
    },
  },
};
