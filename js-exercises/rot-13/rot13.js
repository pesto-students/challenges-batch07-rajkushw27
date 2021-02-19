function rot13(str) {
  return str.replace(/[A-Z]/g, (s) => String.fromCharCode(s.charCodeAt() + (s.toUpperCase() < 'N' ? 13 : -13)));
}

export {
  rot13,
};
