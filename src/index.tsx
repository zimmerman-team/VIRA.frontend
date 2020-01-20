//globalWithNamed:
import React from 'react';
import ReactDOM from 'react-dom';
// this import looks unused; it isn't so please do not remove
// eslint-disable-next-line @typescript-eslint/no-unused-vars,import/no-unresolved
import * as _ from 'styled-components/cssprop';

//absoluteWithNamed
import { App } from 'app';
import Providers from 'app/Providers';

//relativeWithNamed
import * as serviceWorker from './serviceWorker';

//relativeDirect
import './index.css';

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
