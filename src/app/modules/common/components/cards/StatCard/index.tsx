import 'styled-components/macro';
import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { StatItem } from 'app/modules/landing/common/stats/StatItem';
import { StatItemDivider } from 'app/modules/landing/common/stats/StatItemDivider';
import { Card, CardContent, Grid } from '@material-ui/core';
import { StatItemParams } from 'app/modules/landing/config';
import { useTranslation } from 'react-i18next';
export interface StatsCard {
  stats: StatItemParams[];
}

export const StatCard = (props: StatsCard) => {
  const isMobileWidth = useMediaQuery('(max-width: 600px)');

  const { t, i18n } = useTranslation();

  function renderCard(content: any) {
    return (
      <Card>
        <CardContent>{content}</CardContent>
      </Card>
    );
  }

  const StatContent = () => (
    <Grid container direction="row" alignItems="center" wrap="nowrap">
      {/* map through data and generate state items */}
      {props.stats.map((stat, index) => (
        <React.Fragment key={stat.type}>
          <StatItem
            index={index}
            amount={stat.amount}
            type={stat.type}
            path={stat.path}
          />
          <StatItemDivider />
        </React.Fragment>
      ))}
    </Grid>
  );

  return isMobileWidth ? StatContent() : renderCard(StatContent());
};
