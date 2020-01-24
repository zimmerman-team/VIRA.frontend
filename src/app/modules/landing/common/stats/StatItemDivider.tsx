import 'styled-components/macro';
import React from 'react';
import { ProjectPalette } from 'app/theme';

export const StatItemDivider = () => (
  <div
    css={`
      height: 58px;
      width: 1px;
      background-color: ${ProjectPalette.secondary.main};
      &:last-child {
        display: none;
      }
    `}
  />
);
