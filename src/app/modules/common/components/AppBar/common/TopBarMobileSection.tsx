import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import Popper, { PopperPlacementType } from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Account } from 'app/modules/common/components/Account';

export function TopBarMobileSection(
  classes: Record<
    | 'grow'
    | 'menuButton'
    | 'title'
    | 'search'
    | 'searchIcon'
    | 'inputRoot'
    | 'inputInput'
    | 'sectionDesktop'
    | 'sectionMobile',
    string
  >,
  mobileMenuId: string,
  handleMobileMenuOpen: (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => void
) {
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

  return (
    <div className={classes.sectionMobile}>
      {/* ---------------------------- */}
      {/* usercard popper */}
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
          <div data-cy="usercard-container">
            <Account handleClick={() => setOpenAccount(false)} />
          </div>
        </ClickAwayListener>
      </Popper>

      <IconButton
        aria-label="show more"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        // onClick={handleMobileMenuOpen}
        onClick={handleClickAccount('bottom-end')}
        color="primary"
      >
        <MoreIcon />
      </IconButton>
    </div>
  );
}
