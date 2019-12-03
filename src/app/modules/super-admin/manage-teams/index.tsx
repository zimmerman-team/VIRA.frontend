/* third-party */
import React from 'react';
import useTitle from 'react-use/lib/useTitle';
import { ManageTeamsLayout } from 'app/modules/super-admin/manage-teams/layout';
import { mockData } from 'app/modules/super-admin/manage-teams/mock';
/* project */

export default function ManageTeams() {
  useTitle(`Manage Teams`);

  return <ManageTeamsLayout {...mockData} />;
}
