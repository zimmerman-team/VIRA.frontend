import { socketAPIModel } from 'app/state/api/actionsReducers';

const getUserGroups: any = {
  ...socketAPIModel(),
};

export default getUserGroups;
