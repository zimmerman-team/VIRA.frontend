// global
import React from 'react';
import { Typography, Box, Grid, Hidden } from '@material-ui/core';

// absolute
import { FieldDescription } from 'app/modules/report/sub-modules/indicator-verification/common/FieldDescription';
import { IntentTexFieldSingleLine } from 'app/modules/report/sub-modules/indicator-verification/common/IntentTextFieldSingleLine';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { OutcomeCard } from 'app/modules/common/components/OutcomeCard';
import { TitleFragment } from 'app/modules/common/components/TitleParams';
import { HorizontalBarChart } from 'app/components/charts/BarCharts/HorizontalBarChart';

import { ProjectPalette } from 'app/theme';
import get from 'lodash/get';
import uniqBy from 'lodash/uniqBy';

// direct
import 'styled-components/macro';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import graph1 from 'app/assets/images/dummy_graph1.png';

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
    {/* helper grid */}
    <Hidden smDown>
      <Grid item lg={6} />
    </Hidden>

    {/* ---------------------------------------------------------------------*/}
    {/* title fragment */}
    <Grid item xs={12} lg={12}>
      <TitleFragment
        title={props.report.title}
        id={`Report ID: ${props.report.reportID}`}
        note={props.report.date}
        url_note={props.report.project.name}
        url={`/projects/${props.report.project.id}/detail`}
      />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* Target beneficiaries */}
    <Grid item xs={12} md={6} lg={6}>
      <Card>
        <CardHeader title="Target beneficiaries" />

        <CardContent>
          <IntentTexFieldSingleLine
            type="number"
            min={0}
            disabled
            setValue={() => {}}
            value={props.report.total_target_beneficiaries}
            description="Total number: "
          />
        </CardContent>
      </Card>
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* Location */}
    <Grid item xs={12} md={6} lg={6}>
      <OutcomeCard title="Location" description={props.report.place} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* Insinger Foundation policy priorities */}
    <Grid item xs={12} md={6} lg={12}>
      <Card>
        <CardHeader title="Insinger Foundation policy priorities" />
        <Box height="20px" width="100%" />
        <CardContent>
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
        </CardContent>
      </Card>
    </Grid>

    <Box height="32px" width="100%" />

    {/* ---------------------------------------------------------------------*/}
    {/* cards */}
    <Grid item xs={12} md={6} lg={6}>
      <OutcomeCard
        title="Key outcomes"
        description={props.report.key_outcomes}
      />
    </Grid>
    <Grid item xs={12} md={6} lg={6}>
      <OutcomeCard
        title="Key implementation challenges"
        description={props.report.key_implementation_challenges}
      />
    </Grid>
    <Grid item xs={12} md={6} lg={6}>
      <OutcomeCard
        title="Monitor and report on the outcomes"
        description={props.report.monitor_report_outcomes}
      />
    </Grid>
    <Grid item xs={12} md={6} lg={6}>
      <OutcomeCard
        title="Other project outcomes and observations"
        description={props.report.other_project_outcomes}
      />
    </Grid>
    <Grid item xs={12} md={6} lg={6}>
      <OutcomeCard title="Future plans" description={props.report.plans} />
    </Grid>
    <Grid item xs={12} md={6} lg={6}>
      <OutcomeCard
        title="Other comments"
        description={props.report.other_comments}
      />
    </Grid>
  </React.Fragment>
);
