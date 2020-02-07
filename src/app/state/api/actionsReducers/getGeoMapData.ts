import { socketAPIModel } from 'app/state/api/actionsReducers';

const getGeoMapData: any = {
  ...socketAPIModel(),
};

export default getGeoMapData;
