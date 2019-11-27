import 'styled-components/macro';
import React from 'react';
import { Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { SidebarNavButton } from 'app/modules/global/components/SidebarNavButton';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import { ProjectPalette } from 'app/theme';
import { IconMenuOpen } from 'app/modules/global/icons/IconMenuOpen';
import { NavItemParams } from 'app/modules/global/consts';

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
  navItems: NavItemParams[];
}

export function AppSideBar(props: AppSideBarParams) {
  return (
    <Drawer
      variant="permanent"
      open={props.open}
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
            <IconMenuOpen />
          </IconButton>
        )}
      </div>

      <List
        css={`
          background-color: ${ProjectPalette.primary.main};
        `}
      >
        {props.navItems.map((navItem, index) => (
          <SidebarNavButton
            text={navItem.label}
            path={navItem.path}
            index={index}
            open={props.open}
            key={navItem.label}
          />
        ))}
      </List>
    </Drawer>
  );
}
