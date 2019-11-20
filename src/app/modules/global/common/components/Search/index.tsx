import React from 'react';
import 'styled-components/macro';
import { SearchField } from './SearchField';
import { SearchResult } from './SearchResult';

export const Search = () => {
  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      `}
    >
      <SearchField />
      <SearchResult />
    </div>
  );
};
