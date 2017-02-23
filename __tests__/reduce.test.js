const Go = require('../go');

describe('reduce', () => {
  it('calls the interator function on every list item', () => {
    const list = [1, 2, 3, 4, 5];
    const iteratorFunction = jest.fn((accum, curr) => {
      const sum = accum + curr;
      return sum;
    });

    Go.reduce(iteratorFunction, 0, list);

    expect(iteratorFunction).toBeCalledWith(0, list[0]);
    expect(iteratorFunction).toBeCalledWith(1, list[1]);
    expect(iteratorFunction).toBeCalledWith(3, list[2]);
    expect(iteratorFunction).toBeCalledWith(6, list[3]);
    expect(iteratorFunction).toBeCalledWith(10, list[4]);
    expect(iteratorFunction).toHaveBeenCalledTimes(5);
  });

  it('does not mutate original list', () => {
    const list = [1, 2, 3, 4, 5];
    const iteratorFunction = jest.fn();

    Go.reduce(iteratorFunction, 0, list);

    expect(list[0]).toBe(1);
    expect(list[1]).toBe(2);
    expect(list[2]).toBe(3);
    expect(list[3]).toBe(4);
    expect(list[4]).toBe(5);
  });

  it('returns accumulated value', () => {
    const list = [1, 2, 3, 4, 5];
    const iteratorFunction = jest.fn((accum, curr) => {
      const sum = accum + curr;
      return sum;
    });

    const accumulatedValue = Go.reduce(iteratorFunction, 0, list);

    expect(accumulatedValue).not.toBe(list);
    expect(accumulatedValue).toBe(15);
  });
});
