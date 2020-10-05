/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// @ts-nocheck
// global
import React from 'react';
import { useTitle } from 'react-use';
import get from 'lodash/get';
import { withRouter } from 'react-router-dom';
import 'styled-components/macro';
import { useTranslation } from 'react-i18next';

// absolute
import { Grid, Box, Hidden } from '@material-ui/core';
import { ListModule } from 'app/modules/list-module';
import {
  StatItemsConfig,
  StatItemParams,
  NavItemsGeneralConfig,
} from 'app/modules/landing/config';
import { useStoreState, useStoreActions } from 'app/state/store/hooks';
import { bubbleMockData } from 'app/components/charts/Bubble/mock';
import { StatCard } from 'app/modules/common/components/cards/StatCard';
import { AppConfig } from 'app/data';
import { PropsModel } from 'app/modules/common/components/Viztabs/model';
import { barChartLegendClickFunc } from 'app/components/charts/BarCharts/utils/barChartLegendClickFunc';
import { DataDaterangePicker } from 'app/modules/list-module/common/DataDaterangePicker';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import MomentAdapter from '@date-io/moment';
import { getNavTabItems } from 'app/modules/landing/utils/getNavTabItems';
import { Viztabs } from 'app/modules/common/components/Viztabs';
import { Checkbox } from 'app/components/inputs/checkboxes/Checkbox';

/**
 * Landing layout.
 */
