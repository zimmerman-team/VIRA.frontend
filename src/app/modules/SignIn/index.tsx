// @ts-nocheck
import React from 'react';
import { withRouter } from 'react-router-dom';
import { SignInLayout } from 'app/modules/SignIn/layout';
// import { useStoreActions, useStoreState } from 'app/state/store/hooks';

function SignInComp(props) {
  /*const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPass, setShowPass] = React.useState(false);

  const loginAction = useStoreActions(actions => actions.spaceCloud.login);
  const clearLoginErrorAction = useStoreActions(
    actions => actions.spaceCloud.setError
  );*/

  // const login = () => loginAction({ email, password, history: props.history });

  /*const user = useStoreState(state => state.spaceCloud.user);

  const storeLoginErr = useStoreState(state => state.spaceCloud.error);

  const snackbarAction = useStoreActions(
    state => state.syncVariables.setSnackbar
  );*/

  /* React.useEffect(() => {
    snackbarAction(storeLoginErr ? (storeLoginErr as string) : '');
    setTimeout(() => {
      clearLoginErrorAction({ data: { error: '' }, status: 0 });
    }, 3000);
  }, [storeLoginErr]);*/

  return <SignInLayout />;
}

export const SignIn = withRouter(SignInComp);
