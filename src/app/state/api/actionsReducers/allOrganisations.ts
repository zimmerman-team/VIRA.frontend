import { socketAPIModel } from 'app/state/api/actionsReducers';

const allOrganisations: any = {
  ...socketAPIModel(),
};

export default allOrganisations;
