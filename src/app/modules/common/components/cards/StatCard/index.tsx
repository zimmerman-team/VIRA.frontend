import 'styled-components/macro';
import React from 'react';
import find from 'lodash/find';
import filter from 'lodash/filter';
import { StatItem } from 'app/modules/landing/common/stats/StatItem';
import { StatItemDivider } from 'app/modules/landing/common/stats/StatItemDivider';
import { Card, CardContent, Grid, useMediaQuery } from '@material-ui/core';
import { StatItemParams } from 'app/modules/landing/config';

export interface StatsCard {
  stats: StatItemParams[];
  signedInUserRole: string;
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

  const stats: StatItemParams[] = filter(
    props.stats,
    (item: StatItemParams) => {
      if (item.roles) {
        return (
          find(
            item.roles,
            (role: string) => role === props.signedInUserRole
          ) !== undefined
        );
      }
      return true;
    }
  );

  const StatContent = () => (
    <Grid container direction="row" alignItems="center" wrap="nowrap">
      {/* map through data and generate state items */}
      {stats.map((stat: StatItemParams, index: number) => (
        <React.Fragment key={stat.type}>
          <StatItem
            index={index}
            type={stat.type}
            path={stat.path}
            amount={stat.amount}
            gridNum={12 / stats.length}
          />
          <StatItemDivider />
        </React.Fragment>
      ))}
    </Grid>
  );

  return isMobileWidth ? StatContent() : renderCard(StatContent());
};
