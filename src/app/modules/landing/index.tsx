// global
import React from 'react';
import { useTitle } from 'react-use';
import { get, findIndex, find } from 'lodash';
import { Route, withRouter } from 'react-router-dom';
import 'styled-components/macro';

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
import { useStoreState, useStoreActions } from 'app/state/store/hooks';
import { HorizontalBarChart } from 'app/components/charts/BarCharts/HorizontalBarChart';
import { mockData } from 'app/components/charts/BarCharts/HorizontalBarChart/mock';
import { BubbleChart } from 'app/components/charts/Bubble';
import { bubbleMockData } from 'app/components/charts/Bubble/mock';
import { StatCard } from 'app/modules/common/components/cards/StatCard';
import { TabNavigator } from 'app/modules/list-module/common/TabNavigator';
import { HorizontalBarChartValueModel } from 'app/components/charts/BarCharts/HorizontalBarChart/model';
import uniqBy from 'lodash/uniqBy';
import { ProjectPalette } from 'app/theme';
import { AppConfig } from 'app/data';
import { getNavTabItems } from './utils/getNavTabItems';
import { getNewReportsCount } from './utils/getNewReportsCount';

function LandingLayout(props: any) {
  // set window title
  useTitle(`${AppConfig.appTitleLong} Dashboard`);

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
  const getPPVizData = useStoreActions(actions => actions.getPPVizData.fetch);
  const getSDGVizData = useStoreActions(actions => actions.getSDGVizData.fetch);
  const getGeoMapData = useStoreActions(actions => actions.getGeoMapData.fetch);
  const ppVizData = useStoreState(state => state.getPPVizData.data);
  const SDGVizData = useStoreState(state => state.getSDGVizData.data);
  const allProjectsData = useStoreState(state => state.allProjects.data);
  const allReportsData = useStoreState(state => state.allReports.data);
  const allGranteesData = useStoreState(state => state.allOrganisations.data);
  const geoMapData = useStoreState(state => state.getGeoMapData.data);

  React.useEffect(() => {
    getPPVizData({ socketName: 'getPolicyPriorityBarChart', values: {} });
    getSDGVizData({
      socketName: 'getSDGBubbleChart',
      values: {},
    });
    getGeoMapData({ socketName: 'getGeoMapData', values: {} });
  }, []);

  React.useEffect(() => {
    const updatedStats: StatItemParams[] = [...stats];
    updatedStats[0].amount = get(allProjectsData, 'data', []).length;
    setStats(updatedStats);
    updatedStats[1].amount = get(allGranteesData, 'data', []).length;
    setStats(updatedStats);
    updatedStats[2].amount = get(allReportsData, 'data', []).length;
    setStats(updatedStats);
  }, [allProjectsData, allReportsData]);

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
        <Box width="100%" height="12px" />
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
            <Typography
              variant="h4"
              css={`
                font-size: 20px;
                font-weight: 600;
                line-height: 1.5;
              `}
            >
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
            <Hidden smUp>
              <Box height="62px" width="1px" />
            </Hidden>
          </Grid>
        </Grid>

        <Grid item xs={12} lg={12}>
          <Route path="/dashboard" exact>
            <HorizontalBarChart
              colors={[
                ProjectPalette.primary.main,
                ...uniqBy(
                  ((ppVizData as unknown) as HorizontalBarChartValueModel[]) ||
                    [],
                  'value2Color'
                ).map((item: any) => item.value2Color),
              ]}
              values={
                ((ppVizData as unknown) as HorizontalBarChartValueModel[]) || []
              }
              maxValue={Math.max(
                ...(
                  ((ppVizData as unknown) as HorizontalBarChartValueModel[]) ||
                  []
                ).map((item: any) => item.value1 + item.value2)
              )}
              chartLegends={barChartLegends}
              onChartLegendClick={onBarChartLegendClick}
            />
          </Route>
          <Route path="/dashboard/priority-area">
            <HorizontalBarChart
              colors={[
                ProjectPalette.primary.main,
                ...uniqBy(
                  ((ppVizData as unknown) as HorizontalBarChartValueModel[]) ||
                    [],
                  'value2Color'
                ).map((item: any) => item.value2Color),
              ]}
              values={
                ((ppVizData as unknown) as HorizontalBarChartValueModel[]) || []
              }
              maxValue={Math.max(
                ...(
                  ((ppVizData as unknown) as HorizontalBarChartValueModel[]) ||
                  []
                ).map((item: any) => item.value1 + item.value2)
              )}
              chartLegends={barChartLegends}
              onChartLegendClick={onBarChartLegendClick}
            />
          </Route>
          <Route path="/dashboard/sdgs">
            <BubbleChart
              data={{ ...bubbleMockData, children: SDGVizData }}
              selectedBubble={selectedSDG}
              setSelectedBubble={onBubbleSelect}
            />
          </Route>
          <Route path="/dashboard/map">
            <GeoMap data={geoMapData} />
          </Route>
        </Grid>
      </React.Fragment>

      <Hidden smDown>
        <Box width="100%" height="86px" />
      </Hidden>
      <Box width="100%" height="18px" />

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
