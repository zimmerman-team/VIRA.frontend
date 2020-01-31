// global
import React from 'react';
import { Typography, Box, Grid } from '@material-ui/core';

// absolute
import { FieldDescription } from 'app/modules/report/sub-modules/indicator-verification/common/FieldDescription';
import { IntentTexFieldSingleLine } from 'app/modules/report/sub-modules/indicator-verification/common/IntentTextFieldSingleLine';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { OutcomeCard } from 'app/modules/common/components/OutcomeCard';
import { TitleFragment } from 'app/modules/common/components/TitleParams';
import { HorizontalBarChart } from 'app/components/charts/BarCharts/HorizontalBarChart';
import { mockData } from 'app/components/charts/BarCharts/HorizontalBarChart/mock';

// direct
import 'styled-components/macro';
import { ProjectPalette } from 'app/theme';

export const ReportDetailLayout = (props: any) => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* breadcrumbs */}
    <Grid item lg={12}>
      <BreadCrumbs
        currentLocation={props.report.title}
        previousLocations={[{ label: 'Reports', url: '/list/reports' }]}
      />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* helper grid */}
    <Grid item lg={6} />

    {/* ---------------------------------------------------------------------*/}
    {/* title fragment */}
    <Grid item container lg={12} direction="column">
      <TitleFragment
        note={props.report.date}
        title={props.report.title}
        url_note={props.report.project.name}
        id={`Report ID: ${props.report.reportID}`}
        url={`/projects/${props.report.project.id}/detail`}
      />
    </Grid>

    <Grid
      item
      container
      xs={12}
      lg={12}
      alignItems="flex-start"
      justify="flex-start"
      alignContent="flex-start"
    >
      <Grid item xs={12} md={6} lg={6}>
        <Grid item container lg={12}>
          <Grid item lg={12}>
            <FieldDescription text="Target beneficiaries" />
          </Grid>
          <Box width="100%" height="24px" />
          <Grid item lg={12}>
            <IntentTexFieldSingleLine
              type="number"
              min={0}
              disabled
              setValue={() => {}}
              value={props.report.total_target_beneficiaries}
              description="Total number: "
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <OutcomeCard title="Location" description={props.report.place} />
      </Grid>
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* priority area chart */}
    <Grid
      item
      container
      xs={12}
      lg={12}
      alignItems="flex-start"
      justify="flex-start"
      alignContent="flex-start"
    >
      <FieldDescription text="Of which the beneficiaries will likely include approximately" />
      <Box height="60px" width="100%" />
      <Grid item lg={12}>
        <HorizontalBarChart
          {...mockData}
          chartLegends={props.barChartLegends}
          onChartLegendClick={props.onBarChartLegendClick}
        />
      </Grid>
    </Grid>

    <Box height="24px" width="100%" />

    {/* ---------------------------------------------------------------------*/}
    {/* policy priorities */}
    <Grid
      item
      container
      xs={12}
      lg={12}
      alignItems="flex-start"
      justify="flex-start"
      alignContent="flex-start"
    >
      <Grid item lg={12}>
        <Typography variant="subtitle2">
          Policy priorities the project aims to support:
        </Typography>
      </Grid>
      <Box width="100%" height="10px" />
      <Grid container spacing={4}>
        {props.report.policy_priorities.map((p: any) => (
          <Grid
            item
            lg={4}
            css={`
              display: flex;
            `}
          >
            <div
              css={`
                width: 20px;
                height: 20px;
                border-radius: 50%;
                margin-right: 20px;
                background: ${ProjectPalette.common.white};
                border: 5px solid ${ProjectPalette.secondary.main};
              `}
            />
            <Typography>{p.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>

    <Box height="24px" width="100%" />

    {/* ---------------------------------------------------------------------*/}
    {/* cards */}
    <Grid
      item
      container
      xs={12}
      lg={12}
      spacing={2}
      alignItems="flex-start"
      justify="flex-start"
      alignContent="flex-start"
    >
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
    </Grid>
  </React.Fragment>
);
