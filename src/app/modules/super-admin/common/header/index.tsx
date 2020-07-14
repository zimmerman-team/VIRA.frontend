import { IconButton, InputBase } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Search, Sort } from '@material-ui/icons';
import { Popover } from 'app/components/misc/Popover';
import { ProjectPalette } from 'app/theme';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { css } from 'styled-components/macro';
import { SortOptionsModel } from '../../sub-modules/manage-users-teams/models';

const ButtonIconStyle: any = css`
  color: #a1aebd;
  :hover {
    color: ${ProjectPalette.secondary.light};
  }
`;

export type HeaderParams = {
  sortOptions?: SortOptionsModel[];
  onSortChange?: Function;
  onSearchChange?: Function;
  searchValue?: string;
};

export const AdminManageOverviewToolbar = (props: HeaderParams) => {
  const { t } = useTranslation();
  const [searchOpen, setSearchOpen] = React.useState(false);

  React.useEffect(() => {
    if (props.searchValue !== '' && !searchOpen) {
      setSearchOpen(true);
    }
  }, [props.searchValue]);

  return (
    <div
      css={`
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      `}
    >
      {searchOpen && (
        <InputBase
          autoFocus
          onBlur={() => props.searchValue === '' && setSearchOpen(false)}
          css={`
            height: 30px;
            margin-left: 20px;
            input {
              height: 100%;
              background-color: #f0f3f7;
              padding-left: 15px;
              padding-right: 15px;
              font-size: 16px;
              font-weight: 300;
              line-height: 1.5;
              letter-spacing: 0.5px;
            }
          `}
          data-cy="InputBase"
          fullWidth
          inputProps={{ 'aria-label': 'subject' }}
          value={props.searchValue}
          onChange={e =>
            props.onSearchChange && props.onSearchChange(e.target.value)
          }
        />
      )}
      {!searchOpen && (
        <IconButton
          css={ButtonIconStyle}
          data-cy="Search"
          onClick={() => setSearchOpen(true)}
        >
          <Search />
        </IconButton>
      )}
      <Popover
        component={
          <IconButton css={ButtonIconStyle}>
            <Sort />
          </IconButton>
        }
        content={[
          <List key="list">
            {(props.sortOptions || []).map(option => (
              <ListItem
                button
                key={option.value}
                onClick={() =>
                  props.onSortChange && props.onSortChange(option.value)
                }
              >
                {t(option.label)}
              </ListItem>
            ))}
          </List>,
        ]}
      />
    </div>
  );
};
