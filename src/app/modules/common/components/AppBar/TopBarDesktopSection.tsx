import React from 'react';
import 'styled-components/macro';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { useEventListener } from 'app/utils/useEventListener';
import { Account } from 'app/modules/common/components/Account';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Search } from 'app/modules/common/components/Search/index';
import Popper, { PopperPlacementType } from '@material-ui/core/Popper';
import { ProjectPalette } from 'app/theme';
import { useStoreState } from 'app/state/store/hooks';
import get from 'lodash/get';

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
    | 'sectionMobile'
    | 'searchDesktop',
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

  const [
    anchorElAccount,
    setAnchorElAccount,
  ] = React.useState<HTMLButtonElement | null>(null);
  const [openAccount, setOpenAccount] = React.useState(false);
  const [placementAccount, setPlacementAccount] = React.useState<
    PopperPlacementType
  >();

  const handleClickAccount = (newPlacement: PopperPlacementType) => (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorElAccount(event.currentTarget);
    setOpenAccount(prev => placementAccount !== newPlacement || !prev);
    setPlacementAccount(newPlacement);
  };

  const [openSearch, setOpenSearch] = React.useState(false);

  const handleClickSearch = () => {
    setOpenSearch(prev => !prev);
  };

  useEventListener('keydown', (e: KeyboardEvent) => {
    if (e.keyCode === 83 && e.ctrlKey) {
      handleClickSearch();
    }
  });

  const avatar = useStoreState(state =>
    get(state.syncVariables.user, 'name', '')
  )
    .split(' ')
    .map(i => i.slice(0, 1))
    .join('');

  return (
    <div className={props.classes.sectionDesktop}>
      {openSearch ? (
        <ClickAwayListener
          mouseEvent="onMouseDown"
          onClickAway={handleClickSearch}
        >
          <div className={props.classes.searchDesktop}>
            <Search handleResultClick={() => setOpenSearch(false)} />
          </div>
        </ClickAwayListener>
      ) : (
        <IconButton
          aria-label="search"
          color="primary"
          onClick={handleClickSearch}
        >
          <SearchIcon />
        </IconButton>
      )}
      <div
        css={`
          display: flex;
          width: 10px;
        `}
      />
      {/* notifications disabled for now */}
      {/* <Popper
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        disablePortal
      >
        <ClickAwayListener
          mouseEvent="onMouseDown"
          onClickAway={() => {
            setOpen(false);
          }}
        >
          <div>
            <NotificationContainer notificationItems={notifMock} />
          </div>
        </ClickAwayListener>
      </Popper> */}
      {/* <IconButton
        aria-label="show new notifications"
        color="primary"
        onClick={handleClick('bottom-end')}
      >
        <Badge badgeContent={17} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton> */}
      <Popper
        open={openAccount}
        anchorEl={anchorElAccount}
        placement={placementAccount}
        disablePortal
      >
        <ClickAwayListener
          mouseEvent="onMouseDown"
          onClickAway={() => {
            setOpenAccount(false);
          }}
        >
          <div>
            <Account handleClick={() => setOpenAccount(false)} />
          </div>
        </ClickAwayListener>
      </Popper>
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls={props.menuId}
        aria-haspopup="true"
        color="primary"
        onClick={handleClickAccount('bottom-end')}
      >
        <div
          css={`
            width: 24px;
            height: 24px;
            display: flex;
            font-size: 12px;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            color: ${ProjectPalette.common.white};
            background: ${ProjectPalette.secondary.main};
          `}
        >
          {avatar}
        </div>
      </IconButton>
    </div>
  );
}
