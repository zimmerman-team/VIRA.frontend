// @ts-nocheck
// global
import React from 'react';
import { Route } from 'react-router-dom';
import { get, find, uniqBy } from 'lodash';
import { Grid, Hidden, Typography, useMediaQuery } from '@material-ui/core';

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
import { bubbleMockData } from 'app/components/charts/Bubble/mock';

// direct
import 'styled-components/macro';
import { SingleLineGridList } from 'app/components/layout/GridList/singleLineGridList';
import { mock } from 'app/components/layout/GridList/singleLineGridList/mock';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { Viztabs } from 'app/modules/common/components/Viztabs';

export const ReportDetailLayout = (props: any) => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* breadcrumbs */}
    <Grid item xs={12} lg={12}>
      <BreadCrumbs
        currentLocation={props.report.title}
        previousLocations={[{ label: 'Reports', url: '/list/2' }]}
      />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* button: generate report */}
    <Hidden xsDown>
      <Grid lg={12} container justify="flex-end">
        <ContainedButton text="Edit Report" onClick={props.editReport} />
      </Grid>
    </Hidden>

    {/* ---------------------------------------------------------------------*/}
    {/* title fragment */}
    <Grid item xs={12} lg={12}>
      <TitleFragment
        showMoreThanTitle
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
    {/* button: generate report */}
    <Hidden smUp>
      <Grid container xs={12}>
        <ContainedButton text="Edit Report" onClick={props.editReport} />
      </Grid>
    </Hidden>

    {/* ---------------------------------------------------------------------*/}
    {/* charts */}
    <Viztabs
      barChartData={props.report.barChartData}
      barChartLegends={props.barChartLegends}
      onBarChartLegendClick={props.onBarChartLegendClick}
      bubbleChartData={{
        ...bubbleMockData,
        children: props.report.bubbleChartData,
      }}
      selectedBubble={props.selectedSDG}
      onBubbleSelect={props.onBubbleSelect}
      geoMapData={props.report.mapData}
    />

    {/* ---------------------------------------------------------------------*/}
    {/* cards */}
    {/* todo: optimise */}
    <Grid data-cy="outcomes-card" item lg={12}>
      <OutcomeCard
        title="Key outcomes"
        description={props.report.key_outcomes}
      />
    </Grid>
    <Grid data-cy="monitor-card" item lg={12}>
      <OutcomeCard
        title="Monitor and report on the outcomes"
        description={props.report.monitor_report_outcomes}
      />
    </Grid>
    {props.report.media.length > 0 && (
      <Grid data-cy="media-card" item lg={12}>
        <OutcomeCard title="Media" media={{ tileData: props.report.media }} />
      </Grid>
    )}
    <Grid data-cy="challenges-card" item lg={12}>
      <OutcomeCard
        title="Key implementation challenges"
        description={props.report.key_implementation_challenges}
      />
    </Grid>
    <Grid data-cy="observations-card" item lg={12}>
      <OutcomeCard
        title="Other project outcomes and observations"
        description={props.report.other_project_outcomes}
      />
    </Grid>
    <Grid data-cy="future-plans-card" item lg={12}>
      <OutcomeCard title="Future plans" description={props.report.plans} />
    </Grid>
    <Grid data-cy="other-comments-card" item lg={12}>
      <OutcomeCard
        title="Other comments"
        description={props.report.other_comments}
      />
    </Grid>
  </React.Fragment>
);
