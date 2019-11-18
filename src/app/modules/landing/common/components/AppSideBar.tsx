import 'styled-components/macro';
import React from 'react';
import { Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { SidebarNavButton } from './SidebarNavButton';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import { ProjectPalette } from '../../../../theme';
import { IconMenuToggle } from '../icons/IconMenuToggle';

interface AppSideBarParams {
  classes: Record<
    | 'content'
    | 'hide'
    | 'root'
    | 'appBar'
    | 'appBarShift'
    | 'menuButton'
    | 'drawer'
    | 'drawerOpen'
    | 'drawerClose'
    | 'drawerPaper'
    | 'drawerHeader'
    | 'contentShift',
    string
  >;
  open: boolean;
  handleDrawerClose: () => void;
  handleDrawerOpen: () => void;
  theme: Theme;
  navItems: string[];
}

export function AppSideBar(props: AppSideBarParams) {
  return (
    <Drawer
      // className={props.classes.drawer}
      variant="permanent"
      // anchor="left"
      open={props.open}
      // classes={{
      //   paper: props.classes.drawerPaper,
      // }}

      className={clsx(props.classes.drawer, {
        [props.classes.drawerOpen]: props.open,
        [props.classes.drawerClose]: !props.open,
      })}
      classes={{
        paper: clsx({
          [props.classes.drawerOpen]: props.open,
          [props.classes.drawerClose]: !props.open,
        }),
      }}
    >
      <div
        className={props.classes.drawerHeader}
        css={`
          && {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${ProjectPalette.primary.main};
          }
        `}
      >
        {props.open ? (
          <div
            css={`
              color: white;
              font-size: 16px;
              font-weight: 500;
              display: ${props.open ? 'flex' : 'none'};
            `}
          >
            ME & E TOOL
          </div>
        ) : (
          <IconButton
            onClick={props.handleDrawerOpen}
            css={`
              && {
                background-color: ${ProjectPalette.primary.main};
                border-radius: 0;
                padding: 0;
                width: 54px;
                height: 36px;
              }
            `}
          >
            <IconMenuToggle />
          </IconButton>
        )}
      </div>

      <List
        css={`
          background-color: ${ProjectPalette.primary.main};
        `}
      >
        {props.navItems.map((text, index) =>
          SidebarNavButton({ text: text, index: index, open: props.open })
        )}
      </List>
    </Drawer>
  );
}
