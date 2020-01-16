/* todo: make this module more descriptive */

import React, { useState, useEffect } from 'react';
/* third-party */
import { withRouter } from 'react-router-dom';
import useTitle from 'react-use/lib/useTitle';
/* project */
import { useStoreActions, useStoreState } from 'app/state/store/hooks';

function LoginCallback(props: any) {
  useTitle(`Project - Login`);
  const [error, setError] = useState('');
  const storeUser = useStoreState(state => state.syncVariables.user);
  const setUserAction = useStoreActions(
    actions => actions.syncVariables.setUser
  );
  const userDetailsAction = useStoreActions(
    actions => actions.userDetails.fetch
  );
  useEffect(() => {
    props.auth
      .handleAuthentication()
      .then((results: any) => {
        setUserAction({
          email: results.idTokenPayload.email,
          name: results.idTokenPayload.name,
          role: '',
          _id: results.idTokenPayload.sub,
        });
        userDetailsAction({
          socketName: 'getUser',
          values: { user: results.idTokenPayload.sub },
        });
      })
      .catch((err: any) => setError(err.description));
  }, []);
  useEffect(() => {
    props.history.replace('/');
  }, [storeUser]);

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      {error.length > 0 ? error : 'Loading profile...'}
    </div>
  );
}

export default withRouter(LoginCallback);
