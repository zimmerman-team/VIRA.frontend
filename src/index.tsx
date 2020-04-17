import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'app';
import 'app/languages';
// eslint-disable-next-line @typescript-eslint/no-unused-vars,import/no-unresolved
import * as _ from 'styled-components/cssprop';
import Providers from 'app/Providers';
import * as serviceWorker from './serviceWorker';

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
