import React from 'react';
import 'styled-components/macro';
import CircularProgress from '@material-ui/core/CircularProgress';

interface NoDataProps {
  loading?: boolean;
}

export const NoData = (props: NoDataProps) => (
  <div
    css={`
      width: 100vw;
      height: 100%;
      display: flex;
      font-size: 14px;
      font-weight: 600;
      align-items: center;
      justify-content: center;
    `}
  >
    {props.loading ? <CircularProgress disableShrink /> : 'No data available'}
  </div>
);
