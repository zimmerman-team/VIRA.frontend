/* eslint-disable max-classes-per-file */
import auth0 from 'auth0-js';

class AuthProps {
  auth0: any;
  idToken: any;
  profile: any;
  expiresAt: any;
}

class Auth extends AuthProps {
  constructor() {
    super();
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH_CUSTOM_DOMAIN as string,
      audience: `${process.env.REACT_APP_AUTH_DOMAIN}/userinfo`,
      clientID: process.env.REACT_APP_CLIENT_ID as string,
      redirectUri: `${process.env.REACT_APP_PROJECT_URL}/callback`,
      responseType: 'token id_token',
      scope:
        'openid profile email user_metadata read:current_user update:current_user_metadata read:users_app_metadata update:users_app_metadata read:groups update:groups',
    });
  }

  signIn = (username: string, password: string, action?: Function) => {
    this.auth0.login(
      {
        realm: 'insinger-database-connection',
        email: username,
        password,
      },
      (err: any) => action && action(err.description)
    );
  };

  handleAuthentication = () => {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err: any, authResult: any) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.setSession(authResult);
        resolve(authResult);
      });
    });
  };

  setSession = (authResult: any) => {
    this.idToken = authResult.idToken;
    this.profile = authResult.idTokenPayload;
    // set the time that the id token will expire at
    this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    localStorage.setItem('auth_access_token', authResult.accessToken);
    localStorage.setItem('auth_id_token', authResult.idToken);
    localStorage.setItem('auth_expires_at', this.expiresAt);
  };

  forgetPassword = (email: string, reduxAction: any) => {
    this.auth0.changePassword(
      {
        email,
        connection: 'insinger-database-connection',
      },
      (err: any) => {
        // console.log(err);
        reduxAction && reduxAction();
      }
    );
  };

  signOut = () => {
    return new Promise((resolve, reject) => {
      localStorage.removeItem('auth_access_token');
      localStorage.removeItem('auth_id_token');
      localStorage.removeItem('auth_expires_at');
      this.auth0.logout({
        returnTo: process.env.REACT_APP_PROJECT_URL,
        clientID: process.env.REACT_APP_CLIENT_ID,
      });

      resolve();
    });
  };

  silentAuth = () => {
    return new Promise((resolve, reject) => {
      this.auth0.checkSession({}, (err: any, authResult: any) => {
        // if (err) return reject(err);
        if (!err) {
          this.setSession(authResult);
          resolve(authResult);
        }
      });
    });
  };
}

const auth0Client = new Auth();

export default auth0Client;
