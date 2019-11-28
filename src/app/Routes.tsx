//cc:application base#;application routes

import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { PageLoader } from 'app/modules/common/page-loader';
import { NoMatchPage } from 'app/modules/common/no-match-page';
import auth from 'app/auth';
import { UserModel } from 'app/state/api/interfaces';
import { useStoreState } from 'app/state/store/hooks';
import LandingLayout from 'app/modules/landing';
import SignInModule from 'app/modules/sign-in';
import LoginCallbackModule from 'app/modules/sign-in/sub-modules/sign-in-callback';
import { ProjectDetailLayout } from 'app/modules/detail-modules/project-detail';
import { ReportDetailLayout } from 'app/modules/detail-modules/report-detail';
import { GranteeDetailLayout } from 'app/modules/detail-modules/grantee-detail';
import { Faqs } from 'app/modules/faqs';
import { ListModule } from 'app/modules/list-module';
import { PriorityAreaModule } from 'app/modules/priority-area';
import { SdgModule } from 'app/modules/sdg';
import { PrivacyModule } from 'app/modules/privacy';

/* todo: let's move this logic somewhere else */
function redirectUnAuth<ReactModule>(
  component: ReactModule,
  user: UserModel | null,
  role?: string
) {
  if (!user) {
    return <Redirect to="/login" />;
  }

  return component;
}

/* todo: let's move this logic somewhere else */
function redirectAuth(user: UserModel | null) {
  if (user) {
    return <Redirect to="/" />;
  }
  return <SignInModule auth={auth} />;
}

export function MainRoutes() {
  const storeUser = useStoreState(state => state.syncVariables.user);
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route exact path="/login">
          {redirectAuth(storeUser)}
        </Route>

        <Route exact path="/">
          {/*{redirectUnAuth(<LandingLayout />, storeUser)}*/}
          {/*{redirectUnAuth(<LandingLayout />, storeUser)}*/}
          <LandingLayout />
        </Route>

        <Route exact path="/list/:id">
          {/*{redirectUnAuth(<ProjectsModule />, storeUser)}*/}
          <ListModule />
        </Route>

        <Route exact path="/projects/detail">
          {/*{redirectUnAuth(<ProjectsModule />, storeUser)}*/}
          <ProjectDetailLayout />
        </Route>

        <Route exact path="/reports/detail">
          {/*{redirectUnAuth(<ProjectsModule />, storeUser)}*/}
          <ReportDetailLayout />
        </Route>

        <Route exact path="/reports/detail">
          {/*{redirectUnAuth(<ProjectsModule />, storeUser)}*/}
          <ReportDetailLayout />
        </Route>

        <Route exact path="/grantees/detail">
          {/*{redirectUnAuth(<ProjectsModule />, storeUser)}*/}
          <GranteeDetailLayout />
        </Route>

        <Route exact path="/if-priority-area">
          <PriorityAreaModule />
        </Route>

        <Route exact path="/sdg">
          <SdgModule />
        </Route>

        <Route exact path="/faq">
          <Faqs />
        </Route>

        <Route exact path="/privacy">
          <PrivacyModule />
        </Route>

        <Route exact path="/notFound">
          <NoMatchPage />
        </Route>

        <Route exact path="/callback">
          <LoginCallbackModule auth={auth} />
        </Route>
      </Switch>
    </Suspense>
  );
}
