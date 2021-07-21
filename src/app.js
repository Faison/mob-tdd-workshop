import getMin from './getMin.js';
import getMax from './getMax.js';
import getAvg from './getAvg.js';

const args = process.argv.slice(2);

const min = getMin(args);
const max = getMax(args);
const avg = getAvg(args);

let output = `minimum value = ${min}\n`;
output += `maximum value = ${max}\n`;
output += `average value = ${avg}\n`;

// Write the app output to the stdout of the terminal.
process.stdout.write(output);
