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
import { CreateReport } from 'app/modules/report';
import { ProjectDetailModule } from 'app/modules/detail-modules/project-detail';
import { GranteeDetailModule } from 'app/modules/detail-modules/grantee-detail';
import { ReportDetailLayout } from 'app/modules/detail-modules/report-detail';
import { GranteeDetailLayout } from 'app/modules/detail-modules/grantee-detail/layout';
import { Faqs } from 'app/modules/faqs';
import { ListModule } from 'app/modules/list-module';
import { PriorityAreaModule } from 'app/modules/priority-area';
import { SdgModule } from 'app/modules/sdg';
import { PrivacyModule } from 'app/modules/privacy';
import { SubmittedLayout } from 'app/modules/report/sub-modules/submitted';
import { ManageUsersTeamsLayout } from 'app/modules/super-admin/sub-modules/manage-users-teams/layout';
import { PasswordRecovery } from 'app/modules/sign-in/sub-modules/password-recovery';
import ManageTeamEdit from 'app/modules/super-admin/sub-modules/manage-team-edit';
import { ManageAccount } from 'app/modules/super-admin/sub-modules/manage-account';
import { manageAccountMock } from 'app/modules/super-admin/sub-modules/manage-account/mock';
import { ManageUserEdit } from 'app/modules/super-admin/sub-modules/manage-user-edit';
import { manageUserEditMock } from 'app/modules/super-admin/sub-modules/manage-user-edit/mock';
import { manageUsersTeamsLayoutMock } from 'app/modules/super-admin/sub-modules/manage-users-teams/mock';
import ManageUser from 'app/modules/super-admin/sub-modules/manage-user';

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
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route exact path="/login">
          {redirectAuth(storeUser)}
        </Route>

        <Route exact path="/recover-password">
          <PasswordRecovery />
        </Route>

        <Route exact path="/">
          {redirectUnAuth(LandingLayout, storeUser)}
        </Route>

        <Route exact path="/list/:id">
          {redirectUnAuth(ListModule, storeUser)}
        </Route>

        <Route exact path="/projects/detail">
          {redirectUnAuth(ProjectDetailModule, storeUser)}
        </Route>
        <Route exact path="/projects/:code/detail">
          render = {redirectUnAuth(ProjectDetailModule, storeUser)}
        </Route>

        <Route exact path="/reports/detail">
          {redirectUnAuth(ReportDetailLayout, storeUser)}
        </Route>

        <Route path="/report">{redirectUnAuth(CreateReport, storeUser)}</Route>

        <Route exact path="/grantees/detail">
          render = {redirectUnAuth(GranteeDetailModule, storeUser)}
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
          {redirectUnAuth(SubmittedLayout, storeUser)}
        </Route>

        <Route path="/super-admin/manage-teams/edit">
          {redirectUnAuth(ManageTeamEdit, storeUser)}
        </Route>

        <Route exact path="/super-admin/:id">
          {redirectUnAuth(
            ManageUsersTeamsLayout,
            storeUser,
            manageUsersTeamsLayoutMock
          )}
        </Route>

        <Route path="/super-admin/manage-user">
          {redirectUnAuth(ManageUser, storeUser)}
        </Route>

        <Route path="/super-admin/manage-account">
          {redirectUnAuth(ManageAccount, storeUser, manageAccountMock)}
        </Route>

        <Route path="/super-admin/manage-users/edit">
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
      </Switch>
    </Suspense>
  );
}
