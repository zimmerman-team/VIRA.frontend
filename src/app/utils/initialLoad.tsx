import React from 'react';
import { useStoreActions } from 'app/state/store/hooks';

export function InitialLoad() {
  const getUserRolesAction = useStoreActions(
    actions => actions.getUserRoles.fetch
  );
  const getUserGroupsAction = useStoreActions(
    actions => actions.getUserGroups.fetch
  );
  const loadAuth0DBConnectionAction = useStoreActions(
    actions => actions.loadAuth0DBConnection.fetch
  );
  const loadAuth0DBConnectionData = useStoreActions(
    state => state.loadAuth0DBConnection.data
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
    if (!loadAuth0DBConnectionData) {
      loadAuth0DBConnectionAction({
        socketName: 'getAuth0DBConnection',
        values: {},
      });
    }
  }, [
    getUserGroupsAction,
    getUserRolesAction,
    loadAuth0DBConnectionAction,
    loadAuth0DBConnectionData,
  ]);
}
