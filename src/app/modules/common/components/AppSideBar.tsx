import 'styled-components/macro';
import React from 'react';
import { Theme } from '@material-ui/core/styles';
import {
  Drawer,
  IconButton,
  List,
  useMediaQuery,
  Hidden,
  Backdrop,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { SidebarNavButton } from 'app/modules/common/components/SidebarNavButton';
import clsx from 'clsx';
import { ProjectPalette } from 'app/theme';
import { IconMenuOpen } from 'app/modules/common/icons/IconMenuOpen';
import { NavItemParams } from 'app/modules/common/consts';

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
  const isMobileWidth = useMediaQuery('(max-width: 600px)');

  return (
    <>
      <Drawer
        variant={isMobileWidth ? 'temporary' : 'permanent'}
        transitionDuration={isMobileWidth ? 0 : undefined}
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
        css={`
          display: ${isMobileWidth && !props.open ? 'none' : ''};
        `}
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
            <>
              <div
                css={`
                  color: white;
                  font-size: 16px;
                  font-weight: 500;
                  display: ${props.open ? 'flex' : 'none'};
                  padding-left: ${isMobileWidth ? '45px' : 0};
                `}
              >
                ME & E TOOL
              </div>
              <Hidden smUp>
                <IconButton
                  onClick={props.handleDrawerClose}
                  css={`
                    position: relative;
                    left: 32px;
                  `}
                >
                  <Close
                    css={`
                      fill: white;
                    `}
                  />
                </IconButton>
              </Hidden>
            </>
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
              icon={navItem.icon}
            />
          ))}
        </List>
      </Drawer>
      <Hidden smUp>
        <Backdrop
          open={props.open}
          timeout={600}
          css={`
            && {
              opacity: 0.1 !important;
              background-color: ${ProjectPalette.common.white};
            }
          `}
        />
      </Hidden>
    </>
  );
}
