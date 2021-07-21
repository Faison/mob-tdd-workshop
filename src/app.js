import getMin from './getMin.js';
import getMax from './getMax.js';

const args = process.argv.slice(2);

const min = getMin(args);
const max = getMax(args);

let output = `minimum value = ${min}\n`;
output += `maximum value = ${max}\n`;

// Write the app output to the stdout of the terminal.
process.stdout.write(output);
