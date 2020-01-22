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
import { ProjectOutcomeCardMock } from 'app/modules/detail-modules/project-detail/mock';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { GranteeBreadCrumbsMock } from 'app/modules/detail-modules/grantee-detail/mock';
import TableModule from 'app/components/datadisplay/Table';
import { ProjectReportsMock } from 'app/modules/detail-modules/project-detail/mock';
import { ProjectModel } from 'app/modules/detail-modules/project-detail/model';
import graph1 from 'app/assets/images/dummy_graph1.png';

export const ProjectDetailLayout = (props: ProjectModel) => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* breadcrumbs */}
    <Grid item lg={12}>
      <BreadCrumbs
        {...GranteeBreadCrumbsMock}
        previousLocations={[{ label: 'Projects', url: '/' }]}
        currentLocation={props.project}
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
    <Grid item container lg={6} direction="column">
      <TitleFragment
        title={props.project}
        id={'project id: ' + props.project_id}
        date={'*earliest and latest activity start dates'}
        url_note={'Grantee Title and Link to it'}
        url={props.website}
      />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* stat fragment */}
    <Grid item container lg={6} alignItems="center" wrap="nowrap">
      <StatItem label="Total project amount" value={'€' + props.total_amount} />
      <StatItemDivider />
      {/*<StatItem {...ProjectStatMock[1]} />*/}
      <StatItem
        label="Project duration"
        value={
          props.start_date.replace(/-/g, '.') +
          ' - ' +
          props.end_date.replace(/-/g, '.')
        }
      />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* project description */}
    <Grid item xs={12} lg={12}>
      <Description {...props} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* outcome charts */}
    <Grid item xs={12} lg={6}>
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

      {/*<DummyKeyOutcomes
        css={`
          transform: scale(0.8);
        `}
      />*/}
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* outcome cards */}
    <Grid item container xs={12} lg={6}>
      <OutcomeCard {...ProjectOutcomeCardMock[0]} />
      <OutcomeCard {...ProjectOutcomeCardMock[1]} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* reports */}
    <Grid item xs={12} lg={12}>
      <TableModule {...ProjectReportsMock} />
    </Grid>
  </React.Fragment>
);
