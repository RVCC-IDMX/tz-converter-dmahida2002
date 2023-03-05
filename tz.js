const moment = require('moment-timezone');

moment.tz.setDefault('America/New_York');

// eslint-disable-next-line import/no-extraneous-dependencies
const yargs = require('yargs');

const command = yargs.argv._;
const params = yargs.argv;

// eslint-disable-next-line prefer-destructuring
const targetZone = command[0];

const localFormatted = moment.tz('America/New_York').format('dddd, MMMM Do YYYY, h:mm:ss a');
const targetFormatted = moment.tz(targetZone).format('dddd, MMMM Do YYYY, h:mm:ss a');

if (params.showList) {
  console.table(moment.tz.names());
  process.exit(0);
} else if (params.country) {
  console.table(moment.tz.zonesForCountry(params.country, true));
  process.exit(0);
}

if (command.length !== 1) {
  console.error('[command error] Usage: <script-file> [--param] <timezone>');
  process.exit(1);
} else if (!(moment.tz.names().some((timezone) => timezone === command[0]))) {
  console.error('Something went wrong. Please try again with correct commands/params/zone(s)');
  process.exit(2);
}

if (params.format) {
  console.log(`The local time is: ${localFormatted}`);
  console.log(`The time at ${targetZone} is: ${targetFormatted}`);
} else {
  console.log(`The local time is: ${moment().tz('America/New_York').format()}`);
  console.log(`The time at the ${targetZone} is: ${moment().tz(targetZone).format()}`);
}
