// @ts-nocheck
import React from 'react';
import { Route } from 'react-router-dom';
import { OutcomesLayout } from 'app/modules/report/sub-modules/outcomes';
import { IndicatorVerificationLayout } from 'app/modules/report/sub-modules/indicator-verification';
import { ChallengesPlansLayout } from 'app/modules/report/sub-modules/challenges-plans';
import { PreviewLayout } from 'app/modules/report/sub-modules/preview';

// import { RouteItemParams } from 'app/modules/report/config';

export const ReportModuleRoutes = () => (
  <React.Fragment>
    <Route exact path="/report/outcomes">
      <OutcomesLayout />
    </Route>
    <Route exact path="/report/indicator-verification">
      <IndicatorVerificationLayout />
    </Route>
    <Route exact path="/report/challenges-plans">
      <ChallengesPlansLayout />
    </Route>
    <Route exact path="/report/preview">
      <PreviewLayout />
    </Route>
  </React.Fragment>
);
