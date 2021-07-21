import getMax from '../../src/getMax.js';

describe('getMax', () => {
  it('Should find a negative number as the maximum', async () => {
    const input = [-4, -2, -10, -3, -1];
    const expectedOutput = -1;

    expect(getMax(input)).toEqual(expectedOutput);
  });

  it('Should return a positive number as a maximum', async () => {
    const input = [4, 200, -1000, 33, 42];
    const expectedOutput = 200;

    expect(getMax(input)).toEqual(expectedOutput);
  });
});
