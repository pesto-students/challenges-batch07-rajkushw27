function debounce(callback, wait) {
  let stopWatch = null;
  return (...args) => {
    if (stopWatch) {
      clearTimeout(stopWatch);
    }
    stopWatch = setTimeout(() => {
      callback.apply(this, args);
      stopWatch = null;
    }, wait);
  };
}

export { debounce };
