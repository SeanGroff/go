const forEach = require('./forEach');

module.exports = function map(projectionFunction, list) {
  const newArray = [];
  forEach(item => newArray.push(projectionFunction(item)), list);
  return newArray;
};
