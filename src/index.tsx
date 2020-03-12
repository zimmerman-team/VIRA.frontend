import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'app';

import setupLogRocketReact from 'logrocket-react';

// this import looks unused; it isn't so please do not remove
// eslint-disable-next-line @typescript-eslint/no-unused-vars,import/no-unresolved
import * as _ from 'styled-components/cssprop';

import Providers from 'app/Providers';
import * as LogRocket from 'logrocket';
import * as serviceWorker from './serviceWorker';

LogRocket.init('zimmerman-zimmerman/insinger-me-tool');
LogRocket.identify('jim@zimmermanzimmerman.nl', {
  // name: `${process.env.LOGROCKET_USER}`,
  // name: 'Jim Fung',
  // email: 'jim@zimmermanzimmerman.nl',

  // Add your own custom user variables here, ie:
  subscriptionType: 'pro',
});

setupLogRocketReact(LogRocket);

ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
