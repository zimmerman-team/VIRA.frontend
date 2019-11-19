import 'styled-components/macro';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './useStyles';
import { MobileRendering } from './MobileRenderingParams';
import { MenuRendering } from './MenuRenderingParams';
import { TopBarMobileSection } from './TopBarMobileSection';
import { TopBarDesktopSection } from './TopBarDesktopSection';
import { Theme } from '@material-ui/core';
import clsx from 'clsx';
import { ProjectPalette } from '../../../../../theme';
import { IconMenuToggle } from '../../icons/IconMenuToggle';
// import { TopBarSearchSection } from './TopBarSearchSection';

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
}

export default function PrimarySearchAppBar(props: PrimarySearchAppBarParams) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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
    <>
      <AppBar
        position="fixed"
        className={clsx(props.classes.appBar, {
          [props.classes.appBarShift]: props.open,
        })}
      >
        <Toolbar
          css={`
            && {
              padding-left: 0;
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
            <div />
          )}
          {/*{TopBarSearchSection(classes)}*/}
          <div className={classes.grow} />
          {TopBarDesktopSection({
            classes: classes,
            menuId: menuId,
          })}
          {TopBarMobileSection(classes, mobileMenuId, handleMobileMenuOpen)}
        </Toolbar>
      </AppBar>
      {MobileRendering({
        mobileMoreAnchorEl: mobileMoreAnchorEl,
        mobileMenuId: mobileMenuId,
        isMobileMenuOpen: isMobileMenuOpen,
        handleMobileMenuClose: handleMobileMenuClose,
      })}
    </>
  );
}
