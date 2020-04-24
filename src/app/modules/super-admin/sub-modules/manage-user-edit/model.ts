import { SelectItemModel } from 'app/components/inputs/select/model';
import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import { RadioButtonsGroupModel } from 'app/components/inputs/radiobuttons/RadioButtonGroup';
import { RouteComponentProps } from 'react-router-dom';

export type ManageUserEditModel = RouteComponentProps & {
  title?: string;
  breadcrumbs?: BreadcrumbModel;
  form: {
    firstName?: string;
    lastName?: string;
    email?: string;
    radioButtonGroup: RadioButtonsGroupModel;
    selectOptions: SelectItemModel[];
  };
  mode: string;
  isManageAccount?: boolean;
  editSelf?: boolean;
};
