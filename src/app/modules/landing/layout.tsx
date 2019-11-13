import React from 'react';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { TopAppBar } from 'app/modules/landing/common/components/TopAppBar';
import { AppSideBar } from 'app/modules/landing/common/components/AppSideBar';
import { MainContent } from 'app/modules/landing/common/components/MainContent';

const drawerWidth = 256;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      backgroundColor: 'white',
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      // display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: theme.palette.primary.main,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      marginLeft: 0,
    },
  })
);

export const LandingLayout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const navItems = [
    'Dashboard',
    'Projects',
    'Grantees',
    'IF Priority area / SDGs',
    'FAQ',
    'Support',
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      {TopAppBar({
        classes: classes,
        open: open,
        theme: theme,
        handleDrawerClose: handleDrawerClose,
        handleDrawerOpen: handleDrawerOpen,
      })}
      {AppSideBar({
        classes: classes,
        open: open,
        handleDrawerClose: handleDrawerClose,
        theme: theme,
        navItems: navItems,
      })}
      {MainContent({ classes: classes, open: open })}
    </div>
  );
};
