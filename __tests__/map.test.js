const Go = require('../go');

describe('map', () => {
  it('calls the projection function on each item in the array', () => {
    const arrItems = [1, 2, 3, 4, 5];
    const projectionFunc = jest.fn();

    Go.map(projectionFunc, arrItems);

    expect(projectionFunc).toHaveBeenCalledWith(1);
    expect(projectionFunc).toHaveBeenCalledWith(2);
    expect(projectionFunc).toHaveBeenCalledWith(3);
    expect(projectionFunc).toHaveBeenCalledWith(4);
    expect(projectionFunc).toHaveBeenCalledWith(5);
    expect(projectionFunc).toHaveBeenCalledTimes(5);
  });

  it('does not mutate the original array', () => {
    const arrItems = [1, 2, 3, 4, 5];
    const projectionFunc = jest.fn();

    Go.map(projectionFunc, arrItems);

    expect(arrItems[0]).toBe(1);
    expect(arrItems[1]).toBe(2);
    expect(arrItems[2]).toBe(3);
    expect(arrItems[3]).toBe(4);
    expect(arrItems[4]).toBe(5);
  });

  it('returns the projected array', () => {
    const arrItems = [1, 2, 3, 4, 5];
    const projectionFunc = jest.fn(item => item * 2);

    const projectedArray = Go.map(projectionFunc, arrItems);

    expect(projectedArray).not.toBe(arrItems);
    expect(projectedArray[0]).toBe(2);
    expect(projectedArray[1]).toBe(4);
    expect(projectedArray[2]).toBe(6);
    expect(projectedArray[3]).toBe(8);
    expect(projectedArray[4]).toBe(10);
  });
});
