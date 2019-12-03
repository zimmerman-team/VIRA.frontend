/* third-party */
import React from 'react';
import useTitle from 'react-use/lib/useTitle';
import { ManageUsersLayout } from 'app/modules/super-admin/manage-users/layout';
import { mockData } from 'app/modules/super-admin/manage-users/mock';
/* project */

export default function ManageUsers() {
  useTitle(`Manage Users`);

  return <ManageUsersLayout {...mockData} />;
}
