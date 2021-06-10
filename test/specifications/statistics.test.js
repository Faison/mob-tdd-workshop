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
});
