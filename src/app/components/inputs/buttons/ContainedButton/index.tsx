import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

type Props = {
  text: string | JSX.Element;
  margin?: string;
  backgroundColor?: string;
  onClick(): void;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: any;
  specWidth?: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: props => ({
      margin: props.margin || '0',
      width: props.width,
      color:
        props.backgroundColor === 'transparent'
          ? '#ed6060'
          : theme.palette.primary.contrastText,
      backgroundColor: props.backgroundColor || theme.palette.primary.main,
    }),
    input: {
      display: 'none',
    },
  })
);

export const ContainedButton = (props: Props) => {
  const {
    text,
    margin,
    backgroundColor,
    fullWidth,
    icon,
    specWidth,
    ...otherProps
  } = props;

  let width = 'fit-content';

  if (fullWidth) {
    width = '100%';
  }

  if (specWidth) {
    width = specWidth;
  }

  const classes = useStyles({ margin, backgroundColor, width });
  return (
    <Button variant="contained" className={classes.button} {...otherProps}>
      {text}
      {icon}
    </Button>
  );
};
