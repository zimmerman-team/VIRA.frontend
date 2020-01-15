import React from 'react';
import Grid from '@material-ui/core/Grid';
import { css } from 'styled-components/macro';
import { Typography, IconButton, Box, InputBase } from '@material-ui/core';
import { Add, Sort, Search } from '@material-ui/icons';
import styled from 'styled-components/macro';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { ProjectPalette } from 'app/theme';
import { Popover } from 'app/components/misc/Popover';
import { SortOptionsModel } from '../../sub-modules/manage-users-teams/models';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 12px 12px 24px;
  margin-bottom: 19.5px;
`;

const Title = styled(Typography)`
  && {
    font-size: 1.4285714285714286rem;
  }
`;

const IconLabelButton = styled(ContainedButton)`
  && {
    width: 100%;
    height: 50px;
    font-size: 1.1428571428571428rem;
    letter-spacing: 0.15px;
    svg {
      width: 24px;
      height: 24px;
      margin-right: 16px;
    }
  }
`;

const ButtonIcon = styled(IconButton)`
  color: #a1aebd;
  :hover {
    color: ${ProjectPalette.secondary.light};
  }
`;

export type HeaderParams = {
  title: string;
  buttonLabel: string;
  buttonClick?: Function;
  sortOptions?: SortOptionsModel[];
  onSortChange?: Function;
  onSearchChange?: Function;
  searchValue?: string;
};

export function HeaderFragment(props: HeaderParams) {
  const [searchOpen, setSearchOpen] = React.useState(false);

  React.useEffect(() => {
    if (props.searchValue !== '' && !searchOpen) {
      setSearchOpen(true);
    }
  }, [props.searchValue]);

  return (
    <React.Fragment>
      <Header>
        <Title variant="h6">{props.title}</Title>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
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
              fullWidth
              inputProps={{ 'aria-label': 'subject' }}
              value={props.searchValue}
              onChange={e =>
                props.onSearchChange && props.onSearchChange(e.target.value)
              }
            />
          )}
          {!searchOpen && (
            <ButtonIcon onClick={() => setSearchOpen(true)}>
              <Search />
            </ButtonIcon>
          )}
          <Popover
            component={
              <ButtonIcon>
                <Sort />
              </ButtonIcon>
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
                    {option.label}
                  </ListItem>
                ))}
              </List>,
            ]}
          />
        </Box>
      </Header>
      <Grid item container lg={2}>
        <IconLabelButton
          text={props.buttonLabel}
          icon={<Add />}
          onClick={props.buttonClick}
        />
      </Grid>
    </React.Fragment>
  );
}
