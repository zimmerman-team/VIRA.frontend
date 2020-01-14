import { socketAPIModel } from 'app/state/api/actionsReducers';

const loadUser: any = {
  ...socketAPIModel(),
};

export default loadUser;
