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

export function Account() {
  const storeUserName = useStoreState(state =>
    get(state.syncVariables.user, 'name', '')
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
      <Button>Manage teams & users</Button>
      <Button>Manage your account</Button>
      <Button onClick={() => auth.signOut().then(() => clearUser())}>
        Sign out
      </Button>
      <Box height="24px" />
      <Link to="/privacy">Privacy Policy</Link>
      <Box height="8px" />
      <Link to="/terms">Terms</Link>
    </Container>
  );
}
