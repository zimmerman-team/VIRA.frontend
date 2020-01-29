import sumBy from 'lodash/sumBy';

export function validateOutcomeFields(
  title: string,
  country: string,
  tarBenTotal: number,
  beneficiaryCounts: any
) {
  if (title === '') {
    return false;
  }
  if (country === '') {
    return false;
  }
  if (tarBenTotal === 0 || tarBenTotal !== sumBy(beneficiaryCounts, 'value')) {
    return false;
  }
  return true;
}
