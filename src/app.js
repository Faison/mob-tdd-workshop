import getMin from './getMin.js';

const args = process.argv.slice(2);

const min = getMin(args);

const output = `minimum value = ${min}`;

// Write the app output to the stdout of the terminal.
process.stdout.write(output);
