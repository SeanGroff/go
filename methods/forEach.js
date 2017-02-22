module.exports = function forEach(cb, list) {
  for (let i = 0, arrLen = list.length; i < arrLen; i += 1) {
    cb(list[i]);
  }
  return undefined;
};
