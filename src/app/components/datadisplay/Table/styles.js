import { css } from 'styled-components/macro';
import { ProjectPalette, TextStyle } from 'app/theme';
// TODO: this file should be refactored so that there is a base styling. So all the variants can just overwrite it.
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
        font-weight: normal;
        letter-spacing: 0.42px;
        line-height: 1.33;
        padding: 17px 24px;
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
        outline: 2px solid red;
      }

      [class*='MuiTableCell-root'] {
        border-bottom: 0 white solid !important;
      }

      [class*='MUIDataTableBodyCell'] {
        padding: 13px 24px;
        color: ${ProjectPalette.common.black};
        font-size: 14px;
        font-weight: normal;
        > a {
          font-weight: 600;
        }
      }

      [class*='MUIDataTableHeadCell-sortAction'] {
        line-height: 1;
      }

      [class*='MUIDataTableBodyRow'] {
        border: solid 1px rgba(198, 198, 198, 0.2);
      }

      [class*='MUIDataTableToolbar-titleText'] {
        text-align: left;
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
          padding: 24px;
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

      [class*='MUIDataTableToolbar-titleText'] {
        text-align: left;
      }
    }
  `,

  variant10: css`
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

      [class*='MUIDataTableHeadCell-root']:nth-child(4) {
        width: 24px;
      }

      [class*='MUIDataTableHeadCell-root']:nth-child(5) {
        width: 24px;
      }

      [class*='MUIDataTableBodyCell'] {
        padding: 13px 24px;
        color: ${ProjectPalette.common.black};
        font-size: 14px;

        > a {
          font-weight: 600;
        }
      }

      [class*='MUIDataTableToolbar-titleText'] {
        text-align: left;
      }
    }
  `,
  reportsVariant: css`
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
        font-weight: normal;
        letter-spacing: 0.42px;
        line-height: 1.33;
        padding: 17px 24px;
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

      [class*='MUIDataTableBodyCell'] {
        padding: 13px 24px;
        color: ${ProjectPalette.common.black};
        font-size: 14px;
        font-weight: normal;
        > a {
          font-weight: 600;
        }
      }

      [class*='MUIDataTableHeadCell-sortAction'] {
        line-height: 1;
      }

      [class*='MUIDataTableBodyRow'] {
        border: solid 1px rgba(198, 198, 198, 0.2);
      }

      [class*='MUIDataTableToolbar-titleText'] {
        text-align: left;
      }

      // Different from "standard" variants
      [class*='MUIDataTableHeadCell-root']:nth-child(1) {
        width: 140px;
      }
    }
  `,
};
