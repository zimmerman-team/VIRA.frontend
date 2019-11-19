import 'styled-components/macro';
import React from 'react';
import { ProjectPalette } from 'app/theme';
import { Typography } from '@material-ui/core';

interface NavItemParams {
  name: string;
}
export const SearchResultNavItem = (props: NavItemParams) => (
  <div
    css={`
      margin-right: 10px;
      padding-bottom: 4px;
      cursor: pointer;
      &:first-child {
        border-bottom: 3px solid ${ProjectPalette.secondary.main};
      }
      &:hover {
        border-bottom: 3px solid ${ProjectPalette.secondary.main};
      }
    `}
  >
    <Typography
      color="textSecondary"
      css={`
        &:hover {
          color: ${ProjectPalette.secondary.dark};
        }
      `}
    >
      {props.name}
    </Typography>
  </div>
);
