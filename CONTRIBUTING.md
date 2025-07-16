## Before getting started

Thank you for being interested in contributing to this entirely volunteer-driven project!
You will be paid in none or more of:

* Honor
* Glory
* Power
* Fame
* Riches
* Attribution in [CONTRIBUTORS.md](CONTRIBUTORS.md)

## How to contribute to itempiles-dragonbane

Make an issue if you have ideas or have found bugs, or a pull request if you have code or documentation. If you have
submitted a PR it's probably a good idea to ping me in the #vtt-foundry channel of the Dragonbane Community discord as
well.

If you see an already existing issue you would like to tackle, ping me in a comment on the issue first.

Do note we have a [code of conduct](CODE_OF_CONDUCT.md), please follow it in all your interactions with the project. (
TL/DR: [Be excellent to each other!](https://www.youtube.com/watch?v=rph_1DODXDU))

Also note that all contributions must adhere to the licenses mentioned in the [README](README.md) and not otherwise
break any relevant (or irrelevant) law...

## How to set up for development

1. Fork project in github
1. Clone project to your local working directory
1. Do one of the following:
1. Symlink dist directory to your Foundry data directory.
    ```
    yarn run link-project
   ```
1. Do the following each time you have updated your fork and want to test your code:
1. Builds the prerequisites
   `yarn install`
1. Runs the module in 'developer mode', watching for changes in the code as they happen
   `yarn run build:watch`

## Coding conventions

In order to keep to sane coding standards - aka the ones I prefer :) - please use eslint with the included settings
whether directly supported in your IDE, or run manually on the command line before you make your Pull Request.

* You may also need a plugin/integration to support eslint. See https://eslint.org/docs/user-guide/integrations for
  where to find that for your editor/IDE. (Though, you can of course run eslint manually before committing if you
  prefer.)
* Depending on your editor/IDE you may have to install a plugin/integration for .editorconfig to be supported.
  See https://editorconfig.org/ for details and where to find that for your editor/IDE. (It is more important that you
  use eslint, but if your editor only supports .editorconfig at least indenting etc will use the right setting.)

## When it's time to do your Pull Request

* Set the Pull Request as Draft until you think it is ready to be merged.
* Make sure eslint has been run with no complaints on your code.
* Squash any merge commits and other cruft. Aim for one commit per feature or issue that your Pull Request tackles.
* If any of the checks on the Pull Request fails, try to fix them, or ask for help if you can't figure out what's wrong.
* When you're done, note in the Pull Request and/or on the Discord that there is a Pull Request that you consider ready
  to be merged, take the PR out of Draft.
* If your Pull Request completes an issue, include a line like 'Fixes #nnn' in the description, replacing nnn with the
  actual issue number.
