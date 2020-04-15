// @ts-nocheck
// todo: solve ts error
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { css } from 'styled-components/macro';
import { useTranslation } from 'react-i18next';

import { ProjectPalette } from 'app/theme';
import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import { NavLink } from 'react-router-dom';

const mobFontSize = '12px;';

const PreviousLinkStyle = css`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: rgba(1, 1, 10, 0.6);
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: ${mobFontSize};
  }
`;

const CurrentLinkStyle = css`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: ${ProjectPalette.secondary.main};

  @media (max-width: 768px) {
    font-size: ${mobFontSize};
  }
`;

const BreadCrumbStyle = css`
  * li {
    color: rgba(1, 1, 10, 0.6);
  }
`;

// todo: user NavLink component instead of Typography
export function BreadCrumbs(props: BreadcrumbModel) {
  const { t } = useTranslation();
  return (
    <Breadcrumbs
      css={BreadCrumbStyle}
      aria-label="breadcrumb"
      data-testid="BreadCrumbs"
    >
      {props.previousLocations.map(previousLocation => (
        <NavLink
          strict
          css={PreviousLinkStyle}
          to={previousLocation.url}
          key={previousLocation.label}
        >
          {t(previousLocation.label)}
        </NavLink>
      ))}

      <Typography css={CurrentLinkStyle} variant="subtitle2">
        {t(props.currentLocation)}
      </Typography>
    </Breadcrumbs>
  );
}
