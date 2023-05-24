# Maintainers Guide

## Tools

All you need to work on this project is a recent version of
[Deno](https://deno.land/)

<details>
  <summary>Note</summary>

- You can set up shell completion by following the
  [Shell Completion](https://deno.land/manual/getting_started/setup_your_environment#shell-completions)
  guidelines.

</details>

## Tasks

### Generating

This script will generate the necessary function TypeScript files along with
their tests in the `src/connectors/` directory, i.e.
`src/connectors/giphy/functions/get_random_gif.ts`,
`src/connectors/giphy/functions/get_random_gif_test.ts` and
`src/connectors/giphy/mod.ts`. It will also update the `src/connectors/mod.ts`
file to import/export all of the defined functions. It will also remove outdated
function TypeScript files but not their.

#### Instructions

1. First, you'll need to grab a payload from `functions.list`, it must contain
   all the connectors we want to generate. Place the response in a
   `functions.json` file inside of this `scripts` directory.

2. From the project level directory, run the generate script:

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

### Testing with Deno

In-code tests can be run directly with Deno:

```zsh
deno task test
```

You can also run a test coverage report with:

```zsh
deno task coverage
```

### Testing with a sample app

Sometimes you may need to test out changes in this SDK with a sample app or
project.

A modified SDK version can be used by updating the `deno-slack-connectors`
import url in the app's `import_map.json` file.

> After making changes to your imports, you may need to
> [reload your modules](https://deno.land/manual@v1.29.1/basics/modules/reloading_modules)
> in case they've been cached.

#### Using local changes

To use your own code as the SDK, change the import url to the `src/` directory
of your local `deno-slack-` repo:

```json
{
  "imports": {
    "deno-slack-sdk/": "https://deno.land/x/deno_slack_sdk@1.5.0/",
    "deno-slack-api/": "https://deno.land/x/deno_slack_api@1.5.0/",
    "deno-slack-connectors/": "../../tools/deno-slack-connectors/src/"
  }
}
```

#### With remote changes

To test with changes on a remote repo, commit your intended history to a remote
branch and note the full commit SHA. (e.g.
`fc0a0a1f0722e28fecb7782513d045522d7c0d6f`).

Then in your sample app's `import_map.json` file, replace the `deno-slack-sdk`
import url with:

```json
{
  "imports": {
    "deno-slack-sdk/": "https://raw.githubusercontent.com/slackapi/deno-slack-sdk/<commit-SHA-goes-here>/src/",
    "deno-slack-api/": "https://deno.land/x/deno_slack_api@1.5.0/"
  }
}
```

### Lint and format

The linting and formatting rules are defined in the `deno.jsonc` file, your IDE
can be set up to follow these rules:

1. Refer to the
   [Deno Set Up Your Environment](https://deno.land/manual/getting_started/setup_your_environment)
   guidelines to set up your IDE with the proper plugin.
2. Ensure that the `deno.jsonc` file is set as the configuration file for your
   IDE plugin
   - If you are using VS code
     [this](https://deno.land/manual/references/vscode_deno#using-a-configuration-file)
     is already configured in `.vscode/settings.json`

#### Linting

The list of linting rules can be found in
[the linting deno docs](https://lint.deno.land/). Currently we apply all
recommended rules.

#### Format

The list of format options is defined in the `deno.jsonc` file. They closely
resemble the default values.

### Branches

> Describe any specific branching workflow. For example: `main` is where active
> development occurs. Long running branches named feature branches are
> occasionally created for collaboration on a feature that has a large scope
> (because everyone cannot push commits to another person's open Pull Request)

## Everything else

When in doubt, find the other maintainers and ask.

[semver]: http://semver.org/
