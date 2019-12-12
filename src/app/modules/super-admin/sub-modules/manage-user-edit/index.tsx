import React from 'react';
import Grid from '@material-ui/core/Grid';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { SingleMultiLineTextField } from 'app/components/inputs/textfields/SingleMultiLineTextField';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { Box } from '@material-ui/core';
import { ManageUserEditModel } from 'app/modules/super-admin/sub-modules/manage-user-edit/model';
import 'styled-components/macro';
import { RadioButtonsGroup } from 'app/components/inputs/radiobuttons/RadioButtonGroup';

// TODO: So would be nice to combine this module and "manage-account" in one.
export const ManageUserEdit = (props: ManageUserEditModel) => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* breadcrumbs */}
    <Grid item lg={12}>
      <BreadCrumbs
        currentLocation={props.breadcrumbs.currentLocation}
        previousLocations={props.breadcrumbs.previousLocations}
      />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* form */}
    <Grid item container xs={12} lg={12} direction={'column'}>
      <Box width="100%" height="30px" />
      <SingleMultiLineTextField
        id={'First Name'}
        label={'First Name'}
        bigLabel
      />
      <Box width="100%" height="32px" />

      <SingleMultiLineTextField id={'Last Name'} label={'Last Name'} bigLabel />
      <Box width="100%" height="32px" />

      <SingleMultiLineTextField id={'Email'} label={'Email'} bigLabel />
      <Box width="100%" height="32px" />

      <RadioButtonsGroup {...props.form.radioButtonGroup} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* button */}
    <Grid item container xs={12} lg={12} justify={'flex-end'}>
      <ContainedButton
        text="Save"
        onClick={() => console.log(props)}
        css={{ position: 'absolute', bottom: 32 }}
        disabled={
          props.form.firstName === '' ||
          props.form.lastName === '' ||
          props.form.email === ''
        }
      />
    </Grid>
  </React.Fragment>
);
