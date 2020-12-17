import { socketAPIModel } from 'app/state/api/actionsReducers';

const getTargetGroupBarChartData: any = {
  ...socketAPIModel(),
};

export default getTargetGroupBarChartData;
