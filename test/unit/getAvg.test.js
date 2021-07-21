import getAvg from '../../src/getAvg.js';

describe('getAvg', () => {
  it('Should find the average of an array of numbers', async () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = 3;

    expect(getAvg(input)).toEqual(expectedOutput);
  });

  it('Should find the average of a "fun" set of numbers', async () => {
    const input = [-1, 200, -1000311231.213121, 33, 42];
    const expectedOutput = -200062191.4;

    expect(getAvg(input)).toEqual(expectedOutput);
  });
});