function LandingLayout(props: PropsModel) {
  // set window title
  useTitle(`${AppConfig.appTitleLong} Dashboard`);
  /** prop1 description */
  const { t } = useTranslation();
  const [stats, setStats] = React.useState(StatItemsConfig);
  const [barChartLegends, setBarChartLegends] = React.useState([
    {
      label: 'charts.barchart.target',
      selected: true,
    },
    {
      label: 'charts.barchart.budget',
      selected: true,
    },
    {
      label: 'charts.barchart.commitment',
      selected: true,
    },
  ]);
  const [selectedSDG, setSelectedSDG] = React.useState('');
  const [dateFilterEnabled, setDateFilterEnabled] = React.useState(false);
  const [selectedBreakdown, setSelectedBreakdown] = React.useState('None');
  const getPPVizData = useStoreActions((actions) => actions.getPPVizData.fetch);
  const getSDGVizData = useStoreActions(
    (actions) => actions.getSDGVizData.fetch
  );
  const getGeoMapData = useStoreActions(
    (actions) => actions.getGeoMapData.fetch
  );

  const getPillarDataByBudget = useStoreActions(
    (actions) => actions.getPillarDataByBudget.fetch
  );
  const getPillarDataByDuration = useStoreActions(
    (actions) => actions.getPillarDataByDuration.fetch
  );
  const getPriorityAreaBarChartData = useStoreActions(
    (actions) => actions.getPriorityAreaBarChartData.fetch
  );
  const getTargetGroupBarChartData = useStoreActions(
    (actions) => actions.getTargetGroupBarChartData.fetch
  );
  const getOneMultiYearBarChartData = useStoreActions(
    (actions) => actions.getOneMultiYearBarChartData.fetch
  );

  const pillarDataByBudget = useStoreState(
    (state) => state.getPillarDataByBudget.data
  );
  const pillarDataByDuration = useStoreState(
    (state) => state.getPillarDataByDuration.data
  );
  const priorityAreaBarChartData = useStoreState(
    (state) => state.getPriorityAreaBarChartData.data
  );
  const targetGroupBarChartData = useStoreState(
    (state) => state.getTargetGroupBarChartData.data
  );
  const oneMultiYearBarChartData = useStoreState(
    (state) => state.getOneMultiYearBarChartData.data
  );

  const ppVizData = useStoreState((state) => state.getPPVizData.data);
  const SDGVizData = useStoreState((state) => state.getSDGVizData.data);
  const allProjectsData = useStoreState((state) => state.allProjects.data);
  const allReportsData = useStoreState((state) => state.allReports.data);
  const allGranteesData = useStoreState((state) => state.allOrganisations.data);
  const geoMapData = useStoreState((state) => state.getGeoMapData.data);
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    setSelectedSDG('');
    setSelectedBreakdown('None');
  };

  const signedInUserRole = useStoreState((state) =>
    get(state.userDetails.data, 'role', 'Grantee user')
  );
  const signedInUserEmail = useStoreState((state) =>
    get(state.userDetails.data, 'email', '')
  );
  const moment = new MomentAdapter();

  // TODO: replace hardcoded initalstate with getEarliestDate() => see app/utils
  const [
    selectedStartDate,
    setSelectedStartDate,
  ] = React.useState<MaterialUiPickersDate | null>(
    moment.date(new Date(2018, 2 - 1, 11)).startOf('day')
  ); // Months are 0 based...

  const [
    selectedEndDate,
    setSelectedEndDate,
  ] = React.useState<MaterialUiPickersDate | null>(
    moment.date(new Date()).endOf('day')
  );

  React.useEffect(() => {
    let values = {
      userRole: signedInUserRole,
      userEmail: signedInUserEmail,
    };
    if (dateFilterEnabled) {
      values = {
        ...values,
        startDate: selectedStartDate._d,
        endDate: selectedEndDate._d,
      };
    }
    getPPVizData({
      socketName: 'getPolicyPriorityBarChart',
      values,
    });
    getSDGVizData({
      socketName: 'getSDGBubbleChart',
      values,
    });
    getGeoMapData({
      socketName: 'getGeoMapData',
      values,
    });
    getPillarDataByBudget({
      socketName: 'getPillarDataByBudget',
      values,
    });
    getPillarDataByDuration({
      socketName: 'getPillarDataByDuration',
      values,
    });
    getPriorityAreaBarChartData({
      socketName: 'getPriorityAreaBarChartData',
      values: {
        ...values,
        breakdownBy: selectedBreakdown,
      },
    });
    getTargetGroupBarChartData({
      socketName: 'getTargetGroupBarChartData',
      values: {
        ...values,
        breakdownBy: selectedBreakdown,
      },
    });
    getOneMultiYearBarChartData({
      socketName: 'getOneMultiYearBarChartData',
      values: {
        ...values,
        breakdownBy: selectedBreakdown,
      },
    });
  }, [
    signedInUserRole,
    signedInUserEmail,
    selectedStartDate,
    selectedEndDate,
    selectedBreakdown,
    dateFilterEnabled,
  ]);

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
    barChartLegendClickFunc(legend, [...barChartLegends], setBarChartLegends);
  }

  return (
    <React.Fragment>
      {/* -------------------------------------------------------------- */}
      {/* stat items */}
      <Grid item xs={12}>
        <StatCard
          stats={stats}
          data-cy="stat-card"
          signedInUserRole={signedInUserRole}
        />
      </Grid>

      {/* hide on mobile */}
      <Hidden smDown>
        <Box width="100%" height="12px" />
      </Hidden>

      {/* viz tabs */}
      {/* the viztabs contains the tab navigation */}
      <Viztabs
        value={value}
        onTabClick={handleChange}
        barChartData={ppVizData}
        pillarData={pillarDataByBudget}
        pillarDataByDuration={pillarDataByDuration}
        priorityAreaData={priorityAreaBarChartData}
        targetGroupData={targetGroupBarChartData}
        oneAndMultiYearData={oneMultiYearBarChartData}
        barChartLegends={barChartLegends}
        onBarChartLegendClick={onBarChartLegendClick}
        bubbleChartData={{ ...bubbleMockData, children: SDGVizData }}
        selectedBubble={selectedSDG}
        onBubbleSelect={setSelectedSDG}
        selectedBreakdown={selectedBreakdown}
        onBreakdownSelect={setSelectedBreakdown}
        geoMapData={geoMapData}
      />

      <div
        css={`
          display: flex;
          align-items: start;
          flex-direction: column;
          top: ${value === 0 ? '-48px' : ''};
          position: ${value === 0 ? 'relative' : ''};

          @media (max-width: 600px) {
            top: 0;
          }
        `}
      >
        <div
          onClick={() => setDateFilterEnabled(!dateFilterEnabled)}
          css={`
            display: flex;
            cursor: pointer;
            font-size: 14px;
            font-weight: 400;
            padding-left: 4px;
            align-items: center;
            font-family: 'Inter', sans-serif;
          `}
        >
          <Checkbox checked={dateFilterEnabled} />
          <div>{t('Enable date filter')}</div>
        </div>
        <div
          css={
            !dateFilterEnabled
              ? `
                opacity: 0.5;
                pointer-events: none;
              `
              : ''
          }
        >
          <DataDaterangePicker
            startDate={selectedStartDate}
            endDate={selectedEndDate}
            onStartDateSelect={(date) =>
              setSelectedStartDate(date.startOf('day'))
            }
            onEndDateSelect={(date) => setSelectedEndDate(date.endOf('day'))}
            tabValue={value}
          />
        </div>
      </div>

      {/* hide on mobile */}

      <Hidden smDown>
        <Box width="100%" height="72px" />
      </Hidden>
      <Box width="100%" height="32px" />

      {/* list module */}
      <ListModule
        loadData
        selectedSDG={selectedSDG}
        hideGrantees={
          signedInUserRole !== 'Administrator' &&
          signedInUserRole !== 'Super admin'
        }
        dateFilter={{
          start: dateFilterEnabled ? selectedStartDate : null,
          end: dateFilterEnabled ? selectedEndDate : null,
        }}
        tabNav={getNavTabItems(
          NavItemsGeneralConfig,
          get(props.match.params, 'viz', '')
        )}
      />
    </React.Fragment>
  );
}

export default withRouter(LandingLayout);
