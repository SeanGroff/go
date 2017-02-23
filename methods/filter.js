const forEach = require('./forEach');

module.exports = function filter(predicate, list) {
  const newArray = [];
  forEach((item) => {
    if (predicate(item)) {
      newArray.push(item);
    }
  }, list);
  return newArray;
};
