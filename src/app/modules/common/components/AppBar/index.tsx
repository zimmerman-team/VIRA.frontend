/* eslint-disable @typescript-eslint/no-unused-vars */
import { Menu } from '@material-ui/icons';
import {
  Theme,
  Hidden,
  useMediaQuery,
  Toolbar,
  IconButton,
  AppBar,
} from '@material-ui/core';
import { MobileRendering } from 'app/modules/common/components/AppBar/MobileRenderingParams';
import { TopBarDesktopSection } from 'app/modules/common/components/AppBar/TopBarDesktopSection';
import { TopBarMobileSection } from 'app/modules/common/components/AppBar/TopBarMobileSection';
import { useStyles } from 'app/modules/common/components/AppBar/useStyles';
import { IconMenuToggle } from 'app/modules/common/icons/IconMenuToggle';
import { ProjectPalette } from 'app/theme';
import clsx from 'clsx';
import React from 'react';
import 'styled-components/macro';

interface PrimarySearchAppBarParams {
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

  handleDrawerClose: () => void;
  handleDrawerOpen: () => void;
}

export default function PrimarySearchAppBar(props: PrimarySearchAppBarParams) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isMobileWidth = useMediaQuery('(max-width: 600px)');

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        className={clsx(props.classes.appBar, {
          [props.classes.appBarShift]: props.open,
        })}
        css={`
          box-shadow: none !important;
          width: 100vw;
          left: 0 !important;
        `}
      >
        <Toolbar
          css={`
            && {
              padding-left: 0;
              padding-right: ${isMobileWidth ? 0 : '16px'};
            }
          `}
        >
          {/* Mobile Appbar Open/Close button*/}
          <Hidden smUp>
            {props.open ? (
              <div />
            ) : (
              <IconButton onClick={props.handleDrawerOpen}>
                <Menu
                  fontSize="large"
                  css={`
                    color: ${ProjectPalette.grey.A400};
                  `}
                />
              </IconButton>
            )}
          </Hidden>

          <Hidden smDown>
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
              <div />
            )}
          </Hidden>
          {/* {TopBarSearchSection(classes)} */}
          <div className={classes.grow} />
          {TopBarDesktopSection({
            classes,
            menuId,
          })}
          {TopBarMobileSection(classes, mobileMenuId, handleMobileMenuOpen)}
        </Toolbar>
      </AppBar>
      {MobileRendering({
        mobileMoreAnchorEl,
        mobileMenuId,
        isMobileMenuOpen,
        handleMobileMenuClose,
      })}
    </React.Fragment>
  );
}
