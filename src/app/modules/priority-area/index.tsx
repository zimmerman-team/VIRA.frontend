import React from 'react';
import Grid from '@material-ui/core/Grid';
import { TabNavigation } from 'app/modules/projects/common/components/TabNavigation';

export const PriorityAreaModule = () => {
  return (
    <React.Fragment>
      <Grid item lg={6} />
      <Grid item lg={6}>
        <TabNavigation />
      </Grid>
      {/* ------------------------------------------------------------------ */}
      {/* priority area */}
      <Grid item lg={12}>
        Priority Area
      </Grid>

      {/* ------------------------------------------------------------------ */}
      {/* projects list */}
      <Grid item lg={12}>
        Projects list
      </Grid>
    </React.Fragment>
  );
};
