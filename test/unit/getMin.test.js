import getMin from '../../src/getMin.js';

describe('getMin', () => {
  it('Should find a negative number as the minimum', async () => {
    const input = [4, 2, 10, 3, -1];
    const expectedOutput = -1;

    expect(getMin(input)).toEqual(expectedOutput);
  });

  it('Should return a positive number as a minimum', async () => {
    const input = [4, 200, 10, 33, 42];
    const expectedOutput = 4;

    expect(getMin(input)).toEqual(expectedOutput);
  });
});
