// @ts-nocheck
// global
import React from 'react';
import { useTitle } from 'react-use';
import get from 'lodash/get';
import findIndex from 'lodash/findIndex';
import { withRouter } from 'react-router-dom';
import 'styled-components/macro';

// absolute
import { Grid, Box, Hidden } from '@material-ui/core';
import { ListModule } from 'app/modules/list-module';
import {
  statsMock,
  StatItemParams,
  TabNavMockList,
} from 'app/modules/landing/statsMock';
import { useStoreState, useStoreActions } from 'app/state/store/hooks';
import { bubbleMockData } from 'app/components/charts/Bubble/mock';
import { StatCard } from 'app/modules/common/components/cards/StatCard';
import { AppConfig } from 'app/data';
import { getNavTabItems } from './utils/getNavTabItems';
import { Viztabs } from '../common/components/Viztabs';

export interface Joejoe {
  /** prop1 description */
  prop1: string;
}

/**
 * Landing layout.
 */
function LandingLayout(props: any) {
  // set window title
  useTitle(`${AppConfig.appTitleLong} Dashboard`);
  /** prop1 description */
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

      <Viztabs
        barChartData={ppVizData}
        barChartLegends={barChartLegends}
        onBarChartLegendClick={onBarChartLegendClick}
        bubbleChartData={{ ...bubbleMockData, children: SDGVizData }}
        selectedBubble={selectedSDG}
        onBubbleSelect={onBubbleSelect}
        geoMapData={geoMapData}
      />

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
