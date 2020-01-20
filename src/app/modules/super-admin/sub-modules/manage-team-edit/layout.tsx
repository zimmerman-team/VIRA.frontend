import { Box, Grid } from '@material-ui/core';
import React from 'react';

import TableModule from 'app/components/datadisplay/Table';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { SingleMultiLineTextField } from 'app/components/inputs/textfields/SingleMultiLineTextField';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { PageLoader } from 'app/modules/common/page-loader';
import { ManageTeamEditLayoutModel } from 'app/modules/super-admin/sub-modules/manage-team-edit/models';

import 'styled-components/macro';

export const ManageTeamEditLayout = (props: ManageTeamEditLayoutModel) => (
  <>
    {/* ---------------------------------------------------------------------*/}
    {/* Loader */}
    {props.loading && <PageLoader />}
    {/* ---------------------------------------------------------------------*/}
    {/* Breadcrumbs */}
    <Grid item lg={12}>
      <BreadCrumbs {...props.breadcrumbs} />
    </Grid>

    <Box width="100%" height="30px" />

    {/* ---------------------------------------------------------------------*/}
    {/* form */}
    <Grid item container xs={12} lg={12} direction={'column'}>
      <SingleMultiLineTextField
        bigLabel
        id={'Edit Title'}
        value={props.title}
        label={'Edit Title'}
        setValue={props.setTitle}
      />
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
        onClick={props.submit}
        disabled={!props.submitEnabled}
        css={{ position: 'absolute', bottom: 32 }}
      />
    </Grid>
  </>
);
