module.exports = function camelToDash(str) {
  return str.replace(/([a-z])([A-Z])/g, (m, a, b) => a + '-' + b.toLowerCase());
}

