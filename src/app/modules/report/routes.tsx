// @ts-nocheck
import React, { ReactChild } from 'react';
import { Route, Switch } from 'react-router-dom';
import { OutcomesLayout } from 'app/modules/report/sub-modules/outcomes';
import { IndicatorVerificationLayout } from 'app/modules/report/sub-modules/indicator-verification';
import { ChallengesPlansLayout } from 'app/modules/report/sub-modules/challenges-plans';
import { PreviewLayout } from 'app/modules/report/sub-modules/preview';

// import { RouteItemParams } from 'app/modules/report/config';

export const ReportModuleRoutes = () => (
  <React.Fragment>
    <Route exact path="/report/create/outcomes">
      <OutcomesLayout />
    </Route>
    <Route exact path="/report/create/indicator-verification">
      <IndicatorVerificationLayout />
    </Route>
    <Route exact path="/report/create/challenges-plans">
      <ChallengesPlansLayout />
    </Route>
    <Route exact path="/report/create/preview">
      <PreviewLayout />
    </Route>
  </React.Fragment>
);
