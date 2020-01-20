import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import { StatItemParams } from 'app/modules/landing/common/projectsMock';
import { ProjectPalette } from 'app/theme';

import 'styled-components/macro';

export const StatItem = (props: StatItemParams) => (
  <Grid
    item
    sm={12}
    lg={4}
    css={`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `}
  >
    <Typography
      css={`
        && {
          font-size: 36px;
          font-weight: 600;
          color: ${ProjectPalette.secondary.dark};
        }
      `}
    >
      {props.amount}
    </Typography>
    <Typography
      css={`
        && {
          font-size: 20px;
          font-weight: 500;
          color: black;
        }
      `}
    >
      {props.type}
    </Typography>
  </Grid>
);
