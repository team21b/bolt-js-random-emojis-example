# Bolt for JavaScript Custom Function Example - Random Emoji Step!

This is a Bolt for JavaScript app used to build a single custom functions in [Workflow Builder](https://api.slack.com/start#workflow-builder) for sending a user 5 random emojis.

## Setup

Before getting started, first make sure you have a development workspace where
you have permission to install apps. Please note that the features in this
project require that the workspace be part of
[a Slack paid plan](https://slack.com/pricing). I'd suggest using a sandbox via the [Slack Developer Program](https://api.slack.com/developer-program/sandboxes).

### Install the Slack CLI

To use this template, you need to install and configure the Slack CLI.
Step-by-step instructions can be found in the
[Quickstart Guide](https://api.slack.com/automation/quickstart).

### Install Slack 

```zsh
# Install Slack
$ npm install slack
```

### Clone the Template

Start by cloning this repository to your local machine. Then use `slack login` to log in to your Slack workspace. Be sure to use a test environment to start! 

### Setting SLACK_APP_TOKEN and SLACK_BOT_TOKEN

Once installed, you can see the app via [api.slack.com](https://api.slack.com), where you can grab the required tokens. 

```zsh
# Set SLACK_BOT_TOKEN token and confirm
$ export SLACK_BOT_TOKEN='your_slack_bot_token_here'
$ echo $SLACK_BOT_TOKEN
```

```zsh
# Set SLACK_APP_TOKEN token and confirm
$ export SLACK_APP_TOKEN='your_slack_app_token_here'
$ echo $SLACK_APP_TOKEN
```

### Running Your Project Locally

While building your app, you can see your changes appear in your workspace in
real-time with `slack run`. You'll know an app is the development version if the
name has the string `(local)` appended.

```zsh
# Run app locally
$ slack run

⚡️ Bolt app is running! ⚡️
```

To stop running locally, press `<CTRL> + C` to end the process.

## Using Functions in Workflow Builder
With your server running, your function is now ready for use in [Workflow Builder](https://api.slack.com/start#workflow-builder)! Add it as a custom step in a new or existing workflow, then run the workflow while your app is running.

For more information on creating workflows and adding custom steps, read more [here](https://slack.com/help/articles/17542172840595-Create-a-new-workflow-in-Slack).

## Project Structure

### `.slack/`

Contains `apps.dev.json` and `config.json`, which include installation details for your project.

### `app.js`

`app.js` is the entry point for the application and is the file you'll run to start the server. This project aims to keep this file as thin as possible, primarily using it as a way to route inbound requests.

### `manifest.json`

`manifest.json` is a configuration for Slack apps. With a manifest, you can create an app with a pre-defined configuration, or adjust the configuration of an existing app.

### `slack.json`

Used by the Slack CLI to interact with the project's SDK dependencies. It contains
script hooks that are executed by the CLI and implemented by `@slack/cli-hooks`.
