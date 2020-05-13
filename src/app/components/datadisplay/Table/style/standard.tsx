// @ts-nocheck
import { createMuiTheme } from '@material-ui/core/styles';
import { ProjectPalette, TextStyle } from 'app/theme';

export const standard = createMuiTheme({
  overrides: {
    MuiSvgIcon: {
      root: {
        fill: ProjectPalette.grey[900],
      },
    },
    MUIDataTableToolbar: {
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
  },
});

export const mobileStyle: any =
  '' +
  '* { white-space: nowrap} ' + //On mobile there should be no text wrap so everything is on 1 line
  '[aria-label*="Search"]{ display: none; } ' + //No search functionality on mobile
  '[aria-label*="Next Page"]{ padding: 0 !important;}' + //Amending the bottom toolbar
  '[aria-label*="Previous Page"]{ padding: 0 !important; } ' +
  '[class *= "MuiTableCell-footer"]{padding-left: 0 !important; float: left; padding-top: 10px; position: absolute;}';
