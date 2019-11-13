import 'styled-components/macro';
import React from 'react';
import { Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { SidebarNavButton } from './SidebarNavButton';

interface AppSideBarParams {
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
  handleDrawerClose: () => void;
  theme: Theme;
  navItems: string[];
}

export function AppSideBar(props: AppSideBarParams) {
  return (
    <Drawer
      className={props.classes.drawer}
      variant="persistent"
      anchor="left"
      open={props.open}
      classes={{
        paper: props.classes.drawerPaper,
      }}
    >
      <div
        className={props.classes.drawerHeader}
        css={`
          && {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      >
        <div
          css={`
            color: white;
            font-size: 16px;
            font-weight: 500;
          `}
        >
          ME & E TOOL
        </div>
      </div>

      <List>
        {props.navItems.map((text, index) =>
          SidebarNavButton({ text: text, index: index })
        )}
      </List>
    </Drawer>
  );
}
