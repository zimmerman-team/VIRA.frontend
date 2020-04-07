import React from 'react';
import get from 'lodash/get';
import 'styled-components/macro';
import { ProjectPalette } from 'app/theme';
import { navItems } from 'app/modules/common/components/Search/mockSearchText';
import { SearchResultNavItem } from 'app/modules/common/components/Search/common/NavItemParams';

type Props = {
  results: object;
  activeTab: string;
  onChange: Function;
};

export const SearchResultNavigation = (props: Props) => (
  <div
    css={`
      display: flex;
      padding: 15px 24px;
      align-items: flex-start;
      justify-content: flex-start;
      background-color: ${ProjectPalette.primary.light};
    `}
  >
    {navItems.map(navItem => {
      const key = navItem.replace('search.', '');
      return (
        <SearchResultNavItem
          name={navItem}
          active={props.activeTab === key}
          onClick={() => props.onChange(key)}
          count={get(props.results, `[${key}]`, []).length}
        />
      );
    })}
  </div>
);
