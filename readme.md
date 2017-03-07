# is-github-user-or-org [![Build Status](https://travis-ci.org/RichardLitt/is-github-user-or-org.svg?branch=master)](https://travis-ci.org/RichardLitt/is-github-user-or-org)

> Determines whether a GitHub profile is a User or an Organization

## Install

```
$ npm install --save is-github-user-or-org
```

You also need to get a GitHub application token: https://github.com/settings/tokens. Provide it in the CLI or set it as `$GITHUB_TOKEN` somewhere in your bash_profile.

## Usage

```js
const isGithubUserOrOrg = require('is-github-user-or-org')

isGithubUserOrOrg('RichardLitt')
//=> 'User'
```


## API

### isGithubUserOrOrg(input)

#### input

Type: `string`

The user or organization you want to check the type of

## CLI

```
$ npm install --global is-github-user-or-org
```

```
$ is-github-user-or-org --help

  Usage
    is-github-user-or-org [input]

  Examples
    $ is-github-user-or-org RichardLitt
    User
    $ is-github-user-or-org OpenSourceDesign
    Organization
```

## License

[MIT](license) © 2017 [Richard Littauer](http://burntfen.com)
