import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';

export type ManageAccountModel = {
  title: string;
  breadcrumbs: BreadcrumbModel;
  form: {
    firstName?: string;
    lastName?: string;
    email?: string;
  };
};
