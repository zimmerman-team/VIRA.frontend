import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

export function TopBarSearchSection(
  classes: Record<
    | 'title'
    | 'grow'
    | 'menuButton'
    | 'search'
    | 'searchIcon'
    | 'inputRoot'
    | 'inputInput'
    | 'sectionDesktop'
    | 'sectionMobile',
    string
  >
) {
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
}
