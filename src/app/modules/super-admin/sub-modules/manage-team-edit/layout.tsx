import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { ManageTeamEditLayoutModel } from 'app/modules/super-admin/sub-modules/manage-team-edit/models';
import { SingleMultiLineTextField } from 'app/components/inputs/textfields/SingleMultiLineTextField';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import 'styled-components/macro';
import TableModule from 'app/components/datadisplay/Table';

export const ManageTeamEditLayout = (props: ManageTeamEditLayoutModel) => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* Breadcrumbs */}
    <Grid item lg={12}>
      <BreadCrumbs {...props.breadcrumbs} />
    </Grid>

    <Box width="100%" height="30px" />

    {/* ---------------------------------------------------------------------*/}
    {/* form */}
    <Grid item container xs={12} lg={12} direction={'column'}>
      {/*TODO: add bigLabel as prop when IN-124 is merged*/}
      <SingleMultiLineTextField id={'Edit Title'} label={'Edit Title'} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* table */}
    <Grid item lg={12} xs={12}>
      <TableModule {...props.table} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* button */}
    <Grid item container xs={12} lg={12} justify={'flex-end'}>
      <ContainedButton
        text="Save"
        onClick={() => console.log(props)}
        css={{ position: 'absolute', bottom: 32 }}
        disabled={props.editedTitle === ''}
      />
    </Grid>
  </React.Fragment>
);
