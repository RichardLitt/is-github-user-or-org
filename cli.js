#!/usr/bin/env node
'use strict'

const meow = require('meow')
const getGithubUser = require('./')
const pify = require('pify')
const ghauth = pify(require('ghauth'))
const authOptions = {
  configName: 'isGitHubUserOrOrg',
  note: 'Determines whether a GitHub profile is a User or an Organization',
  userAgent: 'ghUser',
  scope: ['user']
}

const cli = meow([`
  Usage
    $ is-github-user-or-org <input>

  Options
    -t, --token A token
    -e, --endpoint A GitHub endpoint (for Enterprise)

  Examples
    $ get-github-user RichardLitt
    User
    $ get-github-user OpenSourceDesign
    Organization
`], {
  alias: {
    t: 'token',
    e: 'endpoint',
    rootURL: 'endpoint'
  }
})

if (cli.flags.token) {
  getGithubUser(cli.input[0], { token: cli.flags.token, endpoint: cli.flags.endpoint })
    .then((response) => console.log(response))
    .catch((err) => console.log('Unable to use passed token', err))
} else {
  ghauth(authOptions)
    .then((authData) => getGithubUser(cli.input[0], authData))
    .then((response) => console.log(response))
    .catch((err) => console.log('Unable to use ghAuth', err))
}
