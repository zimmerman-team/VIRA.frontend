import React from 'react';
import auth from 'app/auth';
import get from 'lodash/get';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';
import { Box, Typography } from '@material-ui/core';
import {
  Container,
  Avatar,
  Button,
  ButtonPrimary,
  Link,
  Username,
} from 'app/modules/common/components/Account/styles';

import { useTranslation } from 'react-i18next';

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

  const { t, i18n } = useTranslation();

  return (
    <Container>
      <Avatar data-cy="usercard-avatar">{avatar.toUpperCase()}</Avatar>
      <Box height="17px" />
      <Username data-cy="usercard-username" variant="subtitle2">
        {storeUserName}
      </Username>
      <Box height="32px" />
      <Button>
        <Link
          data-cy="usercard-manage-teams-button"
          to="/super-admin/manage-teams"
          onClick={props.handleClick}
        >
          {t('user_management.general.manage_teams_users')}
        </Link>
      </Button>
      <Button>
        <Link
          data-cy="usercard-manage-account-button"
          to={`/manage-account/${userID}`}
          onClick={props.handleClick}
        >
          {t('user_management.general.manage_account')}
        </Link>
      </Button>
      <ButtonPrimary
        data-cy="usercard-signout-button"
        onClick={() => auth.signOut().then(() => clearUser())}
      >
        {t('user_management.general.logout')}
      </ButtonPrimary>
      <Box height="14px" />
      <Link
        data-cy="usercard-privacy-button"
        to="/privacy"
        onClick={props.handleClick}
      >
        {t('user_management.general.privacy_link')}
      </Link>
    </Container>
  );
};
