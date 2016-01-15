# get-github-user [![Build Status](https://travis-ci.org/RichardLitt/get-github-user.svg?branch=master)](https://travis-ci.org/RichardLitt/get-github-user)

> Get GitHub user information from just a username


## Install

```
$ npm install --save get-github-user
```

You also need to get a GitHub application token: https://github.com/settings/tokens. Provide it in the CLI or set it as `$GITHUB_OGN_TOKEN` somewhere in your bash_profile.

## Usage

```js
const getGithubUser = require('get-github-user');

getGithubUser('RichardLitt');
//=> [{login: 'RichardLitt', ...}]
```


## API

### getGithubUser(input)

#### input

Type: `string` or `array`

The user or array of users you want user objects for.

## CLI

```
$ npm install --global get-github-user
```

```
$ get-github-user --help

  Usage
    get-github-user [input]

  Examples
    $ get-github-user RichardLitt
    [{ login: 'RichardLitt', ... }]
    $ get-github-user RichardLitt jbenet
    [{ login: 'RichardLitt', ...}, { login: 'jbenet', ...}]'
```


## License

MIT © [Richard Littauer](http://burntfen.com)
