# deno-slack-connectors

Connectors used to build coded workflows for Run on Slack apps using Deno

## Toggles

- To enable WFB 2.0, use the Request Platform v2 for Free or Trial Workspace workflow in #feedback-platform-v2. This process should add the appropriate toggles to your workspace. This will include [hermes_stable](https://houston.tinyspeck.com/experiments/2349524201781).
- Add your team to [hermes_distribution](https://houston.tinyspeck.com/experiments/4540863538342) toggle. (this allows apps to reference
  other app's functions)
- Add your team to [hermes_third_party_auth_end_user](https://houston.tinyspeck.com/experiments/4449135040515) toggle. (this allows apps to
  pass end user auth to connectors)
