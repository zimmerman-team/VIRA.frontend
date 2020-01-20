/* third-party */
import React from 'react';
import useTitle from 'react-use/lib/useTitle';
import { ManageUserLayout } from 'app/modules/super-admin/sub-modules/manage-user/layout';
import { manageUserLayoutMock } from 'app/modules/super-admin/sub-modules/manage-user/mock';
/* project */

export default function ManageUser() {
  useTitle(`Manage User`);

  return <ManageUserLayout {...manageUserLayoutMock} />;
}
