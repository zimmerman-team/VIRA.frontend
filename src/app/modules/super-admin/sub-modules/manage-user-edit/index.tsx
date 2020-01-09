import React from 'react';
import get from 'lodash/get';
import find from 'lodash/find';
import 'styled-components/macro';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Select } from 'app/components/inputs/select';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { RadioButtonsGroup } from 'app/components/inputs/radiobuttons/RadioButtonGroup';
import { ManageUserEditModel } from 'app/modules/super-admin/sub-modules/manage-user-edit/model';
import { SingleMultiLineTextField } from 'app/components/inputs/textfields/SingleMultiLineTextField';

// TODO: So would be nice to combine this module and "manage-account" in one.
export function ManageUserEdit(props: ManageUserEditModel) {
  // redux state & actions
  const addUserData = useStoreState(actions => actions.addUser.data);
  const addUserAction = useStoreActions(actions => actions.addUser.fetch);
  const snackbarAction = useStoreActions(
    actions => actions.syncVariables.setSnackbar
  );
  // state
  const [firstName, setFirstName] = React.useState(
    get(props, 'form.firstName', '')
  );
  const [lastName, setLastName] = React.useState(
    get(props, 'form.lastName', '')
  );
  const [email, setEmail] = React.useState(get(props, 'form.email', ''));
  const [role, setRole] = React.useState(
    props.form.radioButtonGroup.items[0].value
  );
  const [group, setGroup] = React.useState('');

  function onSubmit() {
    if (props.mode === 'add') {
      addUserAction({
        socketName: 'addUser',
        values: {
          email,
          name: firstName,
          surname: lastName,
          groupId: group,
          roleId: role,
          groupName: find(props.form.selectOptions, { value: group }),
          roleName: find(props.form.radioButtonGroup.items, { value: role }),
        },
      });
    } else {
      console.log('edit action');
    }
  }

  React.useEffect(() => {
    if (addUserData) {
      const message = get(addUserData, 'message', '');
      snackbarAction(message);
      if (message === 'User created successfully') {
        setFirstName('');
        setLastName('');
        setEmail('');
        setGroup('');
      }
    }
  }, [addUserData]);

  // returned components
  return (
    <>
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
      <Grid item container xs={12} lg={12} direction="column">
        <Box width="100%" height="30px" />
        <SingleMultiLineTextField
          value={firstName}
          setValue={setFirstName}
          id="First Name"
          label="First Name"
          bigLabel
        />
        <Box width="100%" height="32px" />

        <SingleMultiLineTextField
          value={lastName}
          setValue={setLastName}
          id="Last Name"
          label="Last Name"
          bigLabel
        />
        <Box width="100%" height="32px" />

        <SingleMultiLineTextField
          value={email}
          setValue={setEmail}
          id="Email"
          label="Email"
          bigLabel
        />
        <Box width="100%" height="32px" />

        <Grid container>
          <Grid item xs={12} md={12} lg={6} xl={6}>
            <RadioButtonsGroup
              value={role}
              onChange={(e: any) => setRole(e.target.value)}
              {...props.form.radioButtonGroup}
            />
          </Grid>
          {props.mode === 'add' && (
            <Grid item xs={12} md={12} lg={6} xl={6}>
              <Select
                title="Select team"
                selectedItem={group}
                items={props.form.selectOptions}
                onChange={(e: any) => setGroup(e.target.value)}
              />
            </Grid>
          )}
        </Grid>
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* button */}
      <Grid item container xs={12} lg={12} justify="flex-end">
        <ContainedButton
          onClick={onSubmit}
          css={{ position: 'absolute', bottom: 32 }}
          text={props.mode === 'add' ? 'Add' : 'Save'}
          disabled={
            firstName === '' || lastName === '' || email === '' || group === ''
          }
        />
      </Grid>
    </>
  );
}
