function bind(fn, obj) {
  return (...args) => fn.apply(obj, args);
}

module.exports = { bind };
