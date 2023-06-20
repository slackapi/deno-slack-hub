<h1 align="center">
  Deno Slack Hub
  <br>
</h1>

<h4 align="center">You want to use other peoples code to do your work?</h4>

We definitely do! The hub enables its users to use Slack Connectors in
TypeScript, offloading the cost of code maintenance and OAuth management to
other developers. Interact with APIs from `Google`, `Salesforce`, `GitHub`,
`Giphy` and more with a minimal amount of code and offload your credential
management to Slack.

## Requirements

- A recent version of
  [`Deno`](https://deno.com/manual/getting_started/installation).
- The Slack CLI ([install steps](https://api.slack.com/automation/cli/install))

## Versioning

**Disclaimer**: prior to the release of `1.x.x` this package is considered
unstable and will not adhere to [Semantic Versioning](http://semver.org/)

Releases for this repository follow the [SemVer](https://semver.org/) versioning
scheme. The HUB's contract is determined by the top-level exports from
`src/mod.ts` and `src/types.ts`. Exports not included in these files are deemed
internal and any modifications will not be treated as breaking changes. As such,
internal exports should be treated as unstable and used at your own risk.

## Usage

### Getting started

Follow our
[quick start guide for modular Slack apps](https://api.slack.com/automation/quickstart)

### Samples

Take a look at some our
[sample & template](https://api.slack.com/automation/samples) projects to get
started with the latest version of the
[deno-slack-sdk](https://github.com/slackapi/deno-slack-sdk)

### Consumption

Import the `deno-slack-hub` package in your next gen Deno project, we recommend
doing this through the `import_map.json`.

```json
{
  "imports": {
    "deno-slack-sdk/": "https://deno.land/x/deno_slack_sdk@x.x.x/",
    "deno-slack-api/": "https://deno.land/x/deno_slack_api@x.x.x/",
    "deno-slack-hub/": "https://deno.land/x/deno_slack_hub@x.x.x/"
  }
}
```

### Using connectors as a step in a coded workflow

Using connectors as a step in a coded workflow

```ts
import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";
import { Connectors } from "deno-slack-hub/mod.ts";

const GifWorkflow = DefineWorkflow({
  callback_id: "post_random_gif",
  title: "Workflow to post a random gif in a channel",
  description: "A workflow that post a random gif in the channel it is invoked",
  input_parameters: {
    properties: {
      channel_id: {
        type: Schema.slack.types.channel_id,
      },
    },
    required: ["channel_id"],
  },
});

const getRandomGifStep = GifWorkflow.addStep(
  Connectors.Giphy.functions.GetRandomGif,
  {
    rating: "g",
  },
);

GifWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: GifWorkflow.inputs.channel_id,
  message: getRandomGifStep.outputs.gif_title_url,
});

export default GifWorkflow;
```

## Contributions

We welcome contributions from everyone! Please check out our
[Contributor's Guide](.github/CONTRIBUTING.md) for how to contribute in a
helpful and collaborative way.

[![License][license-image]](.LICENSE)

[license-image]: https://img.shields.io/github/license/slackapi/deno-slack-hub
