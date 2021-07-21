import getMin from '../../src/getMin.js';

describe('getMin', () => {
  it('Should return the minimum value from an array', async () => {
    const input = [4, 2, 10, 3, -1];
    const expectedOutput = -1;

    expect(getMin(input)).toEqual(expectedOutput);
  });
});
