import { Box, Grid } from '@material-ui/core';
import React from 'react';

import TableModule from 'app/components/datadisplay/Table';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { ManageUserLayoutModel } from 'app/modules/super-admin/sub-modules/manage-user/models';

import 'styled-components/macro';

export const ManageUserLayout = (props: ManageUserLayoutModel) => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* Breadcrumbs */}
    <Grid item lg={12}>
      <BreadCrumbs {...props.breadcrumbs} />
    </Grid>

    <Box width="100%" height="30px" />

    {/* ---------------------------------------------------------------------*/}
    {/* table */}
    <Grid item lg={12} xs={12}>
      <TableModule {...props.table} />
    </Grid>
  </React.Fragment>
);
