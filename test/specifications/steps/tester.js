import util from 'util';
import child_process from 'child_process';
const exec = util.promisify(child_process.exec);

export default class Tester {
  startClient() {
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
    this.output = parseFloat(stdout) || stdout;
  }

  assertOutput(expectedOutput) {
    expect(this.output).toEqual(expectedOutput);
  }
}
