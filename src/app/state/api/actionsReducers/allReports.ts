import { socketAPIModel } from 'app/state/api/actionsReducers';

const allReports: any = {
  ...socketAPIModel(),
};

export default allReports;
