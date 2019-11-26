import { socketAPIModel } from 'app/state/api/actionsReducers';

const userDetails: any = {
  ...socketAPIModel(),
};

export default userDetails;
