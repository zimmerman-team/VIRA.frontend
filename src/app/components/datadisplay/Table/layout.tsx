import React from 'react';
import MUIDataTable from 'mui-datatables';
import { TableLayoutModel } from 'app/components/datadisplay/Table/model';
import { changeTableRowColor } from 'app/components/datadisplay/Table/helpers';
import styled from 'styled-components';
import { ProjectPalette, TextStyle } from 'app/theme';

const CustomStyleDataTable = styled(MUIDataTable)`
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
`;

export const TableLayout = (props: TableLayoutModel) => {
  React.useEffect(() => {
    props.changeTableRowColor && changeTableRowColor(props.changeTableRowColor);
  }, [props.changeTableRowColor]);

  return (
    <CustomStyleDataTable
      data={props.data}
      title={props.title}
      options={props.options}
      columns={props.columns}
      /* todo: figure out a cleaner way to do this*/
      css={`
        .TotalCell {
          &:first-child {
            &::before {
              content: '** %s and totals relate to publishing organisations';
            }
          }
        }
      `}
    />
  );
};
