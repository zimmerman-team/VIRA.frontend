import React from 'react';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';

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
  const loadAuth0DBConnectionData = useStoreState(
    state => state.loadAuth0DBConnection.data
  );
  const storeUser = useStoreState(state => state.userDetails.data);

  React.useEffect(() => {
    getUserRolesAction({
      socketName: 'getUserRoles',
      values: {},
    });
    if (storeUser) {
      getUserGroupsAction({
        socketName: 'getUserGroups',
        values: { user: storeUser },
      });
    }
    if (!loadAuth0DBConnectionData) {
      loadAuth0DBConnectionAction({
        socketName: 'getAuth0DBConnection',
        values: {},
      });
    }
  }, [storeUser]);
}
