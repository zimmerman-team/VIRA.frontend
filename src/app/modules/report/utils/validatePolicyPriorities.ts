import sumBy from 'lodash/sumBy';

export function validatePolicyPrioritiesFields(
  tarBenTotal: number,
  beneficiaryCounts: any,
  policyPriority: string,
  budget: number,
  remainBudget: number,
  insContribution: number,
  funder: string
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
  /* todo: can this be simplified? */
  if (funder === '') {
    return false;
  }
  return true;
}
