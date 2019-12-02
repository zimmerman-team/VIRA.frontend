import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Page from 'app/modules/common/Page/index';
import { Grid, Typography, Box } from '@material-ui/core';
import { NavItemParams } from 'app/modules/common/consts';
import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import { TabNavigator } from 'app/modules/list-module/common/TabNavigator';
import {
  BottomNav,
  Outcomes,
} from 'app/modules/detail-modules/create-report/sub-modules';

type CreateReportLayoutModel = {
  tabs: NavItemParams[];
  changeRoute: Function;
  initialTabIndex: number;
  onNextBtnClick: Function;
  onBackBtnClick: Function;
  breadcrumbs: BreadcrumbModel;
};

export const CreateReportLayout = (props: CreateReportLayoutModel) => {
  return (
    <>
      <Page maxWidth={false} breadcrumbs={props.breadcrumbs}>
        <Typography>
          <Box mt={2} mb={2} fontWeight={500} fontSize={20} lineHeight={1.4}>
            Report
          </Box>
        </Typography>
        <Grid container>
          <Grid item sm={12}>
            <TabNavigator
              items={props.tabs}
              onTabChange={props.changeRoute}
              initialTabIndex={props.initialTabIndex}
            />
            <Switch>
              <Route
                exact
                path="/reports/create/outcomes"
                render={() => <Outcomes />}
              />
              <Route
                exact
                path="/reports/create/indicator-verification"
                render={() => <div></div>}
              />
              <Route
                exact
                path="/reports/create/challenges-plans"
                render={() => <div></div>}
              />
              <Route
                exact
                path="/reports/create/preview"
                render={() => <div></div>}
              />
            </Switch>
          </Grid>
        </Grid>
      </Page>
      <BottomNav next={props.onNextBtnClick} back={props.onBackBtnClick} />
    </>
  );
};
