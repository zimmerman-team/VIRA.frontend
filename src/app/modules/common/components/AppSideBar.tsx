// @ts-nocheck
import { css } from 'styled-components/macro';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Theme } from '@material-ui/core/styles';
import { useStoreState } from 'app/state/store/hooks';
import get from 'lodash/get';
import find from 'lodash/find';
import filter from 'lodash/filter';
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
import { Logo } from 'app/assets/icons/Logo';

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
  const userRole = useStoreState((state) =>
    get(state.userDetails.data, 'role', '')
  );
  const [navItems, setNavItems] = React.useState(
    getNavItems(props.navItems, userRole)
  );
  const isMobileWidth = useMediaQuery('(max-width: 600px)');

  function getNavItems(items: NavItemParams[], locuserRole: string) {
    return filter(items, (item: NavItemParams) => {
      if (item.roles) {
        return find(item.roles, (role: string) => role === locuserRole);
      }
      return true;
    });
  }

  React.useEffect(() => setNavItems(getNavItems(props.navItems, userRole)), [
    props.navItems,
    userRole,
  ]);

  const HeaderStyle = css`
    && {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${ProjectPalette.primary.main};
    }
  `;

  const NavLinkStyle = css`
    font-weight: 500;
    padding-top: 24px;
    padding-bottom: 36px;
    display: ${props.open ? 'flex' : 'none'};
    padding-left: ${isMobileWidth ? '45px' : 0};
  `;

  const IconButtonOpenStyle = css`
    position: relative;
    left: 32px;
  `;

  const IconButtonClosedStyle = css`
    && {
      background-color: ${ProjectPalette.primary.main};
      border-radius: 0;
      padding: 0;
      width: 54px;
      height: 36px;
      /* do we want the side bar items to be aligned at all times? */
      //margin-bottom: 84px;
    }
  `;

  const SidebarListStyle = css`
    overflow-x: hidden;
    padding-left: ${props.open ? '42px' : 0};
    background-color: ${ProjectPalette.primary.main};
  `;

  const DrawerStyle = css`
    display: ${isMobileWidth && !props.open ? 'none' : ''};
  `;

  return (
    <React.Fragment>
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
        css={DrawerStyle}
      >
        <div className={props.classes.drawerHeader} css={HeaderStyle}>
          {props.open ? (
            /* --------------------------------------- */
            /* if sidebar is open show the following: */
            <React.Fragment>
              <div css={NavLinkStyle}>
                <NavLink data-cy="sidebar-home-button" to="/">
                  <Logo />
                </NavLink>
              </div>
              <Hidden smUp>
                <IconButton
                  data-cy="sidebar-menu-button"
                  onClick={props.handleDrawerClose}
                  css={IconButtonOpenStyle}
                >
                  <Close
                    css={`
                      fill: white;
                    `}
                  />
                </IconButton>
              </Hidden>
            </React.Fragment>
          ) : (
            /* --------------------------------------- */
            /* if sidebar is closed show the following: */
            <IconButton
              data-cy="sidebar-menu-button"
              onClick={props.handleDrawerOpen}
              css={IconButtonClosedStyle}
            >
              <IconMenuOpen />
            </IconButton>
          )}
        </div>

        {/* --------------------------------------- */}
        {/* nav item list */}
        <List css={SidebarListStyle}>
          {/* generate sidebar nav items */}
          {navItems.map((navItem, index) => (
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

      {/* --------------------------------------- */}
      {/* some kind of backdrop that is only supposed to appear on mobile */}
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
    </React.Fragment>
  );
}
