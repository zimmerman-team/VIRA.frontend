import 'styled-components/macro';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { TitleFragment } from 'app/modules/common/components/TitleParams';
import { OutcomeCard } from 'app/modules/common/components/OutcomeCard';
import { ReportTitleMock } from 'app/modules/detail-modules/report-detail/mock';
import { ReportOutcomeCardMock } from 'app/modules/detail-modules/report-detail/mock';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { GranteeBreadCrumbsMock } from 'app/modules/detail-modules/grantee-detail/mock';
import { ProjectPalette } from 'app/theme';
import Box from '@material-ui/core/Box';

export const ReportDetailLayout = () => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* breadcrumbs */}
    <Grid item lg={12}>
      <BreadCrumbs {...GranteeBreadCrumbsMock} />
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
      <TitleFragment {...ReportTitleMock} />
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
        <Typography>Total number: 889.080</Typography>
        <Typography>Typography</Typography>
      </Grid>
      <Box height="24px" width="100%" />
      <Grid item lg={12}>
        <Card>
          <CardHeader title="Key outcomes" />
          <CardContent>
            <div
              css={`
                background-color: ${ProjectPalette.grey.A200};
                height: 200px;
                width: 100%;
              `}
            />
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
      <OutcomeCard {...ReportOutcomeCardMock[2]} />
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
