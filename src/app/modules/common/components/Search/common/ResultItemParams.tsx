import 'styled-components/macro';
import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectPalette } from 'app/theme';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

interface ResultItemParams {
  text: string;
  link: string;
  handleResultClick: any;
  index?: number;
}

export const SearchResultItem = (props: ResultItemParams) => {
  const { t } = useTranslation();
  return (
    <div
      data-cy={`search-result-item-${props.index}`}
      onClick={props.handleResultClick}
      css={`
        margin: 8px 0;
        display: flex;
        cursor: pointer;
        line-height: 24px;
        padding-left: 24px;
        padding-right: 24px;
        align-items: center;
        justify-content: space-between;
        background-color: ${ProjectPalette.primary.light};
      `}
    >
      <Typography
        css={`
          a {
            color: ${ProjectPalette.common.white};
            text-decoration: none;
            &:hover {
              color: ${ProjectPalette.secondary.main};
            }
          }
        `}
      >
        <Link to={props.link}>{t(props.text)}</Link>
      </Typography>
    </div>
  );
};
