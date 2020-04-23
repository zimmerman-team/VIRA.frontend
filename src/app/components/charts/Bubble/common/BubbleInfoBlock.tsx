import React from 'react';
import 'styled-components/macro';
import { ProjectPalette } from 'app/theme';
import { useTranslation } from 'react-i18next';
import { Grid, Typography, Box } from '@material-ui/core';
import {
  ProgressBar,
  ProgressBarContainer,
} from 'app/components/charts/BarCharts/common/ChartTooltip';

export type BubbleInfoBlockProps = {
  name: string;
  targetValue: number;
  budgetValue: number;
  targetPercentage: number;
  budgetPercentage: number;
  insContribution: number;
};

export function BubbleInfoBlock(props: BubbleInfoBlockProps) {
  const { t } = useTranslation();
  return (
    <Grid
      container
      spacing={3}
      css={`
        width: 100%;
        display: flex;
        align-items: center;
        background-color: ${ProjectPalette.primary.main};
      `}
    >
      <Grid
        item
        xs={12}
        lg={6}
        css={`
          font-size: 16px;
          font-weight: bold;
          color: ${ProjectPalette.common.white};
        `}
      >
        {t(`charts.items.${props.name}`)}
      </Grid>
      <Grid item xs={12} lg={6}>
        <React.Fragment>
          <div
            css={`
              display: flex;
              margin-bottom: 5px;
              flex-direction: row;
              justify-content: space-between;
            `}
          >
            <Typography
              css={`
                color: ${ProjectPalette.common.white};
              `}
              variant="subtitle1"
            >
              {t('Target')} ({props.targetPercentage.toFixed(2)}%)
            </Typography>
            <Typography
              css={`
                color: ${ProjectPalette.common.white};
              `}
              variant="subtitle1"
            >
              {props.targetValue}
            </Typography>
          </div>
          <ProgressBarContainer>
            <ProgressBar
              css={`
                width: ${props.targetPercentage > 100
                  ? 100
                  : props.targetPercentage}%;
              `}
            />
          </ProgressBarContainer>
        </React.Fragment>
        <Box width="100%" height="18px" />
        <React.Fragment>
          <div
            css={`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
            `}
          >
            <Typography
              css={`
                color: ${ProjectPalette.common.white};
              `}
              variant="subtitle1"
            >
              {t('Budget')}
            </Typography>
            <Typography
              css={`
                color: ${ProjectPalette.common.white};
              `}
              variant="subtitle1"
            >
              {props.budgetValue
                .toLocaleString(undefined, {
                  currency: 'EUR',
                  currencyDisplay: 'symbol',
                  style: 'currency',
                })
                .replace('.00', '')}
            </Typography>
          </div>
          {/* <ProgressBarContainer>
            <ProgressBar
              css={`
                width: ${80 > 100 ? 100 : 80}%;
              `}
            />
          </ProgressBarContainer> */}
        </React.Fragment>
        <Box width="100%" height="18px" />
        <React.Fragment>
          <div
            css={`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
            `}
          >
            <Typography
              css={`
                color: ${ProjectPalette.common.white};
              `}
              variant="subtitle1"
            >
              {t('charts.barchart.commitment')}
            </Typography>
            <Typography
              css={`
                color: ${ProjectPalette.common.white};
              `}
              variant="subtitle1"
            >
              {props.insContribution
                .toLocaleString(undefined, {
                  currency: 'EUR',
                  currencyDisplay: 'symbol',
                  style: 'currency',
                })
                .replace('.00', '')}
            </Typography>
          </div>
        </React.Fragment>
      </Grid>
    </Grid>
  );
}
