import 'styled-components/macro';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Popper, { PopperPlacementType } from '@material-ui/core/Popper';
import { notifMock } from 'app/modules/global/components/Notifications/common/mock';
import { NotificationContainer } from 'app/modules/global/components/Notifications';

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
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  const handleClick = (newPlacement: PopperPlacementType) => (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
    setOpen(prev => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <div className={props.classes.sectionDesktop}>
      <IconButton aria-label="search" color="primary">
        <SearchIcon />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        disablePortal
      >
        <NotificationContainer notificationItems={notifMock} />
      </Popper>
      <IconButton
        aria-label="show new notifications"
        color="primary"
        onClick={handleClick('bottom-end')}
      >
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
