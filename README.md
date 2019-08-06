# jared-lunde
This is the personal website for Jared Lunde. It is written in React,
[Curls](https://github.com/jaredLunde/curls), and [Style
Hooks](https://github.com/jaredLunde/style-hooks). To use the code on
your local machine, utilize the scripts below.

### Cloning the repository
`git clone https://github.com/jaredLunde/jared-lunde.git`

## Scripts
### yarn install
Installs all dependencies in `packages` for this monorepo

### yarn www start
Starts a dev server in `development` mode

### yarn www start production
Starts a dev server in `production` mode

### yarn www deploy
Deploys the website to AWS in a `staging` environment

### yarn www deploy production
Deploys the website to AWS in a `production` environment

### yarn www bundle `[stage]`
Bundles the website for the`[stage]` environment

### yarn www teardown
Tears down the website on AWS in the `staging` environment

### yarn www teardown production
Tears down the website on AWS in the `production` environment
