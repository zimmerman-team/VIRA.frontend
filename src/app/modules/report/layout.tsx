//globalWithNamed:
import { Grid, Typography } from '@material-ui/core';
import React from 'react';

//absoluteWithNamed:
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import { NavItemParams } from 'app/modules/common/consts';
import { GranteeBreadCrumbsMock } from 'app/modules/detail-modules/grantee-detail/mock';
import { TabNavigator } from 'app/modules/list-module/common/TabNavigator';
import { BottomNav } from 'app/modules/report/common/bottom-nav';
import { ReportModuleRoutes } from 'app/modules/report/routes';

//globalDirect:
import 'styled-components/macro';

type CreateReportLayoutModel = {
  tabs: NavItemParams[];
  changeRoute: Function;
  initialTabIndex: number;
  onNextBtnClick: Function;
  onBackBtnClick: Function;
  breadcrumbs: BreadcrumbModel;
};

export const CreateReportLayout = (props: CreateReportLayoutModel) => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* breadcrumbs */}
    <Grid item lg={12}>
      <BreadCrumbs {...GranteeBreadCrumbsMock} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* title fragment */}
    <Grid item container lg={12} direction="column">
      <Typography
        css={`
          color: rgba(0, 0, 0, 0.85);
          font-size: 20px;
          font-weight: 500;
          line-height: 28px;
        `}
      >
        Report
      </Typography>
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* title fragment */}
    <Grid item xs={12} lg={12}>
      <TabNavigator
        items={props.tabs}
        onTabChange={props.changeRoute}
        initialTabIndex={props.initialTabIndex}
      />
    </Grid>
    <Grid item xs={12} lg={12}>
      <ReportModuleRoutes />
    </Grid>

    {/* <AddMediaLayout /> */}

    <Grid item xs={12} lg={12}>
      <BottomNav next={props.onNextBtnClick} back={props.onBackBtnClick} />
    </Grid>
  </React.Fragment>
);
