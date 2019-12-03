import 'styled-components/macro';
import React from 'react';
import { ProjectPalette } from 'app/theme';
import { navItems } from 'app/modules/common/components/Search/mockSearchText';
import { SearchResultNavItem } from 'app/modules/common/components/Search/NavItemParams';

export const SearchResultNavigation = () => (
  <div
    css={`
      display: flex;
      background-color: ${ProjectPalette.primary.light};
      width: 1024px;
      height: 36px;
      padding: 15px 24px 5px;
      align-items: flex-start;
      justify-content: flex-start;
    `}
  >
    {navItems.map(navItem => (
      <SearchResultNavItem name={navItem} />
    ))}
  </div>
);