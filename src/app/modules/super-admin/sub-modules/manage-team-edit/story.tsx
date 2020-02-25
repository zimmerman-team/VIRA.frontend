import React from 'react';
import { ManageTeamEditLayout } from './layout';
import { manageTeamEditLayoutMock } from './mock';

export default {
  title: 'modules | Administration',
};

export const editTeams = () => (
  <ManageTeamEditLayout {...manageTeamEditLayoutMock} />
);
