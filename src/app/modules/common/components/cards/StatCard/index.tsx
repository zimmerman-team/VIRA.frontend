import 'styled-components/macro';
import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { StatItem } from 'app/modules/landing/common/stats/StatItem';
import { StatItemDivider } from 'app/modules/landing/common/stats/StatItemDivider';
import { Card, CardContent, Grid } from '@material-ui/core';
import { StatItemParams } from 'app/modules/landing/statsMock';

export interface StatsCard {
  stats: StatItemParams[];
}

export const StatCard = (props: StatsCard) => {
  const isMobileWidth = useMediaQuery('(max-width: 600px)');

  function renderCard(content: any) {
    return (
      <Card>
        <CardContent>{content}</CardContent>
      </Card>
    );
  }

  const StatContent = () => (
    <Grid container direction="row" alignItems="center" wrap="nowrap">
      {props.stats.map(stat => (
        <React.Fragment key={stat.type} data-cy={stat.type}>
          <StatItem amount={stat.amount} type={stat.type} path={stat.path} />
          <StatItemDivider />
        </React.Fragment>
      ))}
    </Grid>
  );

  return isMobileWidth ? StatContent() : renderCard(StatContent());
};
