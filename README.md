# Timezone CLI tool
This command-line tool allows you to retrieve the current time in any timezone using moment-timezone and yargs libraries.

### Installation
To install the dependencies, run:

```npm install```

### Usage
To get the current time in a specific timezone, run:

```node tz <timezone> [--param]```

Replace `<timezone>` with the name of the timezone you want to retrieve the time for.

You can also use the following optional parameters:

``--format``: Formats the output to display the date and time in a more readable format.

``--showList``: Shows a table of all available timezones.

``--country``: Shows a table of timezones for a specific country. You need to pass the country code as a parameter, e.g. --country US.

Example usage:

```node tz America/New_York --format```