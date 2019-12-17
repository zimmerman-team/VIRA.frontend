// cc:application base#;application index

import React from 'react';
import { MainRoutes } from 'app/Routes';
import { useStyles } from 'app/modules/common/useStyles';
import { useTheme } from '@material-ui/core';
import PrimarySearchAppBar from 'app/modules/common/components/AppBar';
import { AppSideBar } from 'app/modules/common/components/AppSideBar';
import { NavItems } from 'app/modules/common/consts';
import { PageWrapper } from 'app/modules/common/components/PageWrapper';
import { PositionedSnackbar } from 'app/components/datadisplay/snackbar';
import { PasswordRecovery } from 'app/modules/sign-in/sub-modules/password-recovery';
import { UserModel } from 'app/state/api/interfaces';
import SignInModule from 'app/modules/sign-in';
import auth from 'app/auth';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useStoreState } from 'app/state/store/hooks';

export function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const storeUser = useStoreState(state => state.syncVariables.user);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  /* todo: let's move this logic somewhere else */
  function redirectAuth(user: UserModel | null) {
    if (user) {
      return <Redirect to="/" />;
    }
    return <SignInModule auth={auth} />;
  }

  return (
    <div className={classes.root}>
      {console.log(window.location.pathname)}
      {window.location.pathname === '/login' && (
        <Route exact path="/login">
          {redirectAuth(storeUser)}
        </Route>
      )}

      <PrimarySearchAppBar
        classes={classes}
        open={open}
        theme={theme}
        handleDrawerClose={handleDrawerClose}
      />

      <AppSideBar
        classes={classes}
        open={open}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
        theme={theme}
        navItems={NavItems}
      />

      <PageWrapper>
        <MainRoutes />
      </PageWrapper>

      {/*<Route exact path="/recover-password">*/}
      {/*  <PasswordRecovery />*/}
      {/*</Route>*/}
      <PositionedSnackbar />
    </div>
  );
}
