export function validateOutcomeFields(
  title: string,
  country: string,
  budget: number,
  remainBudget: number,
  insContribution: number
) {
  if (title === '') {
    return false;
  }
  if (country === '') {
    return false;
  }
  if (budget === 0) {
    return false;
  }
  // if (budget > remainBudget) {
  //   return false;
  // }
  if (insContribution === 0) {
    return false;
  }
  return true;
}
