import 'styled-components/macro';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { TabNavigation } from 'app/modules/projects/common/components/TabNavigation';

export const ProjectsModule = () => {
  return (
    <React.Fragment>
      {/* ------------------------------------------------------------------ */}
      {/* projects table navigation */}

      {/* using this element as an helper */}
      <Grid item lg={6} />
      <Grid item lg={6}>
        <TabNavigation />
      </Grid>
      {/* ------------------------------------------------------------------ */}
      {/* projects table */}
      <Grid item lg={12}>
        empty
      </Grid>
    </React.Fragment>
  );
};
