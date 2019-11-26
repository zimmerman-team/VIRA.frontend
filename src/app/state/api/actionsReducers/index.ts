/* eslint-disable no-param-reassign */
import { action, thunk } from 'easy-peasy';
import {
  SyncVariablesModel,
  UserModel,
  ApiModel,
  Errors,
  RequestValues,
  ResponseData,
} from 'app/state/api/interfaces';
import openSocket from 'socket.io-client';

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

export const socketAPIModel = <QueryModel, ResponseModel>(): ApiModel<
  QueryModel,
  ResponseModel
> => ({
  loading: false,
  success: false,
  data: null,
  errorData: null,
  onError: action((state, payload: Errors) => {
    state.loading = false;
    state.errorData = payload;
  }),
  onSuccess: action((state, payload: ResponseData<ResponseModel>) => {
    state.loading = false;
    state.success = true;
    state.data = payload;
  }),
  setSuccess: action(state => {
    state.loading = false;
    state.success = true;
  }),
  onRequest: action(state => {
    state.loading = true;
    state.success = false;
  }),
  fetch: thunk(async (actions, query: RequestValues<QueryModel>) => {
    actions.onRequest();
    const socket = openSocket(process.env.REACT_APP_BACKEND_URL as string);
    socket.emit(query.socketName, query.values, (res: any) =>
      actions.onSuccess(JSON.parse(res))
    );
  }),
});
