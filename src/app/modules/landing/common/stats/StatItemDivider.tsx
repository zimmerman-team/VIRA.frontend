import 'styled-components/macro';
import React from 'react';

export const StatItemDivider = () => (
  <div
    css={`
      height: 58px;
      width: 1px;
      background-color: #25baa4;
      &:last-child {
        display: none;
      }
    `}
  />
);
