import React, { useEffect } from 'react';
/* third-party */
import { withRouter } from 'react-router-dom';
import useTitle from 'react-use/lib/useTitle';
/* project */
import { useStoreActions, useStoreState } from 'app/state/store/hooks';

function LoginCallback(props: any) {
  useTitle(`Project - Login`);
  const storeUser = useStoreState(state => state.syncVariables.user);
  const setUserAction = useStoreActions(
    actions => actions.syncVariables.setUser
  );

  useEffect(() => {
    props.auth.handleAuthentication().then((results: any) => {
      setUserAction({
        email: results.idTokenPayload.email,
        name: results.idTokenPayload.name,
        role: '',
        _id: results.idTokenPayload.sub,
      });
    });
  }, []);
  useEffect(() => {
    props.history.replace('/');
  }, [storeUser]);

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>Loading profile...</div>
  );
}

export default withRouter(LoginCallback);
