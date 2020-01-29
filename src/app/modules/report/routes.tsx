import React from 'react';
import get from 'lodash/get';
import { PreviewLayout } from 'app/modules/report/sub-modules/preview';
import { OutcomesLayout } from 'app/modules/report/sub-modules/outcomes';
import {
  OutcomesPropsModel,
  IndicatorVerificationPropsModel,
  ChallengesPlansPropsModel,
} from 'app/modules/report/model';
import {
  Route,
  Redirect,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import { ChallengesPlansLayout } from 'app/modules/report/sub-modules/challenges-plans';
import { IndicatorVerificationLayout } from 'app/modules/report/sub-modules/indicator-verification';

interface Props extends RouteComponentProps {
  step2Enabled: boolean;
  step3Enabled: boolean;
  step4Enabled: boolean;
  outcomesProps: OutcomesPropsModel;
  indicatorVerificationProps: IndicatorVerificationPropsModel;
  challengesPlansProps: ChallengesPlansPropsModel;
}

const ReportModuleRoutesF = (props: Props) => {
  return (
    <React.Fragment>
      <Route exact path="/report/:projectID/outcomes">
        <OutcomesLayout {...props.outcomesProps} />
      </Route>
      <Route exact path="/report/:projectID/indicator-verification">
        {props.step2Enabled ? (
          <IndicatorVerificationLayout {...props.indicatorVerificationProps} />
        ) : (
          <Redirect
            to={`/report/${get(props.match.params, 'projectID', '')}/outcomes`}
          />
        )}
      </Route>
      <Route exact path="/report/:projectID/challenges-plans">
        {props.step3Enabled ? (
          <ChallengesPlansLayout {...props.challengesPlansProps} />
        ) : (
          <Redirect
            to={`/report/${get(props.match.params, 'projectID', '')}/outcomes`}
          />
        )}
      </Route>
      <Route exact path="/report/:projectID/preview">
        {props.step4Enabled ? (
          <PreviewLayout {...props} />
        ) : (
          <Redirect
            to={`/report/${get(props.match.params, 'projectID', '')}/outcomes`}
          />
        )}
      </Route>
    </React.Fragment>
  );
};

export const ReportModuleRoutes = withRouter(ReportModuleRoutesF);
