/* base */
import { createStore } from 'easy-peasy';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/* interfaces */
import {
  SyncVariablesModel,
  SocketAPIResonseInterface,
} from 'app/state/api/interfaces';

/* action reducers */
import { syncVariables } from 'app/state/api/actionsReducers';
import userDetails from 'app/state/api/actionsReducers/userDetails';

const persistSessionConfig = {
  storage,
  key: 'storage',
  blacklist: ['snackbar'],
};

export interface ApplicationStoreModel {
  syncVariables: SyncVariablesModel;
  userDetails: SocketAPIResonseInterface;
}

const applicationStore: ApplicationStoreModel = {
  syncVariables,
  userDetails,
};

export const appStore = createStore(applicationStore, {
  reducerEnhancer: reducer => {
    return persistReducer(persistSessionConfig, reducer);
  },
});

export const persistor = persistStore(appStore);
