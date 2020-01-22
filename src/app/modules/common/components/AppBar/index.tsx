/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
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
    <React.Fragment>
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
