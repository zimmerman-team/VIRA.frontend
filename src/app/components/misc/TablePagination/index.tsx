import React from 'react';
import { TablePagination } from '@material-ui/core';
import styled from 'styled-components/macro';

export type PaginationModel = {
  count: number;
  page: number;
  rowsPerPage: number;
  onChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => void;
  onChangeRowsPerPage: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
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
        page={props.page}
        count={props.count}
        rowsPerPage={props.rowsPerPage}
        onChangePage={props.onChangePage}
        onChangeRowsPerPage={props.onChangeRowsPerPage}
      />
    </React.Fragment>
  );
};
