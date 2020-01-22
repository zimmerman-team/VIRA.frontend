import 'styled-components/macro';
import React from 'react';
import { ProjectPalette } from 'app/theme';
import { Typography } from '@material-ui/core';

interface NavItemParams {
  name: string;
  count: number;
  active: boolean;
  onClick: () => void;
}

export const SearchResultNavItem = (props: NavItemParams) => (
  <div
    onClick={props.onClick}
    css={`
      cursor: pointer;
      margin-right: 40px;
      padding-bottom: 8px;
      ${props.active &&
        `border-bottom: 4px solid ${ProjectPalette.secondary.main};`}
      &:hover {
        border-bottom: 4px solid ${ProjectPalette.secondary.main};
      }
    `}
  >
    <Typography
      css={`
        opacity: 0.8;
        font-size: 14px;
        font-weight: 600;
        color: ${ProjectPalette.common.white};
        text-transform: capitalize;
        &:hover {
          opacity: 1;
        }
      `}
    >
      {props.count} {props.name}
    </Typography>
  </div>
);
