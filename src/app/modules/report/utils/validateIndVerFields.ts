export function validateIndVerFields(str1: string, str2: string) {
  if (str1 === '') {
    return false;
  }
  /* todo: can this be simplified? */
  if (str2 === '') {
    return false;
  }
  return true;
}
