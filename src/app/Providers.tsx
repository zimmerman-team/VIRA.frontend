// cc:application base#;application providers
import React, { ReactNode } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'app/theme';
import { BrowserRouter as Router } from 'react-router-dom';

type ProviderProps = {
  children?: ReactNode;
};

function Providers(props: ProviderProps) {
  return (
    /* material ui theme provider */
    <ThemeProvider theme={theme}>
      {/* react router */}
      <Router>{props.children}</Router>
    </ThemeProvider>
  );
}

export default Providers;
