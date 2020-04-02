/* eslint-disable @typescript-eslint/no-explicit-any */
// cc:application base#;application routes

import auth from 'app/auth';
import { useTitle } from 'react-use';
import { NoMatchPage } from 'app/modules/common/no-match-page';
import { GranteeDetailModule } from 'app/modules/detail-modules/grantee-detail';
import { ProjectDetailModule } from 'app/modules/detail-modules/project-detail';
import { ReportDetailModule } from 'app/modules/detail-modules/report-detail';
import { Faqs } from 'app/modules/faq-module';
import LandingLayout from 'app/modules/landing';
import { ListModule } from 'app/modules/list-module';
import { PriorityAreaModule } from 'app/modules/priority-area';
import { PrivacyModule } from 'app/modules/privacy';
import { CreateReport } from 'app/modules/report';
import { SubmittedLayout } from 'app/modules/report/sub-modules/submitted';
import { SdgModule } from 'app/modules/sdg';
import SignInModule from 'app/modules/sign-in';
import { PasswordRecovery } from 'app/modules/sign-in/sub-modules/password-recovery';
import LoginCallbackModule from 'app/modules/sign-in/sub-modules/sign-in-callback';
import { ManageTeamEditAdd } from 'app/modules/super-admin/sub-modules/manage-team-edit';
import { ManageUserEdit } from 'app/modules/super-admin/sub-modules/manage-user-edit';
import { manageUserEditMock } from 'app/modules/super-admin/sub-modules/manage-user-edit/mock';
import { ManageUsers } from 'app/modules/super-admin/sub-modules/manage-users-teams';
import { manageUsersTeamsLayoutMock } from 'app/modules/super-admin/sub-modules/manage-users-teams/mock';
import { UserModel } from 'app/state/api/interfaces';
import { useStoreState } from 'app/state/store/hooks';
import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { TabNavMock } from 'app/modules/list-module/mock';
import { manageTeamEditAddMock } from 'app//modules/super-admin/sub-modules/manage-team-edit/mock';
import { AppConfig } from 'app/data';

/* todo: let's move this logic somewhere else */
function redirectUnAuth<ReactModule>(
  Component: any,
  user: UserModel | null,
  componentProps?: any,
  role?: string
) {
  if (!user) {
    return <Redirect to="/login" />;
  }

  return <Component {...componentProps} />;
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
  const userRoles = useStoreState(state => state.getUserRoles.data);
  const userGroups = useStoreState(state => state.getUserGroups.data);
  return (
    // <Suspense fallback={<PageLoader />}>
    <Switch>
      <Route exact path="/login">
        {redirectAuth(storeUser)}
      </Route>

      <Route exact path="/recover-password">
        <PasswordRecovery />
      </Route>

      <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route>

      <Route exact path="/dashboard">
        {redirectUnAuth(LandingLayout, storeUser)}
      </Route>

      <Route exact path="/list/:id?">
        {useTitle(`${AppConfig.appTitleLong} List`)}
        {redirectUnAuth(ListModule, storeUser, {
          tabNav: TabNavMock,
          loadData: true,
        })}
      </Route>

      <Route exact path="/projects/:code">
        {redirectUnAuth(ProjectDetailModule, storeUser)}
      </Route>

      <Route exact path="/reports/:code">
        {redirectUnAuth(ReportDetailModule, storeUser)}
      </Route>

      <Route path="/report/:projectID">
        {redirectUnAuth(CreateReport, storeUser)}
      </Route>

      <Route exact path="/grantees/detail">
        {redirectUnAuth(GranteeDetailModule, storeUser)}
      </Route>
      <Route exact path="/grantee/:code/detail">
        {redirectUnAuth(GranteeDetailModule, storeUser)}
      </Route>

      <Route exact path="/if-priority-area">
        {redirectUnAuth(PriorityAreaModule, storeUser)}
      </Route>

      <Route exact path="/sdg">
        {redirectUnAuth(SdgModule, storeUser)}
      </Route>

      <Route exact path="/faq">
        {redirectUnAuth(Faqs, storeUser)}
      </Route>

      <Route exact path="/privacy">
        {redirectUnAuth(PrivacyModule, storeUser)}
      </Route>

      <Route exact path="/notFound">
        <NoMatchPage />
      </Route>

      <Route exact path="/callback">
        <LoginCallbackModule auth={auth} />
      </Route>

      <Route exact path="/submitted">
        {redirectUnAuth(SubmittedLayout, storeUser, {
          message: 'Your report has been sent',
          showGoToBtn: true,
        })}
      </Route>

      <Route exact path="/draft-submitted">
        {redirectUnAuth(SubmittedLayout, storeUser, {
          message: 'Your report has been saved as a draft ',
          showGoToBtn: false,
        })}
      </Route>

      <Route path="/super-admin/manage-teams/edit/:id">
        {redirectUnAuth(ManageTeamEditAdd, storeUser, {
          ...manageTeamEditAddMock,
          mode: 'edit',
          breadcrumbs: {
            ...manageTeamEditAddMock.breadcrumbs,
            currentLocation: 'Edit',
          },
        })}
      </Route>

      <Route path="/super-admin/manage-teams/add">
        {redirectUnAuth(ManageTeamEditAdd, storeUser, manageTeamEditAddMock)}
      </Route>

      <Route exact path="/super-admin/:id">
        {redirectUnAuth(ManageUsers, storeUser, manageUsersTeamsLayoutMock)}
      </Route>

      <Route path="/super-admin/manage-users/edit/:id">
        {redirectUnAuth(ManageUserEdit, storeUser, manageUserEditMock)}
      </Route>

      <Route path="/super-admin/manage-users/add">
        {redirectUnAuth(ManageUserEdit, storeUser, {
          ...manageUserEditMock,
          breadcrumbs: {
            ...manageUserEditMock.breadcrumbs,
            currentLocation: 'Add',
          },
          mode: 'add',
          form: {
            ...manageUserEditMock.form,
            radioButtonGroup: {
              title: 'User Role',
              items:
                userRoles || manageUserEditMock.form.radioButtonGroup.items,
            },
            selectOptions: userGroups,
          },
        })}
      </Route>

      <Route path="/manage-account/:id">
        {redirectUnAuth(ManageUserEdit, storeUser, {
          title: 'Manage Your Account',
          ...manageUserEditMock,
          breadcrumbs: null,
          editSelf: true,
        })}
      </Route>
    </Switch>
    // </Suspense>
  );
}
