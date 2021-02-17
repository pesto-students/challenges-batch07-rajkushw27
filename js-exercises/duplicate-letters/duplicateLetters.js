function duplicateLetters(...args) {
  const str = args[0];

  const charMap = {};

  for (const char of str) {
    if (!charMap[char]) charMap[char] = 1;
    else charMap[char] += 1;
  }

  const CharCounts = Object.values(charMap);
  const maxCharCount = Math.max(...CharCounts);

  if (!maxCharCount || maxCharCount === 1) return false;
  return maxCharCount;
}

export { duplicateLetters };
