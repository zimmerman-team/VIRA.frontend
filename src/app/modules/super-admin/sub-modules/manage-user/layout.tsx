import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { ManageUserLayoutModel } from 'app/modules/super-admin/sub-modules/manage-user/models';
import 'styled-components/macro';
import TableModule from 'app/components/datadisplay/Table';

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
