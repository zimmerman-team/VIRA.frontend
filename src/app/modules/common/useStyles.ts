import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const drawerWidth = 256;
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      backgroundColor: 'white',
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      paddingLeft: drawerWidth,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: theme.palette.primary.main,
    },
    drawerOpen: {
      width: drawerWidth,
      backgroundColor: theme.palette.primary.main,
    },
    drawerClose: {
      overflowX: 'hidden',
      width: '54px',
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
      marginRight: 0,
    },
  })
);
