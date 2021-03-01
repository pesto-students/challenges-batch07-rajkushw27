function allPromises(items) {
  return new Promise((resolve, reject) => {
    const result = [];
    let counter = 0;
    items.forEach((item) => {
      Promise.resolve(item)
        .then((res) => {
          counter += 1;
          result.push(res);
          if (counter === items.length) {
            resolve(result);
          }
        })
        .catch((error) => reject(error));
    });
  });
}

export { allPromises };
