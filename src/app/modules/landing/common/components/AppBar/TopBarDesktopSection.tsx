import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';

interface TopBarDesktopSectionParams {
  classes: Record<
    | 'title'
    | 'search'
    | 'grow'
    | 'menuButton'
    | 'searchIcon'
    | 'inputRoot'
    | 'inputInput'
    | 'sectionDesktop'
    | 'sectionMobile',
    string
  >;
  menuId: string;
}

export function TopBarDesktopSection(props: TopBarDesktopSectionParams) {
  return (
    <div className={props.classes.sectionDesktop}>
      <IconButton aria-label="search" color="primary">
        <SearchIcon />
      </IconButton>
      <IconButton aria-label="show new notifications" color="primary">
        <Badge badgeContent={17} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls={props.menuId}
        aria-haspopup="true"
        color="primary"
      >
        <AccountCircle />
      </IconButton>
    </div>
  );
}
