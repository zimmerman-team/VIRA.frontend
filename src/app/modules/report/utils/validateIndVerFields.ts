import findIndex from 'lodash/findIndex';
import { BeneficiaryCountsModel } from 'app/modules/report/model';

export function validateIndVerFields(
  str1: string,
  str2: string,
  options: BeneficiaryCountsModel[]
) {
  if (str1 === '') {
    return false;
  }
  if (str2 === '') {
    return false;
  }
  if (findIndex(options, { value: true }) === -1) {
    return false;
  }
  return true;
}
