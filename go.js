const isObject = require('./internal/isObject');
const forEach = require('./methods/forEach');
const map = require('./methods/map');
const filter = require('./methods/filter');
const concatAll = require('./methods/concatAll');
const zipWith = require('./methods/zipWith');

(function go() {
  const Go = {
    forEach,
    map,
    filter,
    concatAll,
    zipWith,
  };

  if (isObject(exports)) {
    module.exports = Go;
  } else {
    this.Go = Go;
  }
}());
