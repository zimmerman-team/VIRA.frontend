import React from 'react';
import 'styled-components/macro';
import { SearchField } from 'app/modules/common/components/Search/SearchField';
import { SearchResult } from 'app/modules/common/components/Search/SearchResult';

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
