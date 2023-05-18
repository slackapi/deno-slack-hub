# Generating connector function source files

This script will generate the necessary function TypeScript files along with
their tests in the `schema/slack/functions` directory, i.e.
`schema/slack/functions/send_message.ts` and
`schema/slack/functions/send_message_test.ts`. It will also update the
`schema/slack/functions/mod.ts` file to import/export all of the defined
functions. It will also remove outdated function TypeScript files but not their
corresponding test, the tests must be removed manually.

## Instructions

1. First, you'll need to grab a payload from `functions.list` and place the
   response in a `functions.json` file inside of this `scripts` directory.

2. From the project level directory as your working directory, run the generate
   script:

   ```sh
   ./scripts/generate
   ```

3. This will output something like the following:

   ```txt
   Cleaning folder directory
   ...
   Generated 19 Connectors with their unit tests
   Updated functions module export
   Formatting Slack function files...
   Linting Slack function files...
   ```

If it completes without any linter errors, you should be good to go, with new,
formatted and linted TypeScript files for all of the Slack functions included in
your `functions.json` payload. If there are any unexpected linting issues, you
may need to go into those files and manually resolve any problems.
