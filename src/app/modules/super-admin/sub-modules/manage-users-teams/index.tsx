import get from 'lodash/get';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';

import { formatUserCards } from 'app/modules/super-admin//sub-modules/manage-users-teams/utils/formatUserCards';
import { ManageUsersTeamsLayout } from 'app/modules/super-admin/sub-modules/manage-users-teams/layout';
import { manageUsersTeamsLayoutMock } from 'app/modules/super-admin/sub-modules/manage-users-teams/mock';
import { ManageUsersTeamsLayoutModel } from 'app/modules/super-admin/sub-modules/manage-users-teams/models';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';

import { formatTeamCards } from './utils/formatTeamCards';

function ManageUsersF(props: RouteComponentProps) {
  const [users, setUsers] = React.useState([]);
  const [allUsers, setAllUsers] = React.useState([]);
  const [teams, setTeams] = React.useState([]);
  const [allTeams, setAllTeams] = React.useState([]);
  const [sort, setSort] = React.useState('title');
  const [search, setSearch] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(10);
  // redux state & actions
  const storeUser = useStoreState(state => state.syncVariables.user);
  const allUsersAction = useStoreActions(actions => actions.allUsers.fetch);
  const allUsersData = useStoreState(state => state.allUsers.data);
  const deleteUserAction = useStoreActions(actions => actions.deleteUser.fetch);
  const deleteUserData = useStoreState(state => state.deleteUser.data);
  const deleteUserClear = useStoreActions(actions => actions.deleteUser.clear);
  const allTeamsAction = useStoreActions(actions => actions.allTeams.fetch);
  const allTeamsData = useStoreState(state => state.allTeams.data);

  React.useEffect(() => {
    allUsersAction({
      socketName: 'getAllUsers',
      values: { user: storeUser },
    });
    allTeamsAction({
      socketName: 'getUserGroups',
      values: { user: storeUser },
    });
  }, []);

  function formatUsers() {
    const init =
      allUsers.length === 0 ||
      allUsers.length !== get(allUsersData, 'length', 0);
    const data = formatUserCards(
      init,
      init ? allUsersData : allUsers,
      sort,
      page,
      pageSize,
      search
    );
    setAllUsers(data.allData);
    setUsers(data.paginatedData);
  }

  function formatTeams() {
    const init =
      allTeams.length === 0 ||
      allTeams.length !== get(allTeamsData, 'length', 0);
    const data = formatTeamCards(
      init,
      init ? allTeamsData : allTeams,
      sort,
      page,
      pageSize,
      search,
      allUsersData
    );
    setAllTeams(data.allData);
    setTeams(data.paginatedData);
  }

  React.useEffect(() => {
    formatUsers();
    formatTeams();
  }, [allUsersData, allTeamsData, sort, page, pageSize, search]);
  React.useEffect(() => {
    if (get(props.match.params, 'id', '') === 'manage-teams') {
      allTeamsAction({
        socketName: 'getUserGroups',
        values: { user: storeUser },
      });
    } else {
      allUsersAction({
        socketName: 'getAllUsers',
        values: { user: storeUser },
      });
    }
    deleteUserClear();
  }, [deleteUserData]);

  function onChangePage(
    event: React.MouseEvent<HTMLButtonElement> | null,
    value: number
  ) {
    setPage(value);
  }

  function onChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>) {
    setPageSize(parseInt(event.target.value, 10));
  }

  function deleteUser(id: string) {
    const socketName =
      get(props.match.params, 'id', '') === 'manage-teams'
        ? 'deleteGroup'
        : 'deleteUser';
    deleteUserAction({ socketName, values: { delId: id } });
  }

  const loading = useStoreState(state => state.allUsers.loading);

  const layoutProps: ManageUsersTeamsLayoutModel = {
    ...manageUsersTeamsLayoutMock,
    loading,
    pageModule: {
      ...manageUsersTeamsLayoutMock.pageModule,
      teamCards: users,
      pagination: {
        page,
        onChangePage,
        onChangeRowsPerPage,
        rowsPerPage: pageSize,
        count: allUsers.length,
      },
      onSortChange: setSort,
      onSearchChange: setSearch,
      searchValue: search,
      deleteUser,
    },
    teamPageModule: {
      ...manageUsersTeamsLayoutMock.teamPageModule,
      teamCards: teams,
      pagination: {
        page,
        onChangePage,
        onChangeRowsPerPage,
        rowsPerPage: pageSize,
        count: allTeams.length,
      },
      onSortChange: setSort,
      onSearchChange: setSearch,
      searchValue: search,
      deleteUser,
    },
  };

  return <ManageUsersTeamsLayout {...layoutProps} />;
}

export const ManageUsers = withRouter(ManageUsersF);
