function sumFibs(num) {
  if (num.isNaN) throw new Error('Invalid Number');

  if (num <= 0) return 0;

  if (num === 1) return 2;

  const fibonacchiNumbers = [1, 1];

  let nextFibonacchiNumber = fibonacchiNumbers[fibonacchiNumbers.length - 1]
                            + fibonacchiNumbers[fibonacchiNumbers.length - 2];

  while (nextFibonacchiNumber <= num) {
    fibonacchiNumbers.push(nextFibonacchiNumber);
    nextFibonacchiNumber = fibonacchiNumbers[fibonacchiNumbers.length - 1]
                           + fibonacchiNumbers[fibonacchiNumbers.length - 2];
  }

  const oddFibonacchiNumber = fibonacchiNumbers
    .filter((fibonacchiNumber => fibonacchiNumber % 2 !== 0));

  const result = oddFibonacchiNumber
    .reduce((currentSum, fibonacchiNumber) => fibonacchiNumber + currentSum, 0);

  return result;
}

function cacheFunction(fn) {
  const cache = new Map();

  return (...args) => {
    const key = JSON.stringify(args);

    if (cache.has(key)) return cache.get(key);

    const result = fn(...args);
    cache.set(key, result);

    return result;
  };
}

export { sumFibs, cacheFunction };
