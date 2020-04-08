// @ts-nocheck
import 'styled-components/macro';
import React from 'react';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { TitleFragment } from 'app/modules/common/components/TitleParams';
import { OutcomeCard } from 'app/modules/common/components/OutcomeCard';
import { Description } from 'app/modules/common/components/DescriptionParams';
import { ProjectOutcomeCardMock } from 'app/modules/detail-modules/project-detail/mock';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { GranteeBreadCrumbsMock } from 'app/modules/detail-modules/grantee-detail/mock';
import TableModule from 'app/components/datadisplay/Table';
import { Grid, Hidden } from '@material-ui/core';
import { bubbleMockData } from 'app/components/charts/Bubble/mock';
import { Viztabs } from 'app/modules/common/components/Viztabs';

export const ProjectDetailLayout = (props: any) => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* breadcrumbs */}
    <Grid item xs={12} lg={6}>
      <BreadCrumbs
        {...GranteeBreadCrumbsMock}
        previousLocations={[{ label: 'Projects', url: '/list' }]}
        currentLocation={props.projectDetail.project}
      />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* button: generate report */}
    <Hidden xsDown>
      <Grid item xs={12} lg={6} container justify="flex-end">
        <ContainedButton
          text="Generate Report"
          onClick={props.projectDetail.generateReport}
        />
      </Grid>
    </Hidden>

    {/* ---------------------------------------------------------------------*/}
    {/* title fragment */}
    <Grid item xs={12} lg={12}>
      <TitleFragment
        testAttr="project-title"
        title={props.projectDetail.project}
        id={`project id: ${props.projectDetail.project_id}`}
        date="*earliest and latest activity start dates"
        url_note={props.projectDetail.organisation}
        url={props.projectDetail.website}
        stats={[
          {
            label: 'Total project amount',
            value: parseInt(props.projectDetail.total_amount || '', 10)
              .toLocaleString(undefined, {
                currency: 'EUR',
                currencyDisplay: 'symbol',
                style: 'currency',
              })
              .replace('.00', ''),
          },
          {
            label: 'Project duration',
            value: `${(props.projectDetail.start_date || '').replace(
              /-/g,
              '.'
            )} - ${(props.projectDetail.end_date || '').replace(/-/g, '.')}`,
          },
        ]}
      />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* mobile button: generate report */}
    <Hidden smUp>
      <Grid item xs={12}>
        <ContainedButton
          testAttr="report-button"
          text="Generate Report"
          onClick={props.projectDetail.generateReport}
        />
      </Grid>
    </Hidden>

    {/* ---------------------------------------------------------------------*/}
    {/* project description */}
    <Grid item xs={12} lg={6}>
      <Description {...props} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* charts */}
    <Viztabs
      barChartData={props.ppVizData}
      barChartLegends={props.barChartLegends}
      onBarChartLegendClick={props.onBarChartLegendClick}
      bubbleChartData={{ ...bubbleMockData, children: props.SDGVizData }}
      selectedBubble={props.selectedSDG}
      onBubbleSelect={props.onBubbleSelect}
      geoMapData={props.geoMapData}
    />

    {/* ---------------------------------------------------------------------*/}
    {/* outcome cards */}
    <Grid item container xs={12} md={12} lg={12}>
      <Grid data-cy="key-outcomes" item xs={12} lg={6}>
        <OutcomeCard {...ProjectOutcomeCardMock[0]} />
      </Grid>
      <Grid data-cy="indicator-verification" item xs={12} lg={6}>
        <OutcomeCard {...ProjectOutcomeCardMock[1]} />
      </Grid>
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* reports */}
    <Grid data-cy="report-table" item xs={12} lg={12}>
      <TableModule {...props.reportTable} />
    </Grid>
  </React.Fragment>
);
