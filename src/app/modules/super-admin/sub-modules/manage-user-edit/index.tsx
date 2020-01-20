// global
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import find from 'lodash/find';
import get from 'lodash/get';
import React from 'react';
import { withRouter } from 'react-router-dom';

// aboslute
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { RadioButtonsGroup } from 'app/components/inputs/radiobuttons/RadioButtonGroup';
import { Select } from 'app/components/inputs/select';
import { SingleMultiLineTextField } from 'app/components/inputs/textfields/SingleMultiLineTextField';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { PageLoader } from 'app/modules/common/page-loader';
import { ManageUserEditModel } from 'app/modules/super-admin/sub-modules/manage-user-edit/model';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';

// direct
import 'styled-components/macro';

// TODO: So would be nice to combine this module and "manage-account" in one.
function ManageUserEditF(props: ManageUserEditModel) {
  // redux state & actions
  const addUserData = useStoreState(state => state.addUser.data);
  const addUserAction = useStoreActions(actions => actions.addUser.fetch);
  const loadUserData = useStoreState(state => state.loadUser.data);
  const loadUserAction = useStoreActions(actions => actions.loadUser.fetch);
  const loadUserClearAction = useStoreActions(
    actions => actions.loadUser.clear
  );
  const snackbarAction = useStoreActions(
    actions => actions.syncVariables.setSnackbar
  );
  const editUserData = useStoreState(state => state.editUser.data);
  const editUserAction = useStoreActions(actions => actions.editUser.fetch);
  const editUserClearAction = useStoreActions(
    actions => actions.editUser.clear
  );
  const storeUser = useStoreState(state => state.syncVariables.user);
  const allUsersAction = useStoreActions(actions => actions.allUsers.fetch);
  const roles = useStoreState(state => state.getUserRoles.data);
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
    }
    if (props.mode === 'edit') {
      const prevRoleId = get(
        find(roles, r => get(r, 'label', '') === get(loadUserData, 'role', '')),
        'value',
        ''
      );
      const roleId = get(
        find(roles, r => get(r, 'label', '') === role),
        'value',
        ''
      );
      editUserAction({
        socketName: 'editUser',
        values: {
          userId: get(props.match.params, 'id', ''),
          email,
          name: firstName,
          surname: lastName,
          prevRoleId,
          roleId,
          role,
        },
      });
    }
  }

  React.useEffect(() => {
    if (props.mode === 'edit') {
      loadUserAction({
        socketName: 'getUser',
        values: {
          user: get(props.match.params, 'id', ''),
        },
      });
    }

    return () => {
      editUserClearAction();
      loadUserClearAction();
    };
  }, []);

  React.useEffect(() => {
    if (editUserData) {
      if (get(editUserData, 'message', '') === 'success') {
        snackbarAction('User edited successfully');
        loadUserAction({
          socketName: 'getUser',
          values: {
            user: get(props.match.params, 'id', ''),
          },
        });
        allUsersAction({
          socketName: 'getAllUsers',
          values: { user: storeUser },
        });
        setTimeout(() => {
          snackbarAction('');
          editUserClearAction();
        }, 5000);
      }
    }
  }, [editUserData]);

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

  React.useEffect(() => {
    if (loadUserData && props.mode === 'edit') {
      setFirstName(get(loadUserData, 'firstName', ''));
      setLastName(get(loadUserData, 'lastName', ''));
      setEmail(get(loadUserData, 'email', ''));
      setRole(get(loadUserData, 'role', ''));
    }
  }, [loadUserData]);

  function isSubmitDisabled() {
    if (props.mode === 'add') {
      return (
        firstName === '' || lastName === '' || email === '' || group === ''
      );
    }
    if (props.mode === 'edit') {
      return (
        firstName === '' ||
        lastName === '' ||
        email === '' ||
        (firstName === get(loadUserData, 'firstName', '') &&
          lastName === get(loadUserData, 'lastName', '') &&
          email === get(loadUserData, 'email', '') &&
          role === get(loadUserData, 'role', ''))
      );
    }
    return true;
  }

  const loading = useStoreState(state => state.loadUser.loading);

  // returned components
  return (
    <React.Fragment>
      {loading && <PageLoader />}

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
          disabled={isSubmitDisabled()}
          css={{ position: 'fixed', bottom: 32 }}
          text={props.mode === 'add' ? 'Add' : 'Save'}
        />
      </Grid>
    </React.Fragment>
  );
}

export const ManageUserEdit = withRouter(ManageUserEditF);
