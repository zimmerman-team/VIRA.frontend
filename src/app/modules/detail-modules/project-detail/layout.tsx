import 'styled-components/macro';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { StatItemDivider } from 'app/modules/landing/common/stats/StatItemDivider';
import { StatItem } from 'app/modules/common/components/StatItem';
import { TitleFragment } from 'app/modules/common/components/TitleParams';
import { OutcomeCard } from 'app/modules/common/components/OutcomeCard';
import { Description } from 'app/modules/common/components/DescriptionParams';
import { ProjectOutcomeCardMock } from 'app/modules/detail-modules/project-detail/mock';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { GranteeBreadCrumbsMock } from 'app/modules/detail-modules/grantee-detail/mock';
import TableModule from 'app/components/datadisplay/Table';
import graph1 from 'app/assets/images/dummy_graph1.png';
import { Hidden } from '@material-ui/core';

export const ProjectDetailLayout = (props: any) => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* breadcrumbs */}
    <Grid item xs={12} lg={12}>
      <BreadCrumbs
        {...GranteeBreadCrumbsMock}
        previousLocations={[{ label: 'Projects', url: '/' }]}
        currentLocation={props.projectDetail.project}
      />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* helper grid */}
    <Hidden smDown>
      <Grid item lg={6} />
    </Hidden>

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
    <Grid item xs={12} lg={6}>
      <TitleFragment
        title={props.projectDetail.project}
        id={`project id: ${props.projectDetail.project_id}`}
        date="*earliest and latest activity start dates"
        url_note={props.projectDetail.organisation}
        url={props.projectDetail.website}
      />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* mobile button: generate report */}
    <Hidden smUp>
      <Grid item xs={12}>
        <ContainedButton
          text="Generate Report"
          onClick={props.projectDetail.generateReport}
        />
      </Grid>
    </Hidden>

    {/* ---------------------------------------------------------------------*/}
    {/* stat fragment */}
    <Grid item container xs={12} lg={6} alignItems="center" wrap="nowrap">
      <StatItem
        label="Total project amount"
        value={`€${props.projectDetail.total_amount}`}
      />
      <StatItemDivider />
      {/* <StatItem {...ProjectStatMock[1]} /> */}
      <StatItem
        label="Project duration"
        value={`${props.projectDetail.start_date.replace(
          /-/g,
          '.'
        )} - ${props.projectDetail.end_date.replace(/-/g, '.')}`}
      />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* project description */}
    <Grid item xs={12} lg={12}>
      <Description {...props} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* outcome charts */}
    <Grid item xs={12} md={6} lg={6}>
      <Card
        css={`
          height: 315px;
        `}
      >
        <CardHeader title="Key outcomes" />
        <CardContent
          css={`
            height: calc(100% - 34px);

            img {
              width: 100%;
              height: auto;
            }
          `}
        >
          <img src={graph1} alt="graph" />
        </CardContent>
      </Card>
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* outcome cards */}
    <Grid item container xs={12} md={6} lg={6}>
      <OutcomeCard {...ProjectOutcomeCardMock[0]} />
      <OutcomeCard {...ProjectOutcomeCardMock[1]} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* reports */}
    <Grid item xs={12} lg={12}>
      <TableModule {...props.reportTable} />
    </Grid>
  </React.Fragment>
);
