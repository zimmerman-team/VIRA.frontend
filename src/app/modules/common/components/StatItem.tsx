import 'styled-components/macro';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ProjectPalette } from 'app/theme';
import { useTranslation } from 'react-i18next';

export interface StatParams {
  label: string;
  value: string;
}

export const StatItem = (props: StatParams) => {
  const { t, i18n } = useTranslation();
  return (
    <Grid
      item
      container
      lg={6}
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Typography
        css={`
          && {
            font-size: 14px;
            line-height: 1.71;
            letter-spacing: 0.25px;
            color: ${ProjectPalette.common.black};
          }
        `}
      >
        {t(props.label)}
      </Typography>
      <Typography
        css={`
          && {
            font-size: 20px;
            font-weight: 600;
            line-height: 1.5;
            text-align: center;
            color: ${ProjectPalette.secondary.main};
          }
        `}
      >
        {props.value}
      </Typography>
    </Grid>
  );
};
