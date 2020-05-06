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
  font-size: 14px;
  text-decoration: none;
  font-weight: normal;
  line-height: 1;
  letter-spacing: normal;
  color: rgba(0, 0, 0, 0.45);

  @media (max-width: 768px) {
    font-size: ${mobFontSize};
  }
`;

const CurrentLinkStyle = css`
  font-size: 14px;
  font-weight: normal;
  line-height: 1;
  color: ${ProjectPalette.secondary.main};

  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    font-size: ${mobFontSize}!important;
    height: 15px;
  }
`;

const BreadCrumbStyle = css`
  * li {
    color: rgba(1, 1, 10, 0.6);
  }
`;

// todo: use NavLink component instead of Typography
export function BreadCrumbs(props: BreadcrumbModel) {
  const { t } = useTranslation();
  return (
    <Breadcrumbs
      css={BreadCrumbStyle}
      aria-label="breadcrumb"
      data-cy="BreadCrumbs"
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

      {props.currentLocation && (
        <div
          css={`
            display: flex;
            align-items: center;
            height: 21px;
          `}
        >
          <div css={CurrentLinkStyle}>{t(props.currentLocation)}</div>
        </div>
      )}
    </Breadcrumbs>
  );
}
