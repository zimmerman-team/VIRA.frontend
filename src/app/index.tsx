// @ts-nocheck
// cc:application base#;application index

import React from 'react';
import { MainRoutes } from 'app/Routes';
import { useStyles } from 'app/modules/common/useStyles';
import { Container, useTheme } from '@material-ui/core';
import PrimarySearchAppBar from 'app/modules/common/components/AppBar';
import { AppSideBar } from 'app/modules/common/components/AppSideBar';
import { NavItems } from 'app/modules/common/consts';
import { PageWrapper } from 'app/modules/common/components/PageWrapper';
import { PositionedSnackbar } from 'app/components/datadisplay/snackbar';
import { InitialLoad } from 'app/utils/initialLoad';
import { useStoreState } from 'app/state/store/hooks';
import 'styled-components/macro';

import { useTranslation } from 'react-i18next';

export function App() {
  const { i18n } = useTranslation();

  const reduxLng = useStoreState(state => state.syncVariables.lng);

  React.useEffect(() => {
    if (i18n.language !== reduxLng && reduxLng) {
      i18n.changeLanguage(reduxLng);
    }
  }, []);

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  InitialLoad();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const isLoggedIn = Boolean(useStoreState(state => state.syncVariables.user));

  return (
    <div className={classes.root}>
      {isLoggedIn ? (
        <>
          <PrimarySearchAppBar
            classes={classes}
            open={open}
            theme={theme}
            handleDrawerClose={handleDrawerClose}
            handleDrawerOpen={handleDrawerOpen}
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
        </>
      ) : (
        <Container maxWidth="lg">
          <MainRoutes />
        </Container>
      )}
      <PositionedSnackbar />
    </div>
  );
}
