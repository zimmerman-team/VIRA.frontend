import React from 'react';
import Grid from '@material-ui/core/Grid';
import TableModule from 'app/components/datadisplay/Table';
import { ContactsCard } from 'app/components/surfaces/Cards/ContactsCard';
import { TitleFragment } from 'app/modules/common/components/TitleParams';
import { Description } from 'app/modules/common/components/DescriptionParams';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { PageLoader } from 'app/modules/common/page-loader';
import { HorizontalBarChart } from 'app/components/charts/BarCharts/HorizontalBarChart';
import { ProjectPalette } from 'app/theme';
import get from 'lodash/get';
import { mockData } from 'app/components/charts/BarCharts/HorizontalBarChart/mock';
import { TabNavigator } from 'app/modules/list-module/common/TabNavigator';
import { getNavTabItems } from 'app/modules/landing/utils/getNavTabItems';
import {
  TabNavMockViz,
  GranteeParams,
} from 'app/modules/detail-modules/grantee-detail/mock';
import { Typography } from '@material-ui/core';

export const GranteeDetailLayout = (props: GranteeParams) => (
  <React.Fragment>
    {/* {props.loading && <PageLoader />} */}
    {/* ---------------------------------------------------------------------*/}
    {/* breadcrumbs */}
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <BreadCrumbs {...props.breadcrumbs} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* title fragment */}
    <Grid
      item
      container
      xs={12}
      sm={12}
      md={12}
      lg={12}
      xl={12}
      direction="column"
    >
      <TitleFragment {...props.title} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* project description */}
    <Grid item xs={12} lg={6}>
      <Description {...props.description} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* contact card */}
    <Grid item xs={12} md={6} lg={6}>
      <ContactsCard {...props.contact} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* priority area */}
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <Typography>Priority Area</Typography>
    </Grid>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <HorizontalBarChart
        {...mockData}
        chartLegends={props.barChartLegends}
        onChartLegendClick={props.onBarChartLegendClick}
      />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* projects */}
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <TableModule {...props.projectTable} />
    </Grid>
  </React.Fragment>
);
