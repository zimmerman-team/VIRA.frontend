// @ts-nocheck
/* base */
import { createStore } from 'easy-peasy';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import createEncryptor from 'redux-persist-transform-encrypt';

/* interfaces */
import {
  SyncVariablesModel,
  SocketAPIResonseInterface,
} from 'app/state/api/interfaces';

/* action reducers */
import { syncVariables } from 'app/state/api/actionsReducers';
import userDetails from 'app/state/api/actionsReducers/userDetails';

const encryptor = createEncryptor({
  secretKey: process.env.REACT_APP_REDUX_ENCRYPT_SECRET as string,
  onError: error => {
    // Handle the error
  },
});

const persistConfig = {
  storage,
  key: 'storage',
  blacklist: ['snackbar'],
  transforms: [encryptor],
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
    // TODO: check why persistor throws error with encryptor
    return persistReducer(persistConfig, reducer);
  },
});

export const persistor = persistStore(appStore);
