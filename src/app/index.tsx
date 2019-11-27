// cc:application base#;application index

import React from 'react';
import { MainRoutes } from 'app/Routes';
import { useStyles } from 'app/modules/global/useStyles';
import { useTheme } from '@material-ui/core';
import PrimarySearchAppBar from 'app/modules/global/components/AppBar';
import { AppSideBar } from 'app/modules/global/components/AppSideBar';
import { NavItems } from 'app/modules/global/consts';
import { MainContent } from 'app/modules/global/components/MainContent';
import { PositionedSnackbar } from 'app/components/datadisplay/snackbar';

export function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
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

      <MainContent>
        <MainRoutes />
      </MainContent>

      <PositionedSnackbar />
    </div>
  );
}
