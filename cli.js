#!/usr/bin/env node
'use strict'

const meow = require('meow')
const getGithubUser = require('./')
const Promise = require('bluebird')
const ghauth = Promise.promisify(require('ghauth'))
const authOptions = {
  configName: 'getGithubUser',
  note: 'Get GitHub user information from just a username',
  userAgent: 'ghUser',
  scope: ['user']
}


const cli = meow([`
  Usage
    $ get-github-user [input]

  Options
    -t, --token A token

  Examples
    $ get-github-user RichardLitt
    [{ login: 'RichardLitt',  ... }]
    $ get-github-user RichardLitt jbenet
    [{...}, {...}]
`], {
  alias: {
    t: 'token'
  }
})

if (cli.flags.token) {
  getGithubUser(cli.input, { token: cli.flags.token })
  .then((response) => console.log(response))
  .catch((err) => console.log('Unable to use passed token', err))
} else {
  Promise.try(() => ghauth(authOptions))
  .then((authData) => getGithubUser(cli.input, authData))
  .then((response) => console.log(response))
  .catch((err) => console.log('Unable to use ghAuth', err))

}
