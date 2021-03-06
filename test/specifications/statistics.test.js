import Tester from './steps/tester';

describe('Statistics', () => {
  it('Should provide the minimum value entered', async () => {
    const tester = new Tester();

    tester.startClient();

    tester.openApp();

    tester.enterValues([2, 5, 100, 8, -1, 4]);

    await tester.submitValues();

    tester.assertOutputHasMinimumValue(-1);
  });

  it('Should provide the maximum value entered', async () => {
    const tester = new Tester();

    tester.startClient();

    tester.openApp();

    tester.enterValues([2, 5, 100, 8, -1, 4]);

    await tester.submitValues();

    tester.assertOutputHasMaximumValue(100);
  });

  it('Should provide the average of the values entered', async () => {
    const tester = new Tester();

    tester.startClient();

    tester.openApp();

    tester.enterValues([1, 2, 3, 4, 5]);

    await tester.submitValues();

    tester.assertOutputHasAverageValue(3);
  });
});
