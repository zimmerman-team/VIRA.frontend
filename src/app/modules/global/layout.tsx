import 'styled-components/macro';
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { AppSideBar } from 'app/modules/global/common/components/AppSideBar';
import { MainContent } from 'app/modules/global/common/components/MainContent';
import PrimarySearchAppBar from './common/components/AppBar';
import { useStyles } from './useStyles';
import { navItems } from './consts';

export const GlobalLayout = () => {
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
      <CssBaseline />
      {PrimarySearchAppBar({
        classes: classes,
        open: open,
        theme: theme,
        handleDrawerClose: handleDrawerClose,
      })}

      {AppSideBar({
        classes: classes,
        open: open,
        handleDrawerClose: handleDrawerClose,
        handleDrawerOpen: handleDrawerOpen,
        theme: theme,
        navItems: navItems,
      })}
      {MainContent({ classes: classes, open: open })}
    </div>
  );
};