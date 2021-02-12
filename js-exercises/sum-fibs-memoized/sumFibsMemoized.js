function sumFibs(num) {
  if (num.isNaN) throw new Error('Invalid Number');

  if (num <= 0) { return 0; }

  if (num === 1) { return 1; }

  const fibNum = [];
  let sum = 2;

  fibNum[0] = 1;
  fibNum[1] = 1;
  let i = 2;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    fibNum[i] = fibNum[i - 1] + fibNum[i - 2];
    if (fibNum[i] % 2 !== 0) {
      if (fibNum[i] <= num) { sum += fibNum[i]; } else { break; }
    }
    i += 1;
  }
  return sum;
}

function cacheFunction(cacheFun) {
  const cache = {};

  return (n) => {
    if (n in cache) {
      return cache[n];
    }
    cache[n] = cacheFun(n);
    return cache[n];
  };
}

export { sumFibs, cacheFunction };
