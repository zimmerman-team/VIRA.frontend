import sumBy from 'lodash/sumBy';
import { LabelValueModel, LabelWeightModel } from '../model';

export function validatePolicyPrioritiesFields(
  tarBenTotal: number,
  beneficiaryCounts: any,
  policyPriorities: LabelWeightModel[],
  sdgs: LabelWeightModel[],
  funders: LabelValueModel[]
) {
  if (
    policyPriorities.length === 0 ||
    sumBy(policyPriorities, 'weight') < 100
  ) {
    return false;
  }
  if (sdgs.length === 0 || sumBy(sdgs, 'weight') < 100) {
    return false;
  }
  if (tarBenTotal === 0) {
    return false;
  }
  return funders.length > 0;
}
