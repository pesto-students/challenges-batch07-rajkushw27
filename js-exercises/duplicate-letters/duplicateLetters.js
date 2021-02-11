function duplicateLetters(...args) {
  const str = args[0];

  const seen = new Map();

  const Intialcount = 1;
  let max = 1;

  for (const char of str) {
    if (seen.has(char)) {
      seen.set(char, seen.get(char) + 1);
    } else seen.set(char, Intialcount);
  }

  for (const value of seen.values()) {
    if (max < value) {
      max = value;
    }
  }
  if (max === 1) return false;
  return max;
}

export { duplicateLetters };
