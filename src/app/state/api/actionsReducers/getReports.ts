import { socketAPIModel } from 'app/state/api/actionsReducers';

const getReports: any = {
  ...socketAPIModel(),
};

export default getReports;
