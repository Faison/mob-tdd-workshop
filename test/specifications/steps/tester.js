import util from 'util';
import child_process from 'child_process';
const exec = util.promisify(child_process.exec);

export default class Tester {
  startClient() {
    this.appPath = 'src/app.js';
    this.command = '';
    this.output = '';
  }

  openApp() {
    this.command = `node ${this.appPath}`;
  }

  enterValues(values) {
    this.command += ` ${values.join(' ')}`;
  }

  async submitValues() {
    const { stdout } = await exec(this.command);
    this.output = stdout;
  }

  assertOutput(expectedOutput) {
    expect(this.output).toEqual(expectedOutput);
  }

  assertOutputHasMinimumValue(expectedMinimum) {
    expect(this.output).toContain(`minimum value = ${expectedMinimum}`);
  }

  assertOutputHasMaximumValue(expectedMaximum) {
    expect(this.output).toContain(`maximum value = ${expectedMaximum}`);
  }
}
