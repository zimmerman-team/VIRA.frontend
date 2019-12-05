import React from 'react';
import { TablePagination } from '@material-ui/core';
import styled from 'styled-components/macro';

export type PaginationModel = {
  count: number;
  page: number;
  rowsPerPage: number;
  onChangePage: Function;
};

const BasePagination = styled(TablePagination)`
  && {
    margin-bottom: 8px;
    * {
      color: rgba(1, 1, 10, 0.6);
      font-size: 0.8571428571428571rem;
    }

    svg {
      font-size: 16px;
    }

    [class*='MuiTablePagination-selectIcon'] {
      top: 5.5px;
    }
  }
`;

export const Pagination = (props: PaginationModel) => {
  return (
    <React.Fragment>
      <BasePagination
        count={props.count}
        onChangePage={() => console.log('Show next items')}
        page={props.page}
        rowsPerPage={props.rowsPerPage}
      />
    </React.Fragment>
  );
};
