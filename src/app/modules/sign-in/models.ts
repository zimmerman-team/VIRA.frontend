// import { User } from 'app/state/api/interfaces/userInterface';

export type LayoutModel = {
  email: string;
  password: string;
  showPass: boolean;
  setEmail: Function;
  setPassword: Function;
  setShowPass: Function;
  signInAction: Function;
  // user?: User | null;
};
