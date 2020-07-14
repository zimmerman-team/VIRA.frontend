export function validateOutcomeFields(title: string, country: string) {
  if (title === '') {
    return false;
  }
  return country !== '';
}
