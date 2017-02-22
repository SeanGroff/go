const isObject = require('./internal/isObject');
const forEach = require('./methods/forEach');
const map = require('./methods/map');

(function go() {
  const Go = {
    forEach,
    map,
    // filter,
  };

  if (isObject(exports)) {
    module.exports = Go;
  } else {
    this.Go = Go;
  }
}());
