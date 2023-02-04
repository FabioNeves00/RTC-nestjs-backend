export function validateUserCode(code: string) {
  const regex = /^[a-zA-Z]{2}-[0-9]{5}$/;
  return regex.test(code);
}
