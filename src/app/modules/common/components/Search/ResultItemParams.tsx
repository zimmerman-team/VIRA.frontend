import 'styled-components/macro';
import React from 'react';
import { ProjectPalette } from 'app/theme';
import { Typography } from '@material-ui/core';

interface ResultItemParams {
  text: string;
}
export const SearchResultItem = (props: ResultItemParams) => (
  <div
    css={`
      background-color: ${ProjectPalette.primary.light};
      width: 1024px;
      height: 36px;
      padding-left: 24px;
      padding-right: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
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
      {props.text}
    </Typography>
  </div>
);
