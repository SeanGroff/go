const compose = require('./methods/compose');
const concatAll = require('./methods/concatAll');
const filter = require('./methods/filter');
const forEach = require('./methods/forEach');
const isObject = require('./internal/isObject');
const map = require('./methods/map');
const reduce = require('./methods/reduce');
const zipWith = require('./methods/zipWith');

(function go() {
  const Go = {
    compose,
    concatAll,
    filter,
    forEach,
    map,
    reduce,
    zipWith,
  };

  if (isObject(exports)) {
    module.exports = Go;
  } else {
    this.Go = Go;
  }
}());
