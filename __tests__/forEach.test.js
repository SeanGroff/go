const Go = require('../go');

describe('forEach', () => {
  it('executes the callback function on each item in the array', () => {
    const arrOfItems = [1, 2, 3, 4, 5];
    const callbackFunction = jest.fn();

    Go.forEach(callbackFunction, arrOfItems);

    expect(callbackFunction).toHaveBeenCalledTimes(5);
    expect(callbackFunction).toHaveBeenLastCalledWith(5);
  });

  it('returns undefined', () => {
    const arrOfItems = [1, 2, 3, 4, 5];
    const callbackFunction = jest.fn();

    const newArrOfItems = Go.forEach(callbackFunction, arrOfItems);
    expect(newArrOfItems).toBeUndefined();
  });
});
