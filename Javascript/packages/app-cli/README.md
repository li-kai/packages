# app-cli

A generic cli for web apps that provide default configuration. Similar works include create-react-app, preact-cli, vue-cli, nwb and razzle.

`yarn add -D @li-kai/app-cli`

## Aim
- Provide defaults for the fastest production build
- Enhance developer experience
- Support react, preact, vue and more
- Support pwa, apps, static sites
- Support server side rendering if possible

## Commands

`<>` are required arguments and `[]` are optional arguments.

### app dev

`app dev [src]`

Start app in development environment

Options:
  --version   Show version number                                      [boolean]
  --cwd       A directory to use instead of $PWD.                 [default: "."]
  --src       Entry file (e.g. src/index.js)                    [default: "src"]
  --port      Port to start a server on                        [default: "8080"]
  --host      Hostname to start a server on               [default: "localhost"]
  -h, --help  Show help                                                [boolean]
