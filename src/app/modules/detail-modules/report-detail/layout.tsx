// global
import React from 'react';
import { Route } from 'react-router-dom';
import {
  Box,
  Grid,
  Hidden,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { get, find, uniqBy } from 'lodash';
// absolute
import { BubbleChart } from 'app/components/charts/Bubble';
import { GeoMap } from 'app/components/charts/GeoMap';
import { TabNavMockViz } from 'app/modules/detail-modules/report-detail/mock';
import { NavItemParams } from 'app/modules/common/consts';
import { getNavTabItems } from 'app/modules/landing/utils/getNavTabItems';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { OutcomeCard } from 'app/modules/common/components/OutcomeCard';
import { TitleFragment } from 'app/modules/common/components/TitleParams';
import { HorizontalBarChart } from 'app/components/charts/BarCharts/HorizontalBarChart';
import { ProjectPalette } from 'app/theme';
import { TabNavigator } from 'app/modules/list-module/common/TabNavigator';
import { HorizontalBarChartValueModel } from 'app/components/charts/BarCharts/HorizontalBarChart/model';
import { bubbleMockData } from 'app/components/charts/Bubble/mock';

// direct
import 'styled-components/macro';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

export const ReportDetailLayout = (props: any) => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* breadcrumbs */}
    <Grid item xs={12} lg={12}>
      <BreadCrumbs
        currentLocation={props.report.title}
        previousLocations={[{ label: 'Reports', url: '/list/reports' }]}
      />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* title fragment */}
    <Grid item xs={12} lg={12}>
      <TitleFragment
        note={props.report.date}
        title={props.report.title}
        id={`Report ID: ${props.report.reportID}`}
        url={`/projects/${props.report.project.id}/detail`}
        url_note={`${props.report.project.name}`}
        stats={[
          {
            label: 'Target beneficiaries',
            value: props.report.total_target_beneficiaries,
          },
          {
            label: 'Budget',
            value: parseInt(props.report.budget || '', 10)
              .toLocaleString(undefined, {
                currency: 'EUR',
                currencyDisplay: 'symbol',
                style: 'currency',
              })
              .replace('.00', ''),
          },
        ]}
      />
    </Grid>

    <div
      css={`
        width: 100%;
        height: 32px;
      `}
    />

    {/* ---------------------------------------------------------------------*/}
    {/* charts */}
    <React.Fragment>
      <Grid container item>
        <Grid
          item
          xs={12}
          sm={9}
          css={`
            order: ${useMediaQuery('(max-width: 600px)') ? 1 : 0};
            margin-top: ${useMediaQuery('(max-width: 600px)') ? '28px' : 0};
          `}
        >
          <Typography variant="h6">
            {get(
              find(
                TabNavMockViz.items,
                (item: NavItemParams) =>
                  item.path.split('/')[2] === get(props.match.params, 'viz', '')
              ),
              'label',
              'Insinger Foundation policy priorities'
            ).replace('Priority Area', 'Insinger Foundation policy priorities')}
          </Typography>
        </Grid>

        <Hidden smUp>
          <Grid item xs={3} />
        </Hidden>

        <Grid item xs={9} sm={3}>
          <TabNavigator
            {...getNavTabItems(
              TabNavMockViz,
              get(props.match.params, 'code', '')
            )}
          />
        </Grid>
      </Grid>

      <div
        css={`
          width: 100%;
          height: 32px;
        `}
      />

      <Grid item xs={12} lg={12}>
        <Route
          path={`/reports/${get(props.match.params, 'code', '')}/detail`}
          exact
        >
          <HorizontalBarChart
            maxValue={
              get(props.report.barChartData[0], 'value1', 0) +
              get(props.report.barChartData[0], 'value2', 0)
            }
            values={props.report.barChartData}
            chartLegends={props.barChartLegends}
            onChartLegendClick={props.onBarChartLegendClick}
            colors={[
              ProjectPalette.primary.main,
              ...uniqBy(props.report.barChartData, 'value2Color').map(
                (item: any) => item.value2Color
              ),
            ]}
          />
        </Route>
        <Route
          path={`/reports/${get(
            props.match.params,
            'code',
            ''
          )}/detail/priority-area`}
          exact
        >
          <HorizontalBarChart
            maxValue={
              get(props.report.barChartData[0], 'value1', 0) +
              get(props.report.barChartData[0], 'value2', 0)
            }
            values={props.report.barChartData}
            chartLegends={props.barChartLegends}
            onChartLegendClick={props.onBarChartLegendClick}
            colors={[
              ProjectPalette.primary.main,
              ...uniqBy(props.report.barChartData, 'value2Color').map(
                (item: any) => item.value2Color
              ),
            ]}
          />
        </Route>
        <Route
          path={`/reports/${get(props.match.params, 'code', '')}/detail/sdgs`}
          exact
        >
          <BubbleChart
            selectedBubble={props.selectedSDG}
            setSelectedBubble={props.onBubbleSelect}
            data={{ ...bubbleMockData, children: props.report.bubbleChartData }}
          />
        </Route>
        <Route
          path={`/reports/${get(props.match.params, 'code', '')}/detail/map`}
          exact
        >
          <GeoMap data={props.report.mapData} />
        </Route>
      </Grid>
    </React.Fragment>

    {/* ---------------------------------------------------------------------*/}
    {/* cards */}
    {/* todo: optimise */}
    <Grid item lg={12}>
      <OutcomeCard
        title="Key outcomes"
        description={props.report.key_outcomes}
      />
    </Grid>
    <Grid item lg={12}>
      <OutcomeCard
        title="Monitor and report on the outcomes"
        description={props.report.monitor_report_outcomes}
      />
    </Grid>
    <Grid item lg={12}>
      <OutcomeCard
        title="Key implementation challenges"
        description={props.report.key_implementation_challenges}
      />
    </Grid>
    <Grid item lg={12}>
      <OutcomeCard
        title="Other project outcomes and observations"
        description={props.report.other_project_outcomes}
      />
    </Grid>
    <Grid item lg={12}>
      <OutcomeCard title="Future plans" description={props.report.plans} />
    </Grid>
    <Grid item lg={12}>
      <OutcomeCard
        title="Other comments"
        description={props.report.other_comments}
      />
    </Grid>
  </React.Fragment>
);
