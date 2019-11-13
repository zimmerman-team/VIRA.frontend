import 'styled-components/macro';
import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { IconMenuToggle } from '../icons/IconMenuToggle';
import { Theme } from '@material-ui/core/styles';
import { ProjectPalette } from 'app/theme';

interface TopAppBarParams {
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
  theme: Theme;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
}

export function TopAppBar(props: TopAppBarParams) {
  return (
    <AppBar
      position="fixed"
      className={clsx(props.classes.appBar, {
        [props.classes.appBarShift]: props.open,
      })}
    >
      <Toolbar
        css={`
          && {
            padding: 0;
          }
        `}
      >
        {props.open ? (
          <IconButton
            onClick={props.handleDrawerClose}
            css={`
              && {
                background-color: ${ProjectPalette.primary.main};
                border-radius: 0;
                padding: 0;
                width: 36px;
                height: 36px;
              }
            `}
          >
            <IconMenuToggle />
          </IconButton>
        ) : (
          <IconButton
            onClick={props.handleDrawerOpen}
            css={`
              && {
                background-color: ${ProjectPalette.primary.main};
                border-radius: 0;
                padding: 0;
                width: 36px;
                height: 36px;
              }
            `}
          >
            <IconMenuToggle />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}
