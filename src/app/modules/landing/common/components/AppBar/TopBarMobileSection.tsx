import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';

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
  return (
    <div className={classes.sectionMobile}>
      <IconButton
        aria-label="show more"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color="primary"
      >
        <MoreIcon />
      </IconButton>
    </div>
  );
}
