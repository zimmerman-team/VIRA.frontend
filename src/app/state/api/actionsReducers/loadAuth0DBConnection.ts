import { socketAPIModel } from 'app/state/api/actionsReducers';

const loadAuth0DBConnection: any = {
  ...socketAPIModel(),
};

export default loadAuth0DBConnection;
