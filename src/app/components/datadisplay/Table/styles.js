import { css } from 'styled-components/macro';
import { ProjectPalette, TextStyle } from 'app/theme';

export const CustomStyleDataTable = {
  standard: css`
    && {
      box-shadow: none;
      border-color: white;

      [class*='MUIDataTableToolbar'] {
        [class*='MuiTypography-root'] {
          font-family: ${TextStyle.fontFamily};
          font-size: 20px;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: normal;
          color: ${ProjectPalette.common.black};
        }

        [class*='MuiSvgIcon-root'] {
          fill: ${ProjectPalette.grey[900]};
        }
      }

      [class*='MUIDataTable-tableRoot'] {
        border: solid 1px rgba(198, 198, 198, 0.2);
      }

      [class*='MUIDataTableHeadCell-root'] {
        font-size: 12px;
        padding: 13px 24px;
        color: rgba(1, 1, 10, 0.6);
      }

      [class*='MUIDataTableBodyCell'] {
        padding: 13px 24px;
        color: ${ProjectPalette.common.black};
      }

      [class*='MuiTablePagination-toolbar'] > * {
        font-size: 12px;
        color: rgba(1, 1, 10, 0.6);
        border-bottom: none;
      }

      [class*='MuiTableCell-root'] {
        border-bottom: 0 white solid !important;
      }

      [class*='MUIDataTableBodyRow'] {
        border: solid 1px rgba(198, 198, 198, 0.2);
      }
    }
  `,
  variant9: css`
    && {
      box-shadow: none;
      border-color: white;

      [class*='MUIDataTableToolbar'] {
        [class*='MuiTypography-root'] {
          font-family: ${TextStyle.fontFamily};
          font-size: 20px;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: normal;
          color: ${ProjectPalette.common.black};
        }

        [class*='MuiSvgIcon-root'] {
          fill: ${ProjectPalette.grey[900]};
        }
      }

      [class*='MUIDataTable-tableRoot'] {
        border: solid 1px rgba(198, 198, 198, 0.2);
      }

      [class*='MUIDataTableHeadCell-root'] {
        padding: 13px 24px;
        color: rgba(1, 1, 10, 0.6);
      }

      [class*='MuiTablePagination-toolbar'] > * {
        font-size: 12px;
        color: rgba(1, 1, 10, 0.6);
        border-bottom: none;
      }

      [class*='MuiTableCell-root'] {
        border-bottom: 0 white solid !important;
      }

      [class*='MUIDataTableBodyRow'] {
        border: solid 1px rgba(198, 198, 198, 0.2);
        > * {
          padding-top: 6px;
          padding-bottom: 6px;
        }
      }

      //TODO: Different from "standard" variant.
      [class*='MuiTableHead-root'] {
        * > th {
          height: 0;
          padding: 0;
        }
      }

      [class*='MUIDataTableHeadCell-root']:nth-child(1) {
        width: 50px;
      }

      [class*='MUIDataTableHeadCell-root']:nth-child(3) {
        width: 140px;
      }

      [class*='MUIDataTableHeadCell-root']:nth-child(4) {
        width: 50px;
      }

      [class*='MUIDataTableBodyCell'] {
        padding: 13px 24px;
        color: ${ProjectPalette.common.black};
        font-size: 14px;

        > a {
          font-weight: 600;
        }
      }
    }
  `,
};
