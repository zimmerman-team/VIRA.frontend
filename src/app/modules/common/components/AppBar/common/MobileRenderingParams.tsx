import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useTranslation } from 'react-i18next';

import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';

interface MobileRenderingParams {
  mobileMoreAnchorEl: HTMLElement | null;
  mobileMenuId: string;
  isMobileMenuOpen: boolean;
  handleMobileMenuClose: () => void;
}
export function MobileRendering(props: MobileRenderingParams) {
  const { t } = useTranslation();
  return (
    <Menu
      anchorEl={props.mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={props.mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={props.isMobileMenuOpen}
      onClose={props.handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="search" color="primary">
          <SearchIcon />
        </IconButton>
        <p>{t('Search')}</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="primary">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>{t('Notifications')}</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="primary"
        >
          <AccountCircle />
        </IconButton>
        <p>{t('Profile')}</p>
      </MenuItem>
    </Menu>
  );
}
