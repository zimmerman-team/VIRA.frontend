// @ts-nocheck

import React, { ReactChild } from 'react';
import Providers from 'app/Providers';
import { PageWrapper } from 'app/modules/common/components/PageWrapper';

import { MainRoutes } from 'app/Routes';
import { useStyles } from 'app/modules/common/useStyles';
import { useTheme } from '@material-ui/core';
import PrimarySearchAppBar from 'app/modules/common/components/AppBar';
import { AppSideBar } from 'app/modules/common/components/AppSideBar';
import { NavItems } from 'app/modules/common/consts';

import { PositionedSnackbar } from 'app/components/datadisplay/snackbar';
import { InitialLoad } from 'app/utils/initialLoad';
import { useStoreState } from 'app/state/store/hooks';

interface StoryWrapperParams {
  // component: JSX.Element;
  children: ReactChild;
}

export const StoryWrapper = (props: StoryWrapperParams) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // InitialLoad();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Providers>
      <div className={classes.root}>
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

        <PageWrapper>{props.children}</PageWrapper>

        <PositionedSnackbar />
      </div>
    </Providers>
  );
};
