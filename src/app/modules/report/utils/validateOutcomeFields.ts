export function validateOutcomeFields(title: string, country: string) {
  if (title === '') {
    return false;
  }
  /* todo: can this be simplified? */
  if (country === '') {
    return false;
  }
  return true;
}
