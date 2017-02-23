const Go = require('../go');

describe('zipWith', () => {
  it('calls the projection function on each equally positioned pair in the arrays', () => {
    const arrLeft = [{ a: 'apple' }, { b: 'banana' }, { c: 'carrot' }, { d: 'dill' }];
    const arrRight = [{ one: 1 }, { two: 2 }, { three: 3 }];
    const projectionFunction = jest.fn();

    Go.zipWith(projectionFunction, arrLeft, arrRight);

    expect(projectionFunction).toHaveBeenCalledWith({ a: 'apple' }, { one: 1 });
    expect(projectionFunction).toHaveBeenCalledWith({ b: 'banana' }, { two: 2 });
    expect(projectionFunction).toHaveBeenCalledWith({ c: 'carrot' }, { three: 3 });
    expect(projectionFunction).toHaveBeenCalledTimes(3);
  });

  it('returns the projected array where the length is equal to the shorter of the two input arrays', () => {
    const arrLeft = [{ a: 'apple' }, { b: 'banana' }, { c: 'carrot' }, { d: 'dill' }];
    const arrRight = [{ one: 1 }, { two: 2 }, { three: 3 }];
    const projectionFunction = jest.fn();

    const projectedArray = Go.zipWith(projectionFunction, arrLeft, arrRight);

    expect(projectedArray).toHaveLength(3);
  });

  it('does not mutate the original arrays', () => {
    const arrLeft = [{ a: 'apple' }, { b: 'banana' }, { c: 'carrot' }, { d: 'dill' }];
    const arrRight = [{ one: 1 }, { two: 2 }, { three: 3 }];
    const projectionFunction = jest.fn();

    Go.zipWith(projectionFunction, arrLeft, arrRight);

    expect(arrLeft[0]).toEqual({ a: 'apple' });
    expect(arrLeft[1]).toEqual({ b: 'banana' });
    expect(arrLeft[2]).toEqual({ c: 'carrot' });
    expect(arrLeft[3]).toEqual({ d: 'dill' });
    expect(arrRight[0]).toEqual({ one: 1 });
    expect(arrRight[1]).toEqual({ two: 2 });
    expect(arrRight[2]).toEqual({ three: 3 });
  });

  it('returns a projected array with the expected values', () => {
    const arrLeft = [{ food: 'apple' }, { food: 'banana' }, { food: 'carrot' }, { food: 'dill' }];
    const arrRight = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const projectionFunction = jest.fn((leftListItem, rightListItem) => ({
      id: rightListItem.id,
      gardenFood: leftListItem.food,
    }));

    const projectedArray = Go.zipWith(projectionFunction, arrLeft, arrRight);

    expect(projectedArray).toBeInstanceOf(Array);
    expect(projectedArray).toHaveLength(3);
    expect(projectedArray[0]).toEqual({ id: 1, gardenFood: 'apple' });
    expect(projectedArray[1]).toEqual({ id: 2, gardenFood: 'banana' });
    expect(projectedArray[2]).toEqual({ id: 3, gardenFood: 'carrot' });
  });
});
