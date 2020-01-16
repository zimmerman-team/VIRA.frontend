import { socketAPIModel } from 'app/state/api/actionsReducers';

const allTeams: any = {
  ...socketAPIModel(),
};

export default allTeams;
