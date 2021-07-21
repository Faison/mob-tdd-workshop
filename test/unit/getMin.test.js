import getMin from '../../src/getMin.js';

describe('getMin', () => {
  it('Should return the minimum value from an array', async () => {
    const input = [4, 2, 10, 3, -1];
    const expectedOutput = -1;

    expect(getMin(input)).toEqual(expectedOutput);
  });

  it('Should return the minimum value from an array with different numbers', async () => {
    const input = [4, 200, 10, 33, 42];
    const expectedOutput = 4;

    expect(getMin(input)).toEqual(expectedOutput);
  });
});
