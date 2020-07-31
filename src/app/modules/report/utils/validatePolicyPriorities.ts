import sumBy from 'lodash/sumBy';
import { LabelValueModel } from '../model';

export function validatePolicyPrioritiesFields(
  tarBenTotal: number,
  beneficiaryCounts: any,
  policyPriority: string,
  budget: number,
  remainBudget: number,
  insContribution: number,
  funders: LabelValueModel[]
) {
  if (policyPriority === '') {
    return false;
  }
  if (tarBenTotal === 0 || tarBenTotal < sumBy(beneficiaryCounts, 'value')) {
    return false;
  }
  if (budget === 0) {
    return false;
  }
  if (insContribution === 0) {
    return false;
  }
  if (budget > remainBudget) {
    return false;
  }
  return funders.length > 0;
}
