import { socketAPIModel } from 'app/state/api/actionsReducers';

const allUsers: any = {
  ...socketAPIModel(),
};

export default allUsers;
