export function checkIfPPData(data: any): boolean {
  let result = false;

  data.forEach((item: any) => {
    if (
      item.value1 !== 0 ||
      item.value2 !== 0 ||
      item.value3 !== 0 ||
      item.value4 !== 0
    ) {
      result = true;
    }
  });

  return result;
}
