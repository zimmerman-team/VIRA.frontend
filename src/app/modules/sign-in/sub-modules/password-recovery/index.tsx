/* eslint-disable no-useless-escape */
/* third-party */
import React from 'react';
import get from 'lodash/get';
import useTitle from 'react-use/lib/useTitle';
import { PasswordRecoveryLayout } from 'app/modules/sign-in/sub-modules/password-recovery/layout';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';
/* project */

export function PasswordRecovery() {
  useTitle(`Password Recovery - Sign in`);
  const connectionID = useStoreState(state => state.loadAuth0DBConnection.data);

  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [submitEnabled, setSubmitEnabled] = React.useState(false);

  const storeActionData = useStoreState(state => state.forgetPassword.data);
  const storeAction = useStoreActions(actions => actions.forgetPassword.fetch);
  const storeActionClear = useStoreActions(
    actions => actions.forgetPassword.clear
  );

  React.useEffect(() => {
    setSubmitEnabled(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    );
  }, [email]);

  React.useEffect(() => {
    setEmail('');
  }, [message]);

  React.useEffect(() => {
    setMessage(get(storeActionData, 'message', ''));
    setTimeout(() => storeActionClear(), 10000);
  }, [storeActionData]);

  React.useEffect(() => {
    return () => storeActionClear();
  }, []);

  function onSubmit() {
    storeAction({
      socketName: 'sendForgetPasswordEmail',
      values: {
        email,
        connectionID,
      },
    });
  }

  return (
    <PasswordRecoveryLayout
      email={email}
      message={message}
      setEmail={setEmail}
      onSubmit={onSubmit}
      submitEnabled={submitEnabled}
    />
  );
}
