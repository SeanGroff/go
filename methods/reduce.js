module.exports = function reduce(iteratorFunction, accumulatorInitValue, list) {
  let counter = 0;
  let accumulatedValue = accumulatorInitValue;
  const listLength = list.length;
  while (counter < listLength) {
    accumulatedValue = iteratorFunction(accumulatedValue, list[counter]);
    counter += 1;
  }
  return accumulatedValue;
};
