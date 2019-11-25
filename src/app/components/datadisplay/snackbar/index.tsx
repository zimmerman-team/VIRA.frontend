import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';

export function PositionedSnackbar() {
  const snackbar = useStoreState(state => state.syncVariables.snackbar);
  const snackbarAction = useStoreActions(
    state => state.syncVariables.setSnackbar
  );

  const handleClose = () => {
    snackbarAction('');
  };

  return (
    <Snackbar
      message={snackbar}
      onClose={handleClose}
      open={snackbar !== ''}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    />
  );
}
