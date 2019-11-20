// cc:application base#;application index

import React from 'react';
import Providers from 'app/Providers';
import { MainRoutes } from 'app/Routes';
import { PositionedSnackbar } from 'app/components/datadisplay/snackbar';

export function App() {
  return (
    <Providers>
      <MainRoutes />
      <PositionedSnackbar />
    </Providers>
  );
}
