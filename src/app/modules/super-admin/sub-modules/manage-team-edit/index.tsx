/* third-party */
import React from 'react';
import useTitle from 'react-use/lib/useTitle';
import { ManageTeamEditLayout } from 'app/modules/super-admin/sub-modules/manage-team-edit/layout';
import { manageTeamEditLayoutMock } from 'app/modules/super-admin/sub-modules/manage-team-edit/mock';
/* project */

export default function ManageTeamEdit() {
  useTitle(`Manage Team - Edit`);

  return <ManageTeamEditLayout {...manageTeamEditLayoutMock} />;
}
