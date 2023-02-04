export async function generateUserCustomCode(username: string, length = 5) {
  const usernameSplit = username.split('');
  const letterCode = [usernameSplit[0], usernameSplit[usernameSplit.length - 1]]
    .join('')
    .toUpperCase();
  let numberCode = Math.floor(Math.random() * (99999 + 1)).toString();

  if (numberCode.length < length) {
    numberCode = numberCode.padStart(length, '0');
  }

  return { code: `${letterCode}-${numberCode}` };
}
