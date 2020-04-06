import { socketAPIModel } from 'app/state/api/actionsReducers';

const getUserRoles: any = {
  ...socketAPIModel(),
};

export default getUserRoles;
