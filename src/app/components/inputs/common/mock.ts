import { fade, Theme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/styles/withStyles';

export const getInputGeneralStyle = (theme: Theme): CSSProperties => {
  return {
    borderRadius: 2,
    position: 'relative',
    backgroundColor: theme.palette.grey[50],
    border: '1px solid transparent',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: 'Inter',
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  };
};
