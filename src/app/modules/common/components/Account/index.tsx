import React from 'react';
import auth from 'app/auth';
import get from 'lodash/get';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';
import { Box, Typography } from '@material-ui/core';
import {
  Container,
  Avatar,
  Button,
  Link,
} from 'app/modules/common/components/Account/styles';

type AccountProps = {
  handleClick: any;
};

export const Account = (props: AccountProps) => {
  const storeUserName = useStoreState(state =>
    get(state.syncVariables.user, 'name', '')
  );
  const userID = useStoreState(state =>
    get(state.syncVariables.user, '_id', '')
  );
  const clearUser = useStoreActions(actions => actions.syncVariables.clearUser);
  const avatar = storeUserName
    .split(' ')
    .map(i => i.slice(0, 1))
    .join('');

  return (
    <Container>
      <Avatar>{avatar.toUpperCase()}</Avatar>
      <Typography variant="subtitle2">{storeUserName}</Typography>
      <Box height="32px" />
      <Button>
        <Link to="/super-admin/manage-teams" onClick={props.handleClick}>
          Manage teams & users
        </Link>
      </Button>
      <Button>
        <Link to={`/manage-account/${userID}`} onClick={props.handleClick}>
          Manage your account
        </Link>
      </Button>
      <Button onClick={() => auth.signOut().then(() => clearUser())}>
        Sign out
      </Button>
      <Box height="24px" />
      <Link to="/privacy" onClick={props.handleClick}>
        Privacy Policy
      </Link>
      <Box height="8px" />
      <Link to="/terms" onClick={props.handleClick}>
        Terms
      </Link>
    </Container>
  );
};
