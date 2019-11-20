import { Action } from 'easy-peasy';

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
