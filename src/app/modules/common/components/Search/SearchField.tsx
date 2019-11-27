import 'styled-components/macro';
import React from 'react';
import { ProjectPalette } from 'app/theme';
import { Typography } from '@material-ui/core';
import IconSearch from '@material-ui/icons/Search';
import { mockSearchText } from 'app/modules/common/components/Search/mockSearchText';

export const SearchField = () => (
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
    `}
  >
    <Typography color="textSecondary">{mockSearchText}</Typography>
    <IconSearch
      css={`
        color: white;
      `}
    />
  </div>
);
