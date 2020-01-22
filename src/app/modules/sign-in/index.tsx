/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useStoreActions } from 'app/state/store/hooks';
import { SignInLayout } from 'app/modules/sign-in/layout';

function SignIn(props: any) {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPass, setShowPass] = React.useState(false);
  const snackbarAction = useStoreActions(
    actions => actions.syncVariables.setSnackbar
  );

  useEffect(() => {
    snackbarAction(error);
  }, [error, snackbarAction]);

  const signInAction = () => {
    if (email.length > 0 && password.length > 0) {
      props.auth.signIn(email, password, setError);
    }
  };

  return (
    <SignInLayout
      email={email}
      password={password}
      showPass={showPass}
      setEmail={setEmail}
      setPassword={setPassword}
      setShowPass={setShowPass}
      signInAction={signInAction}
    />
  );
}

export default withRouter(SignIn);
