/* base */
import { createStore } from 'easy-peasy';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

/* interfaces */
import { SyncVariablesModel } from 'app/state/api/interfaces';

/* action reducers */
import { syncVariables } from 'app/state/api/actionsReducers';

const persistSessionConfig = {
  key: 'session',
  storage: storageSession,
  blacklist: ['snackbar'],
};

export interface ApplicationStoreModel {
  syncVariables: SyncVariablesModel;
}

const applicationStore: ApplicationStoreModel = {
  syncVariables,
};

export const appStore = createStore(applicationStore, {
  reducerEnhancer: reducer => {
    return persistReducer(persistSessionConfig, reducer);
  },
});

export const persistor = persistStore(appStore);
