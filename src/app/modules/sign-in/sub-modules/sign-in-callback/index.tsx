/* eslint-disable @typescript-eslint/no-explicit-any */
/* todo: make this module more descriptive */
import React, { useState, useEffect } from 'react';
/* third-party */
import { withRouter } from 'react-router-dom';
import useTitle from 'react-use/lib/useTitle';
/* project */
import { PageLoader } from 'app/modules/common/page-loader';
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
        let name =
          results.idTokenPayload[
            `https://${process.env.REACT_APP_AUTH_CUSTOM_DOMAIN}_user_metadata`
          ];
        name = name
          ? `${name.firstName} ${name.lastName}`
          : results.idTokenPayload.name;
        setUserAction({
          email: results.idTokenPayload.email,
          name,
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
    if (storeUser) {
      const redirectTo = sessionStorage.getItem('redirectTo') || '/';
      props.history.replace(redirectTo);
    }
  }, [storeUser]);

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      {error.length > 0 ? error : <PageLoader message="Loading profile..." />}
    </div>
  );
}

export default withRouter(LoginCallback);
