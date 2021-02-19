const sumEvenArgs = (...args) => args.filter((value) => value % 2 === 0)
  .reduce((acc, value) => acc + value, 0);

export { sumEvenArgs };
