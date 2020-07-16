export function validateIndVerFields(str1: string, str2: string) {
  if (str1 === '') {
    return false;
  }
  return str2 !== '';
}
