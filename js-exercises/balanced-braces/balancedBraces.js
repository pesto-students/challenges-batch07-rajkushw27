function balancedBraces(str) {
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

  for (const char of str) {
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
