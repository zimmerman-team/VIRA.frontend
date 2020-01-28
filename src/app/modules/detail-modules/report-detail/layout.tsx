// global
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';

// absolute
import graph1 from 'app/assets/images/dummy_graph1.png';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { OutcomeCard } from 'app/modules/common/components/OutcomeCard';
import { TitleFragment } from 'app/modules/common/components/TitleParams';
import { GranteeBreadCrumbsMock } from 'app/modules/detail-modules/grantee-detail/mock';
import {
  ReportOutcomeCardMock,
  ReportTitleMock,
} from 'app/modules/detail-modules/report-detail/mock';

// direct
import 'styled-components/macro';

export const ReportDetailLayout = (props: any) => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* breadcrumbs */}
    <Grid item lg={12}>
      <BreadCrumbs
        {...GranteeBreadCrumbsMock}
        previousLocations={[{ label: 'Projects', url: '/' }]}
      />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* helper grid */}
    <Grid item lg={6} />

    {/* ---------------------------------------------------------------------*/}
    {/* button: generate report */}
    <Grid item xs={12} lg={6} container justify="flex-end">
      <ContainedButton text="Generate Report" />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* title fragment */}
    <Grid item container lg={12} direction="column">
      <TitleFragment
        title={props.report ? props.report.title : null}
        id={props.report ? props.report.id : null}
      />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* outcome charts */}
    <Grid
      item
      container
      xs={12}
      lg={6}
      alignItems="flex-start"
      justify="flex-start"
      alignContent="flex-start"
    >
      <Grid item lg={12}>
        <Typography>Target beneficiaries</Typography>
        <Typography>
          Total number:
          {props.report ? props.report.total_target_beneficiaries : ''}
        </Typography>
        <Typography>Typography</Typography>
      </Grid>
      <Box height="24px" width="100%" />
      <Grid item lg={12}>
        <Card>
          {/*<CardHeader title="Key outcomes" />*/}
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
      <Box height="24px" width="100%" />
      <Grid item lg={12}>
        <Typography>
          Finally, please select which ones of these Insinger Foundation policy
          priorities the project aims to support.
        </Typography>
      </Grid>
      <Box height="24px" width="100%" />
      <Grid item lg={12}>
        <Typography>Prisoner rehabilitation / reintegration</Typography>
      </Grid>
      <Box height="24px" width="100%" />
      <OutcomeCard
        title="Contacts"
        description={
          props.grantee
            ? `${props.grantee.place}, ${props.grantee.postcode}, ${props.grantee.country}`
            : ''
        }
      />
      <OutcomeCard {...ReportOutcomeCardMock[3]} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* outcome cards */}
    <Grid item container xs={12} lg={6}>
      {ReportOutcomeCardMock.map(card => (
        <OutcomeCard {...card} />
      ))}
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* reports list */}
    <Grid item lg={12} />
  </React.Fragment>
);
