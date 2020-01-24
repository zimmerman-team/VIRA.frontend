// global
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import get from 'lodash/get';
import React from 'react';
import { useTitle } from 'react-use';
import { Route, withRouter } from 'react-router-dom';
import { TabNavigator } from 'app/modules/list-module/common/TabNavigator';

// absolute
import { ListModule } from 'app/modules/list-module';
import { NavItemParams } from 'app/modules/common/consts';
import { StatItem } from 'app/modules/landing/common/stats/StatItem';
import { StatItemDivider } from 'app/modules/landing/common/stats/StatItemDivider';
import {
  statsMock,
  StatItemParams,
  TabNavMockViz,
  TabNavMockList,
} from 'app/modules/landing/statsMock';
import { useStoreState } from 'app/state/store/hooks';
import { HorizontalBarChart } from 'app/components/charts/BarCharts/HorizontalBarChart';
import { mockData } from 'app/components/charts/BarCharts/HorizontalBarChart/mock';
import find from 'lodash/find';
import { Typography, Box } from '@material-ui/core';
import { getNavTabItems } from './utils/getNavTabItems';
import findIndex from 'lodash/findIndex';

function LandingLayout(props: any) {
  // set window title
  useTitle('M&E - Dashboard');

  const [stats, setStats] = React.useState(statsMock);
  const [barChartLegends, setBarChartLegends] = React.useState([
    {
      label: 'Target',
      selected: true,
    },
    {
      label: 'Budget',
      selected: true,
    },
  ]);
  const allProjectsData = useStoreState(state => state.allProjects.data);

  React.useEffect(() => {
    const updatedStats: StatItemParams[] = [...stats];
    updatedStats[0].amount = get(allProjectsData, 'data', []).length;
    setStats(updatedStats);
  }, [allProjectsData]);

  function onBarChartLegendClick(legend: string) {
    const prevBarChartLegends = [...barChartLegends];
    const legendIndex = findIndex(prevBarChartLegends, { label: legend });
    if (legendIndex !== -1) {
      prevBarChartLegends[legendIndex].selected = !prevBarChartLegends[
        legendIndex
      ].selected;
      setBarChartLegends(prevBarChartLegends);
    }
  }

  return (
    <React.Fragment>
      {/* -------------------------------------------------------------- */}
      {/* stat items */}

      <Grid item sm={12} lg={12}>
        <Card>
          <CardContent>
            <Grid container direction="row" alignItems="center" wrap="nowrap">
              {stats.map(stat => (
                <React.Fragment key={stat.type}>
                  <StatItem amount={stat.amount} type={stat.type} />
                  <StatItemDivider />
                </React.Fragment>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Box width="100%" height="48px" />

      <React.Fragment>
        <Grid item lg={9}>
          <Typography variant="h6">
            {get(
              find(
                TabNavMockViz.items,
                (item: NavItemParams) =>
                  item.path.replace('/dashboard/', '') ===
                  get(props.match.params, 'viz', '')
              ),
              'label',
              'Priority Area'
            )}
          </Typography>
        </Grid>
        <Grid item lg={3}>
          <TabNavigator
            {...getNavTabItems(
              TabNavMockViz,
              get(props.match.params, 'list', '')
            )}
          />
        </Grid>

        <Grid item xs={12} lg={12}>
          <Route path="/dashboard" exact>
            <HorizontalBarChart
              {...mockData}
              chartLegends={barChartLegends}
              onChartLegendClick={onBarChartLegendClick}
            />
          </Route>
          <Route path="/dashboard/priority-area">
            <HorizontalBarChart
              {...mockData}
              chartLegends={barChartLegends}
              onChartLegendClick={onBarChartLegendClick}
            />
          </Route>
          <Route path="/dashboard/sdgs">SDGs</Route>
          <Route path="/dashboard/map">Map</Route>
        </Grid>
      </React.Fragment>

      <Box width="100%" height="120px" />

      <ListModule
        tabNav={getNavTabItems(
          TabNavMockList,
          get(props.match.params, 'viz', '')
        )}
      />
    </React.Fragment>
  );
}

export default withRouter(LandingLayout);
