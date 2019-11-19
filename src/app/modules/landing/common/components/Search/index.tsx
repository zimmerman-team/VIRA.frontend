import React from 'react';
import 'styled-components/macro';
import { ProjectPalette } from 'app/theme';
import { Typography } from '@material-ui/core';
import IconSearch from '@material-ui/icons/Search';

const mockSearchText = 'Promoting Opportunities for Women|';
const mockSearchResultText = [
  'Promoting Opportunities for Women s Empowerment and Rights Promoting Opportunities for Women s Empowerment and Rights',
  'Promoting Opportunities for Women s Empowerment and Rights Promoting Opportunities for Women s Empowerment and Rights',
  'Promoting Opportunities for Women s Empowerment and Rights Promoting Opportunities for Women s Empowerment and Rights',
  'Promoting Opportunities for Women s Empowerment and Rights Promoting Opportunities for Women s Empowerment and Rights',
  'Promoting Opportunities for Women s Empowerment and Rights Promoting Opportunities for Women s Empowerment and Rights',
  'Promoting Opportunities for Women s Empowerment and Rights Promoting Opportunities for Women s Empowerment and Rights',
  'Promoting Opportunities for Women s Empowerment and Rights Promoting Opportunities for Women s Empowerment and Rights',
  'Promoting Opportunities for Women s Empowerment and Rights Promoting Opportunities for Women s Empowerment and Rights',
  'Promoting Opportunities for Women s Empowerment and Rights Promoting Opportunities for Women s Empowerment and Rights',
];
const navItems = ['Projects', 'Grantee', 'Reports', 'All'];

const SearchField = () => (
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

const SearchResultItem = ({ text }) => (
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
      {text}
    </Typography>
  </div>
);

const SearchResultNavItem = ({ name }) => (
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
      {name}
    </Typography>
  </div>
);

const SearchResultNavigation = () => (
  <div
    css={`
      display: flex;
      background-color: ${ProjectPalette.primary.light};
      width: 1024px;
      height: 36px;
      padding-left: 24px;
      padding-right: 24px;
      padding-bottom: 5px;
      padding-top: 15px;
      align-items: flex-start;
      justify-content: flex-start;
    `}
  >
    {navItems.map(navItem => (
      <SearchResultNavItem name={navItem} />
    ))}
  </div>
);

const SearchResult = () => (
  <div
    css={`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding-bottom: 20px;
      background-color: ${ProjectPalette.primary.light};
    `}
  >
    <SearchResultNavigation />
    {mockSearchResultText.map(resultItem => (
      <SearchResultItem text={resultItem} />
    ))}
  </div>
);

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
