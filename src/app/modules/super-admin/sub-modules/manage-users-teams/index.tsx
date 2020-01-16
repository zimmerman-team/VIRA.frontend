/* third-party */
import React from 'react';
import useTitle from 'react-use/lib/useTitle';
import { ManageUsersTeamsLayout } from 'app/modules/super-admin/sub-modules/manage-users-teams/layout';
import { manageUsersTeamsLayoutMock } from 'app/modules/super-admin/sub-modules/manage-users-teams/mock';
/* project */

export default function ManageUsers() {
  useTitle(`Manage Users`);

  return <ManageUsersTeamsLayout {...manageUsersTeamsLayoutMock} />;
}
