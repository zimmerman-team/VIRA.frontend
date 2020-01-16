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
import addUser from 'app/state/api/actionsReducers/addUser';
import editUser from 'app/state/api/actionsReducers/editUser';
import allUsers from 'app/state/api/actionsReducers/allUsers';
import loadUser from 'app/state/api/actionsReducers/loadUser';
import deleteUser from 'app/state/api/actionsReducers/deleteUser';
import { syncVariables } from 'app/state/api/actionsReducers';
import userDetails from 'app/state/api/actionsReducers/userDetails';
import getUserRoles from 'app/state/api/actionsReducers/getUserRoles';
import getUserGroups from 'app/state/api/actionsReducers/getUserGroups';
import allProjects from 'app/state/api/actionsReducers/allProjects';
import allOrganisations from 'app/state/api/actionsReducers/allOrganisations';
import projectDetail from 'app/state/api/actionsReducers/projectDetail';
import orgDetail from 'app/state/api/actionsReducers/orgDetail';
import forgetPassword from 'app/state/api/actionsReducers/forgetPassword';
import loadAuth0DBConnection from 'app/state/api/actionsReducers/loadAuth0DBConnection';
import allTeams from 'app/state/api/actionsReducers/allTeams';
import addTeam from 'app/state/api/actionsReducers/addTeam';

const encryptor = createEncryptor({
  secretKey: process.env.REACT_APP_REDUX_ENCRYPT_SECRET as string,
  onError: error => {
    // Handle the error
  },
});

const persistConfig = {
  storage,
  key: 'storage',
  blacklist: ['snackbar', 'addUser'],
  transforms: [encryptor],
};

export interface ApplicationStoreModel {
  syncVariables: SyncVariablesModel;
  addUser: SocketAPIResonseInterface;
  userDetails: SocketAPIResonseInterface;
  getUserRoles: SocketAPIResonseInterface;
  getUserGroups: SocketAPIResonseInterface;
  allProjects: SocketAPIResonseInterface;
  allOrganisations: SocketAPIResonseInterface;
  projectDetail: SocketAPIResonseInterface;
  orgDetail: SocketAPIResonseInterface;
  allUsers: SocketAPIResonseInterface;
  loadUser: SocketAPIResonseInterface;
  editUser: SocketAPIResonseInterface;
  deleteUser: SocketAPIResonseInterface;
  forgetPassword: SocketAPIResonseInterface;
  loadAuth0DBConnection: SocketAPIResonseInterface;
  allTeams: SocketAPIResonseInterface;
  addTeam: SocketAPIResonseInterface;
}

const applicationStore: ApplicationStoreModel = {
  syncVariables,
  getUserGroups,
  getUserRoles,
  userDetails,
  addUser,
  allProjects,
  allOrganisations,
  projectDetail,
  orgDetail,
  allUsers,
  loadUser,
  editUser,
  deleteUser,
  forgetPassword,
  loadAuth0DBConnection,
  allTeams,
  addTeam,
};

export const appStore = createStore(applicationStore, {
  reducerEnhancer: reducer => {
    // TODO: check why persistor throws error with encryptor
    return persistReducer(persistConfig, reducer);
  },
});

export const persistor = persistStore(appStore);
