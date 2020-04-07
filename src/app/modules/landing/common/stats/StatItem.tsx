import 'styled-components/macro';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { StatItemParams } from 'app/modules/landing/statsMock';
import { ProjectPalette } from 'app/theme';
import { Link } from 'react-router-dom';

export const StatItem = (props: StatItemParams) => (
  <Grid
    item
    xs={4}
    lg={4}
    css={`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `}
  >
    <Link
      to={props.path}
      css={`
        && {
          text-decoration: none;
        }
      `}
      data-cy={props.type}
    >
      <Typography
        css={`
          && {
            font-size: 36px;
            font-weight: 600;
            color: ${ProjectPalette.primary.light};
            text-align: center;

            @media (max-width: 600px) {
              font-size: 14px;
              color: ${ProjectPalette.text.primary};
            }
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
            text-align: center;

            @media (max-width: 600px) {
              font-size: 14px;
              color: ${ProjectPalette.text.primary};
            }
          }
        `}
      >
        {props.type}
      </Typography>
    </Link>
  </Grid>
);
