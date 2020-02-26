// @ts-nocheck
// cc:application base#;application providers
import React, { ReactNode } from 'react';

import theme from 'app/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { StoreProvider } from 'easy-peasy';
import { BrowserRouter as Router } from 'react-router-dom';
import { ClientContextProvider } from 'react-fetching-library';
import { PersistGate } from 'redux-persist/integration/react';
import { appStore, persistor } from 'app/state/store';
import { Client } from 'app/state/api/Client';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../index.css';

type ProviderProps = {
  children?: ReactNode;
};

function Providers(props: ProviderProps) {
  return (
    /* material ui theme provider */
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* redux store provider */}
      <StoreProvider store={appStore}>
        {/* TODO: check why persistor throws error with encryptor */}

        <PersistGate loading={null} persistor={persistor}>
          <ClientContextProvider client={Client}>
            {/* react router */}
            <Router>{props.children}</Router>
          </ClientContextProvider>
        </PersistGate>
      </StoreProvider>
    </ThemeProvider>
  );
}

export default Providers;
