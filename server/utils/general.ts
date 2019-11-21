export function genericError(error: any, res: any) {
  console.log('error', error);
  return res(JSON.stringify(error));
}
