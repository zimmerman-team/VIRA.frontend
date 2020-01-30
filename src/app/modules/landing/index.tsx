// global
import React from 'react';
import { useTitle } from 'react-use';
import { get, findIndex, find } from 'lodash';
import { Route, withRouter } from 'react-router-dom';
import css from 'styled-components/macro';

// absolute
import {
  Grid,
  Typography,
  Box,
  Hidden,
  useMediaQuery,
} from '@material-ui/core';
import { ListModule } from 'app/modules/list-module';
import { GeoMap } from 'app/components/charts/GeoMap';
import { NavItemParams } from 'app/modules/common/consts';
import {
  statsMock,
  StatItemParams,
  TabNavMockViz,
  TabNavMockList,
} from 'app/modules/landing/statsMock';
import { useStoreState } from 'app/state/store/hooks';
import { HorizontalBarChart } from 'app/components/charts/BarCharts/HorizontalBarChart';
import { mockData } from 'app/components/charts/BarCharts/HorizontalBarChart/mock';
import { BubbleChart } from 'app/components/charts/Bubble';
import { bubbleMockData } from 'app/components/charts/Bubble/mock';
import { getNavTabItems } from './utils/getNavTabItems';
import { StatCard } from 'app/modules/common/components/cards/StatCard';
import { TabNavigator } from 'app/modules/list-module/common/TabNavigator';

function LandingLayout(props: any) {
  // set window title
  useTitle('M&E - Dashboard');
  const isMobileWidth = useMediaQuery('(max-width: 600px)');

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
  const [selectedSDG, setSelectedSDG] = React.useState('');
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

  function onBubbleSelect(bubble: string) {
    setSelectedSDG(bubble);
  }

  return (
    <React.Fragment>
      {/* -------------------------------------------------------------- */}
      {/* stat items */}

      <Grid item xs={12}>
        <StatCard stats={stats} />
      </Grid>

      <Hidden smDown>
        <Box width="100%" height="48px" />
      </Hidden>

      <React.Fragment>
        <Grid container item>
          <Grid
            item
            xs={12}
            sm={9}
            css={`
              order: ${isMobileWidth ? 1 : 0};
              margin-top: ${isMobileWidth ? '28px' : 0};
            `}
          >
            <Typography variant="h4">
              {get(
                find(
                  TabNavMockViz.items,
                  (item: NavItemParams) =>
                    item.path.split('/')[2] ===
                    get(props.match.params, 'viz', '')
                ),
                'label',
                'Priority Area'
              )}
            </Typography>
          </Grid>

          <Hidden smUp>
            <Grid item xs={3} />
          </Hidden>

          <Grid item xs={9} sm={3}>
            <TabNavigator
              {...getNavTabItems(
                TabNavMockViz,
                get(props.match.params, 'list', '')
              )}
            />
          </Grid>
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
          <Route path="/dashboard/sdgs">
            <BubbleChart
              data={bubbleMockData}
              selectedBubble={selectedSDG}
              setSelectedBubble={onBubbleSelect}
            />
          </Route>
          <Route path="/dashboard/map">
            <GeoMap />
          </Route>
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
