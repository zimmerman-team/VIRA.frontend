import { socketAPIModel } from 'app/state/api/actionsReducers';

const getPPVizData: any = {
  ...socketAPIModel(),
};

export default getPPVizData;
