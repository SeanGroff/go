const Go = require('../go');

describe('filter', () => {
  it('calls the predicate function on each item in the array', () => {
    const arrItems = [1, 2, 3, 4, 5];
    const predicateFunction = jest.fn();

    Go.filter(predicateFunction, arrItems);

    expect(predicateFunction).toHaveBeenCalledWith(1);
    expect(predicateFunction).toHaveBeenCalledWith(2);
    expect(predicateFunction).toHaveBeenCalledWith(3);
    expect(predicateFunction).toHaveBeenCalledWith(4);
    expect(predicateFunction).toHaveBeenCalledWith(5);
    expect(predicateFunction).toHaveBeenCalledTimes(5);
  });

  it('does not mutate the original array', () => {
    const arrItems = [1, 2, 3, 4, 5];
    const predicateFunction = jest.fn();

    Go.filter(predicateFunction, arrItems);

    expect(arrItems[0]).toBe(1);
    expect(arrItems[1]).toBe(2);
    expect(arrItems[2]).toBe(3);
    expect(arrItems[3]).toBe(4);
    expect(arrItems[4]).toBe(5);
  });

  it('returns projected array with expected values', () => {
    const arrItems = [1, 2, 3, 4, 5];
    const predicateFunction = jest.fn(item => item > 3);

    const projectedArray = Go.filter(predicateFunction, arrItems);
    console.log(projectedArray);

    expect(projectedArray).toHaveLength(2);
    expect(projectedArray).not.toBe(arrItems);
    expect(projectedArray[0]).toBe(4);
    expect(projectedArray[1]).toBe(5);
  });
});
