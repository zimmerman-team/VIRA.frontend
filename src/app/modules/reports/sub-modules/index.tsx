import 'styled-components/macro';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { StatItemDivider } from 'app/modules/landing/common/StatItemDivider';
import { StatItem } from 'app/modules/common/components/StatItem';
import { TitleFragment } from 'app/modules/common/components/TitleParams';
import { OutcomeCard } from 'app/modules/common/components/OutcomeCard';
import { Description } from 'app/modules/common/components/DescriptionParams';
import { ReportTitleMock } from 'app/modules/reports/sub-modules/mock';
import { ReportStatMock } from 'app/modules/reports/sub-modules/mock';
import { DescriptionMock } from 'app/modules/reports/sub-modules/mock';
import { ReportOutcomeCardMock } from 'app/modules/reports/sub-modules/mock';

export const ReportDetailLayout = () => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* breadcrumbs */}
    <Grid item lg={6}>
      breadcrumbs
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* button: generate report */}
    <Grid item lg={6} container justify="flex-end">
      <ContainedButton text="Generate Report" />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* title fragment */}
    <Grid item container lg={6} direction="column">
      <TitleFragment {...ReportTitleMock} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* stat fragment */}
    <Grid item container lg={6} alignItems="center" wrap="nowrap">
      <StatItem {...ReportStatMock[0]} />
      <StatItemDivider />
      <StatItem {...ReportStatMock[1]} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* project description */}
    <Grid item xs={12} lg={12}>
      <Description {...DescriptionMock} />
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
    <Grid item container xs={12} lg={6} spacing={4}>
      <OutcomeCard {...ReportOutcomeCardMock[0]} />
      <OutcomeCard {...ReportOutcomeCardMock[1]} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* reports list */}
    <Grid item lg={12} />
  </React.Fragment>
);
