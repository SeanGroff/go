module.exports = function zipWith(combinerFunction, arrLeft, arrRight) {
  const combined = [];
  for (let i = 0, arrLen = Math.min(arrLeft.length, arrRight.length); i < arrLen; i += 1) {
    combined.push(combinerFunction(arrLeft[i], arrRight[i]));
  }
  return combined;
};
