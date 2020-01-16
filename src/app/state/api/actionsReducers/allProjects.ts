import { socketAPIModel } from 'app/state/api/actionsReducers';

const allProjects: any = {
  ...socketAPIModel(),
};

export default allProjects;
