const Go = require('../go');

describe('concatAll', () => {
  it('expects each item in the array to be an array', () => {
    const arrayOfArrays = [[1, 2], [3, 4], [5]];

    Go.concatAll(arrayOfArrays);

    expect(arrayOfArrays).toHaveLength(3);
    expect(arrayOfArrays[0]).toBeInstanceOf(Array);
    expect(arrayOfArrays[1]).toBeInstanceOf(Array);
    expect(arrayOfArrays[2]).toBeInstanceOf(Array);
  });

  it('does not mutate the original array', () => {
    const arrayOfArrays = [[1, 2], [3, 4], [5]];

    Go.concatAll(arrayOfArrays);

    expect(arrayOfArrays[0][0]).toBe(1);
    expect(arrayOfArrays[0][1]).toBe(2);
    expect(arrayOfArrays[1][0]).toBe(3);
    expect(arrayOfArrays[1][1]).toBe(4);
    expect(arrayOfArrays[2][0]).toBe(5);
  });

  it('returns projected array with expected values', () => {
    const arrayOfArrays = [[1, 2], [3, 4], [5]];

    const projectedArray = Go.concatAll(arrayOfArrays);

    expect(projectedArray).toBeInstanceOf(Array);
    expect(projectedArray).toHaveLength(5);
    expect(projectedArray[0]).toBe(1);
    expect(projectedArray[1]).toBe(2);
    expect(projectedArray[2]).toBe(3);
    expect(projectedArray[3]).toBe(4);
    expect(projectedArray[4]).toBe(5);
  });
});
