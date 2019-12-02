import 'styled-components/macro';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Page from 'app/modules/common/Page';
import { Grid, Typography, Box } from '@material-ui/core';
import { NavItemParams } from 'app/modules/common/consts';
import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import { TabNavigator } from 'app/modules/list-module/common/TabNavigator';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { GranteeBreadCrumbsMock } from 'app/modules/detail-modules/grantee-detail/mock';
import { TitleFragment } from 'app/modules/common/components/TitleParams';
import { ReportTitleMock } from 'app/modules/detail-modules/report-detail/mock';
import { OutcomesLayout } from 'app/modules/report/sub-modules/outcomes';
import { ChallengesPlansLayout } from 'app/modules/report/sub-modules/challenges-plans';
import { PreviewLayout } from 'app/modules/report/sub-modules/preview';
import { IndicatorVerificationLayout } from 'app/modules/report/sub-modules/indicator-verification';
import { ReportModuleRoutes } from 'app/modules/report/routes';
import { BottomNav } from 'app/modules/report/common/bottom-nav';

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

    <Grid xs={12} lg={12}>
      <BottomNav next={props.onNextBtnClick} back={props.onBackBtnClick} />
    </Grid>
  </React.Fragment>
);
