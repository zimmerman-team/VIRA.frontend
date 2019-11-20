import { action } from 'easy-peasy';
import { SyncVariablesModel, UserModel } from 'app/state/api/interfaces';

export const syncVariables: SyncVariablesModel = {
  snackbar: '',
  setSnackbar: action((state, payload: string) => {
    state.snackbar = payload;
  }),
  user: null,
  setUser: action((state, payload: UserModel) => {
    state.user = payload;
  }),
};
