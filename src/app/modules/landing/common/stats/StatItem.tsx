// @ts-nocheck
import { css } from 'styled-components/macro';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { StatItemParams } from 'app/modules/landing/config';
import { ProjectPalette } from 'app/theme';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AmountStyle = css`
  && {
    font-size: 36px;
    font-weight: 600;
    color: #155366;
    text-align: center;

    @media (max-width: 600px) {
      font-size: 14px;
      color: ${ProjectPalette.text.primary};
    }
  }
`;

const StatItemGridStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StatItemTypeStyle = css`
  && {
    font-size: 20px;
    font-weight: 500;
    color: black;
    text-align: center;

    @media (max-width: 600px) {
      font-size: 14px;
      color: ${ProjectPalette.text.primary};
    }
  }
`;

const LinkStyle = css`
  && {
    text-decoration: none;
  }
`;

export const StatItem = (props: StatItemParams) => {
  const { t, i18n } = useTranslation();
  return (
    <Grid
      item
      xs={4}
      lg={4}
      css={StatItemGridStyle}
      data-cy={`stat-item-${props.index}`}
    >
      <Link to={props.path} css={LinkStyle}>
        <Typography css={AmountStyle}>{props.amount}</Typography>
        <Typography
          css={StatItemTypeStyle}
          data-cy={`stat-item-text-${props.index}`}
        >
          {t(props.type)}
        </Typography>
      </Link>
    </Grid>
  );
};
