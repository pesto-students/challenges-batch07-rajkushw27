function allSettled(promises) {
  return new Promise((resolve) => {
    if (promises === undefined) return undefined;
    const result = [];
    promises.forEach((value, index) => {
      Promise.resolve(value)
        .then((res) => {
          result[index] = { status: 'fulfilled', value: res };
          if (index === promises.length - 1) resolve(result);
        })
        .catch((error) => {
          result[index] = { status: 'rejected', reason: error };
          if (index === promises.length - 1) {
            resolve(result);
          }
        });
    });
    return null;
  });
}
export { allSettled };
