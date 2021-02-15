function balancedBraces(...args) {
  const inputString = args[0];
  const stack = [];

  const open = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  const closed = {
    '}': true,
    ']': true,
    ')': true,
  };

  for (let i = 0; i < inputString.length; i += 1) {
    const char = inputString[i];

    if (open[char]) {
      stack.push(char);
    } else if (closed[char]) {
      if (open[stack.pop()] !== char) return false;
    }
  }
  return stack.length === 0;
}

export {
  balancedBraces,
};
