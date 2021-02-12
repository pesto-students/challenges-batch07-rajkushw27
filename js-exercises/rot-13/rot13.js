function rot13(str) {
  const shift = 13;
  const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let cipherText = '';

  let i = 0;
  while (i < str.length) {
    if (charSet.indexOf(str[i]) !== -1) {
      const charIndex = charSet.indexOf(str[i]);
      if (charSet[charIndex + shift]) {
        cipherText += charSet[charIndex + shift];
      } else {
        cipherText += charSet[charIndex + shift - 26];
      }
    } else {
      cipherText += str[i];
    }

    i += 1;
  }
  return cipherText;
}

export {
  rot13,
};
