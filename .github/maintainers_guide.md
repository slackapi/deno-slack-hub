# Maintainers Guide

- [Maintainers Guide](#maintainers-guide)
  - [Tools](#tools)
  - [Tasks](#tasks)
    - [Generating](#generating)
      - [Instructions](#instructions)
    - [Testing](#testing)
    - [Testing with a sample app](#testing-with-a-sample-app)
      - [Using local changes](#using-local-changes)
      - [With remote changes](#with-remote-changes)
    - [Lint and format](#lint-and-format)
      - [Linting](#linting)
      - [Format](#format)
    - [Releasing](#releasing)
      - [Versioning and Tags](#versioning-and-tags)
  - [Everything else](#everything-else)

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
file to import/export all of the defined functions.

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
your `functions.json` payload.

### Testing

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

A modified SDK version can be used by updating the `deno-slack-hub` import url
in the app's `import_map.json` file.

> After making changes to your imports, you may need to
> [reload your modules](https://deno.land/manual@v1.29.1/basics/modules/reloading_modules)
> in case they've been cached.

#### Using local changes

To use your own code as the HUB, change the import url to the `src/` directory
of your local `deno-slack-` repo:

```json
{
  "imports": {
    "deno-slack-sdk/": "https://deno.land/x/deno_slack_sdk@1.5.0/",
    "deno-slack-api/": "https://deno.land/x/deno_slack_api@1.5.0/",
    "deno-slack-hub/": "<your-path-to-deno-slack-hub>/src/"
  }
}
```

#### With remote changes

To test with changes on a remote repo, commit your intended history to a remote
branch and note the full commit SHA. (e.g.
`fc0a0a1f0722e28fecb7782513d045522d7c0d6f`).

Then in your sample app's `import_map.json` file, replace the `deno-slack-hub`
import url with:

```json
{
  "imports": {
    "deno-slack-hub/": "https://raw.githubusercontent.com/slackapi/deno-slack-hub/<commit-SHA-goes-here>/src/",
    "deno-slack-sdk/": "https://deno.land/x/deno_slack_sdk@x.x.x/",
    "deno-slack-api/": "https://deno.land/x/deno_slack_api@x.x.x/"
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

### Releasing

Releases for this library are automatically generated off of git tags. Before
creating a new release, ensure that everything on the `main` branch since the
last tag is in a releasable state! At a minimum, [run the tests](#testing).

To create a new release:

1. Create a new GitHub Release from the
   [Releases page](https://github.com/slackapi/deno-slack-hub/releases) by
   clicking the "Draft a new release" button.
2. Input a new version manually into the "Choose a tag" input. You can start off
   by incrementing the version to reflect a patch. (i.e. 1.16.0 -> 1.16.1)

   - After you input the new version, click the "Create a new tag: x.x.x on
     publish" button. This won't create your tag immediately.
   - Auto-generate the release notes by clicking the "Auto-generate release
     notes" button. This will pull in changes that will be included in your
     release.
   - Edit the resulting notes to ensure they have decent messaging that are
     understandable by non-contributors, but each commit should still have it's
     own line.
   - Flip to the preview mode and review the pull request labels of the changes
     included in this release (i.e. `semver:minor` `semver:patch`,
     `semver:major`). Tip: Your release version should be based on the tag of
     the largest change, so if this release includes a `semver:minor`, the
     release version in your tag should be upgraded to reflect a minor.
   - Ensure that this version adheres to [semantic versioning][semver]. See
     [Versioning](#versioning-and-tags) for correct version format. Version tags
     should match the following pattern: `1.0.1` (no `v` preceding the number).

3. Set the "Target" input to the "main" branch.
4. Name the release title after the version tag.
5. Make any adjustments to generated release notes to make sure they are
   accessible and approachable and that an end-user with little context about
   this project could still understand.
6. Publish the release by clicking the "Publish release" button!
7. After a few minutes, the corresponding version will be available on
   <https://deno.land/x/deno_slack_hub>.

#### Versioning and Tags

**Disclaimer**: prior to the release of `1.x.x` this package is considered unstable will not adhere to
[Semantic Versioning][semver]

This project is versioned using [Semantic Versioning][semver].

## Everything else

When in doubt, find the other maintainers and ask.

[semver]: http://semver.org/
