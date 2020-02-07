import { socketAPIModel } from 'app/state/api/actionsReducers';

const getSDGVizData: any = {
  ...socketAPIModel(),
};

export default getSDGVizData;
