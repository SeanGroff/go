module.exports = compose = (...fns) => fns.reduceRight((prevFn, currFn) => (...args) => currFn(prevFn(...args)));
