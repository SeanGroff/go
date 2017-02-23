const forEach = require('./forEach');

/**
 * concatAll() expects each item in the array to be another array
 * flattens array one level deep
 */
module.exports = function concatAll(list) {
  const flattenedArray = [];
  forEach(subArray =>
    forEach(item =>
      flattenedArray.push(item), subArray),
    list);
  return flattenedArray;
};
