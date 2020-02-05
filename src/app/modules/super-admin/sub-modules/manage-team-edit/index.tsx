import React from 'react';
import { withRouter } from 'react-router-dom';
import useTitle from 'react-use/lib/useTitle';
import get from 'lodash/get';
import find from 'lodash/find';
import some from 'lodash/some';
import filter from 'lodash/filter';
import isEqual from 'lodash/isEqual';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';
import { ManageTeamEditLayout } from 'app/modules/super-admin/sub-modules/manage-team-edit/layout';
import { manageTeamEditLayoutMock } from 'app/modules/super-admin/sub-modules/manage-team-edit/mock';
import {
  ManageEditAddTeamModel,
  ManageTeamEditLayoutModel,
} from 'app/modules/super-admin/sub-modules/manage-team-edit/models';
import { formatUserTable } from 'app/modules/super-admin/sub-modules/manage-team-edit/utils/formatUserTable';
import { getTableColumns } from 'app/modules/super-admin/sub-modules/manage-team-edit/utils/getTableColumns';

function ManageTeamEditAddF(props: ManageEditAddTeamModel) {
  useTitle(`Manage Team - ${props.breadcrumbs.currentLocation}`);
  // redux state & actions
  const allUsersData = useStoreState(state => state.allUsers.data);
  const allUsersAction = useStoreActions(actions => actions.allUsers.fetch);
  const storeUser = useStoreState(state => state.syncVariables.user);
  const addTeamData = useStoreState(state => state.addTeam.data);
  const addTeamAction = useStoreActions(actions => actions.addTeam.fetch);
  const addTeamClearAction = useStoreActions(actions => actions.addTeam.clear);
  const snackbarAction = useStoreActions(
    actions => actions.syncVariables.setSnackbar
  );
  const allTeamsData = useStoreState(state => state.allTeams.data);
  const allTeamsAction = useStoreActions(actions => actions.allTeams.fetch);

  // local state
  const [teamName, setTeamName] = React.useState('');
  const [allUsers, setAllUsers] = React.useState([]);
  const [selectedIds, setSelectedIds] = React.useState([]);
  const [currentTeam, setCurrentTeam] = React.useState({});
  const [submitEnabled, setSubmitEnabled] = React.useState(false);

  // component did mount
  React.useEffect(() => {
    allUsersAction({
      socketName: 'getAllUsers',
      values: { user: storeUser },
    });
    if (props.mode === 'edit') {
      if (allTeamsData) {
        const currTeam = find(
          allTeamsData,
          (t: any) => t._id === get(props.match.params, 'id', '')
        );
        if (currTeam) {
          setCurrentTeam(currTeam);
        }
      } else {
        allTeamsAction({
          socketName: 'getUserGroups',
          values: { user: storeUser },
        });
      }
    }

    return () => addTeamClearAction();
  }, []);

  // component did update on allUsersData
  React.useEffect(() => {
    setAllUsers(formatUserTable(allUsersData));
  }, [allUsersData]);

  React.useEffect(() => {
    if (get(addTeamData, 'message', '') === 'success') {
      snackbarAction(
        `Team ${props.mode === 'edit' ? 'edited' : 'created'} successfully.`
      );
      if (props.mode === 'add') {
        setSelectedIds([]);
        setTeamName('');
      } else {
        allTeamsAction({
          socketName: 'getUserGroups',
          values: { user: storeUser },
        });
      }
      setTimeout(() => {
        snackbarAction('');
        addTeamClearAction();
      }, 10000);
    } else if (get(addTeamData, 'message', '') !== '') {
      snackbarAction(get(addTeamData, 'message', ''));
    }
  }, [addTeamData]);

  React.useEffect(() => {
    if (currentTeam) {
      setTeamName(get(currentTeam, 'name', ''));
      setSelectedIds(get(currentTeam, 'members', []));
    }
  }, [currentTeam]);

  React.useEffect(() => {
    if (props.mode === 'add') {
      setSubmitEnabled(Boolean(teamName !== ''));
    } else {
      setSubmitEnabled(
        Boolean(
          (teamName !== '' && teamName !== get(currentTeam, 'name', '')) ||
            !isEqual(selectedIds, get(currentTeam, 'members', []))
        )
      );
    }
  }, [teamName, selectedIds]);

  function submit() {
    if (props.mode === 'add') {
      addTeamAction({
        socketName: 'addGroup',
        values: {
          user: { authId: storeUser?._id },
          name: teamName,
          usersToAdd: selectedIds,
        },
      });
    } else {
      let usersToAdd = [];
      let usersToRemove = [];
      if (get(currentTeam, 'members', []) === []) {
        usersToAdd = selectedIds;
      } else {
        usersToAdd = filter(selectedIds, (id: string) =>
          Boolean(
            !some(get(currentTeam, 'members', []), (_id: string) => _id === id)
          )
        );
        usersToRemove = filter(get(currentTeam, 'members', []), (_id: string) =>
          Boolean(!find(selectedIds, id => id === _id))
        );
      }
      addTeamAction({
        socketName: 'editGroup',
        values: {
          usersToAdd,
          usersToRemove,
          name: teamName,
          user: { authId: storeUser?._id },
          groupId: get(currentTeam, '_id', ''),
          description: get(currentTeam, 'description', ''),
        },
      });
    }
  }

  const loading = useStoreState(
    state => state.allUsers.loading || state.addTeam.loading
  );

  const layoutProps: ManageTeamEditLayoutModel = {
    ...manageTeamEditLayoutMock,
    breadcrumbs: props.breadcrumbs,
    loading,
    title: teamName,
    setTitle: setTeamName,
    table: {
      ...manageTeamEditLayoutMock.table,
      data: allUsers,
      columns: getTableColumns(selectedIds, setSelectedIds),
    },
    submit,
    submitEnabled,
  };

  return <ManageTeamEditLayout {...layoutProps} />;
}

export const ManageTeamEditAdd = withRouter(ManageTeamEditAddF);
