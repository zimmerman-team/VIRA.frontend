/* third-party */
import React from 'react';
import useTitle from 'react-use/lib/useTitle';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';
import { ManageUsersTeamsLayout } from 'app/modules/super-admin/sub-modules/manage-users-teams/layout';
import { manageUsersTeamsLayoutMock } from 'app/modules/super-admin/sub-modules/manage-users-teams/mock';
/* project */
import { ManageUsersTeamsLayoutModel } from 'app/modules/super-admin/sub-modules/manage-users-teams/models';
import { formatUserCards } from 'app/modules/super-admin//sub-modules/manage-users-teams/utils/formatUserCards';

export function ManageUsers() {
  useTitle(`Manage Users`);

  const [users, setUsers] = React.useState([]);
  const [allUsers, setAllUsers] = React.useState([]);
  const [sort, setSort] = React.useState('title');
  const [search, setSearch] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(10);

  // redux state & actions
  const storeUser = useStoreState(state => state.syncVariables.user);
  const allUsersData = useStoreState(actions => actions.allUsers.data);
  const allUsersAction = useStoreActions(actions => actions.allUsers.fetch);

  React.useEffect(() => {
    allUsersAction({
      socketName: 'getAllUsers',
      values: { user: storeUser },
    });
  }, []);
  React.useEffect(() => {
    const init = allUsers.length === 0;
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
  }, [allUsersData, sort, page, pageSize, search]);

  function onChangePage(
    event: React.MouseEvent<HTMLButtonElement> | null,
    value: number
  ) {
    setPage(value);
  }

  function onChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>) {
    setPageSize(parseInt(event.target.value, 10));
  }

  const layoutProps: ManageUsersTeamsLayoutModel = {
    ...manageUsersTeamsLayoutMock,
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
    },
  };

  return <ManageUsersTeamsLayout {...layoutProps} />;
}
