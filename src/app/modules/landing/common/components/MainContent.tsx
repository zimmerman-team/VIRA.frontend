import 'styled-components/macro';
import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';

interface MainContentParams {
  classes: Record<
    | 'content'
    | 'hide'
    | 'root'
    | 'appBar'
    | 'appBarShift'
    | 'menuButton'
    | 'drawer'
    | 'drawerPaper'
    | 'drawerHeader'
    | 'contentShift',
    string
  >;
  open: boolean;
}

export function MainContent(props: MainContentParams) {
  return (
    <main
      className={clsx(props.classes.content, {
        [props.classes.contentShift]: props.open,
      })}
    >
      <div className={props.classes.drawerHeader} />
      <Typography paragraph>empty</Typography>
    </main>
  );
}
