import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import { RadioButtonsGroupModel } from 'app/components/inputs/radiobuttons/RadioButtonGroup';

export type ManageUserEditModel = {
  breadcrumbs: BreadcrumbModel;
  form: {
    firstName?: string;
    lastName?: string;
    email?: string;
    radioButtonGroup: RadioButtonsGroupModel;
  };
};
