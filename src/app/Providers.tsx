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

type ProviderProps = {
  children?: ReactNode;
};

function Providers(props: ProviderProps) {
  return (
    /* material ui theme provider */
    <ThemeProvider theme={theme}>
      {/* redux store provider */}
      <StoreProvider store={appStore}>
        {/* TODO: check why persistor throws error with encryptor */}
        // @ts-ignore
        <PersistGate loading={null} persistor={persistor}>
          <ClientContextProvider client={Client}>
            <CssBaseline />
            {/* react router */}
            <Router>{props.children}</Router>
          </ClientContextProvider>
        </PersistGate>
      </StoreProvider>
    </ThemeProvider>
  );
}

export default Providers;
