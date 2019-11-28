import 'styled-components/macro';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { TabNavigation } from 'app/modules/projects/common/components/TabNavigation';
import { NavItemParams } from 'app/modules/common/consts';

const navItemMock: NavItemParams[] = [
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Grantee',
    path: '/projects/grantee',
  },
  {
    label: 'Grantee',
    path: '/projects/grantee',
  },
];

export const ProjectsModule = () => {
  return (
    <React.Fragment>
      {/* using this element as an helper */}
      <Grid item lg={6} />

      {/* ------------------------------------------------------------------ */}
      {/* projects table navigation */}
      <Grid item lg={6}>
        <TabNavigation tabs={navItemMock} />
      </Grid>
      {/* ------------------------------------------------------------------ */}
      {/* projects table */}
      <Grid item lg={12}>
        empty
      </Grid>
    </React.Fragment>
  );
};
