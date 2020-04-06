import { socketAPIModel } from 'app/state/api/actionsReducers';

const projectBudgetData: any = {
  ...socketAPIModel(),
};

export default projectBudgetData;
