import { Action, Thunk } from 'easy-peasy';

export interface UserModel {
  email: string;
  name: string;
  role: string;
  _id: string;
}

export interface UserResponse {
  data: {
    token: string;
    user: UserModel;
  };
  status: number;
}

export interface ErrorResponse {
  data: {
    error: string;
  };
  status: number;
}

export interface SyncVariablesModel {
  snackbar: string;
  setSnackbar: Action<SyncVariablesModel, string>;
  user: UserModel | null;
  setUser: Action<SyncVariablesModel, UserModel>;
}

export interface ResponseData<T> {
  data: T;
}

export interface Errors {
  status: number | null;
  statusText: string | null;
  result: object | null;
}

export interface RequestValues<T> {
  socketName: string;
  values?: T;
}

export interface ApiModel<QueryModel, ResponseModel> {
  loading: boolean;
  success: boolean;
  data: ResponseData<ResponseModel> | null | ResponseData<ResponseModel>[];
  errorData: Errors | null;
  onError: Action<ApiModel<QueryModel, ResponseModel>, Errors>;
  setSuccess: Action<ApiModel<QueryModel, ResponseModel>>;
  onSuccess: Action<
    ApiModel<QueryModel, ResponseModel>,
    ResponseData<ResponseModel> | ResponseData<ResponseModel>[]
  >;
  onRequest: Action<ApiModel<QueryModel, ResponseModel>>;
  fetch: Thunk<ApiModel<QueryModel, ResponseModel>, RequestValues<QueryModel>>;
}

export interface SocketAPIResonseInterface extends ApiModel<any, any> {}
