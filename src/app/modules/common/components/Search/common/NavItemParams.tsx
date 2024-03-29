import 'styled-components/macro';
import React from 'react';
import { ProjectPalette } from 'app/theme';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

interface NavItemParams {
  name: string;
  count: number;
  active: boolean;
  onClick: () => void;
  index?: number;
}

export const SearchResultNavItem = (props: NavItemParams) => {
  const { t } = useTranslation();
  return (
    <div
      data-cy={`search-nav-item-${props.index}`}
      onClick={props.onClick}
      css={`
        cursor: pointer;
        margin-right: 40px;
        padding-bottom: 8px;
        border-bottom: 4px solid transparent;
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
        {props.count} {t(props.name)}
      </Typography>
    </div>
  );
};
