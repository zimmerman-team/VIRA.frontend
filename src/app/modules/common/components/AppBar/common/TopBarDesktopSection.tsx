// @ts-nocheck
import React from 'react';
import { css } from 'styled-components/macro';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { useEventListener } from 'app/utils/useEventListener';
import { Account } from 'app/modules/common/components/Account';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Search } from 'app/modules/common/components/Search';
import Popper, { PopperPlacementType } from '@material-ui/core/Popper';
import { ProjectPalette } from 'app/theme';
import { useStoreState, useStoreActions } from 'app/state/store/hooks';
import get from 'lodash/get';
import { useTranslation } from 'react-i18next';

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

const UserCardButtonStyle = css`
  width: 24px;
  height: 24px;
  display: flex;
  font-size: 12px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  color: ${ProjectPalette.common.white};
  background: ${ProjectPalette.secondary.main};
`;

const LanguageButtonStyle = css`
  display: flex;
  padding: 12px 0 12px 12px;
  button {
    padding: 0;
    width: 24px;
    height: 24px;
    outline: none;
    cursor: pointer;
    font-size: 12px;
    border-radius: 50%;
    &:active {
      border-style: solid;
    }
  }
`;

export function TopBarDesktopSection(props: TopBarDesktopSectionParams) {
  const { i18n } = useTranslation();
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

  /* todo: refactor, deprecated symbol */
  useEventListener('keydown', (e: KeyboardEvent) => {
    if (e.keyCode === 83 && e.ctrlKey) {
      handleClickSearch();
    }
  });

  const handleChangeLanguage = useStoreActions(
    actions => actions.syncVariables.setLng
  );
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    handleChangeLanguage(lng);
  };

  const avatar = useStoreState(state =>
    get(state.syncVariables.user, 'name', '')
  )
    .split(' ')
    .map(i => i.slice(0, 1))
    .join('');

  const DutchLangBtnStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    color: ${i18n.language === 'nl' ? '#25BAA4' : '#70889E'};
    cursor: pointer;
    user-select: none;
  `;

  const EnglisLangBtnStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    color: ${i18n.language === 'en' ? '#25BAA4' : '#70889E'};
    cursor: pointer;
    user-select: none;
  `;

  return (
    <div className={props.classes.sectionDesktop}>
      {/* ---------------------------- */}
      {/* search */}
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
          data-cy="search-button"
          aria-label="search"
          color="primary"
          onClick={handleClickSearch}
        >
          <SearchIcon />
        </IconButton>
      )}

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
      {/* ---------------------------- */}
      {/* user account button */}
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls={props.menuId}
        aria-haspopup="true"
        color="primary"
        data-cy="usercard-button"
        onClick={handleClickAccount('bottom-end')}
      >
        <div css={UserCardButtonStyle}>{avatar}</div>
      </IconButton>
      {/* ---------------------------- */}
      {/* NL and EN btn container */}
      <div css={LanguageButtonStyle}>
        <div
          data-cy="language-en"
          css={EnglisLangBtnStyle}
          onClick={() => changeLanguage('en')}
        >
          EN
        </div>
        <div
          css={`
            width: 1px;
            background-color: #70889e;
            margin: 5px;
            margin-left: 1px;
            margin-right: 1px;
          `}
        />

        <div
          data-cy="language-nl"
          css={DutchLangBtnStyle}
          onClick={() => changeLanguage('nl')}
        >
          NL
        </div>
      </div>
    </div>
  );
}
