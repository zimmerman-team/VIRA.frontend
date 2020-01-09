import React from 'react';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';

export function InitialLoad() {
  const getUserRolesAction = useStoreActions(
    actions => actions.getUserRoles.fetch
  );
  const getUserGroupsAction = useStoreActions(
    actions => actions.getUserGroups.fetch
  );

  React.useEffect(() => {
    getUserRolesAction({
      socketName: 'getUserRoles',
      values: {},
    });
    getUserGroupsAction({
      socketName: 'getUserGroups',
      values: {},
    });
  }, []);
}
