import 'styled-components/macro';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { TitleFragment } from 'app/modules/common/components/TitleParams';
import { OutcomeCard } from 'app/modules/common/components/OutcomeCard';
import { ReportTitleMock } from 'app/modules/reports/sub-modules/report-detail/mock';
import { ReportOutcomeCardMock } from 'app/modules/reports/sub-modules/report-detail/mock';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { GranteeBreadCrumbsMock } from 'app/modules/grantees/sub-modules/grantee-detail/mock';

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
    <Grid item xs={12} lg={6}>
      <Card>
        <CardHeader title="Key outcomes" />
        <CardContent>charts</CardContent>
      </Card>
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* outcome cards */}
    <Grid item container xs={12} lg={6}>
      <OutcomeCard {...ReportOutcomeCardMock[0]} />
      <OutcomeCard {...ReportOutcomeCardMock[1]} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* reports list */}
    <Grid item lg={12} />
  </React.Fragment>
);
