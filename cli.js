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

var cli = meow([`
  Usage
    $ get-github-user [input]

  Examples
    $ get-github-user RichardLitt
    [{ login: 'RichardLitt',  ... }]
    $ get-github-user RichardLitt jbenet
    [{...}, {...}]
`])

Promise.try(function () {
  return ghauth(authOptions)
}).then((authData) => {
  return getGithubUser(cli.input, authData.token)
}).then(function (response) {
  console.log(response)
})
