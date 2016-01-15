#!/usr/bin/env node
'use strict'

var meow = require('meow')
var getGithubUser = require('./')
var Promise = require('bluebird')

var cli = meow([
  'Usage',
  '  $ get-github-user [input]',
  '',
  '',
  'Examples',
  '  $ get-github-user RichardLitt',
  '  [{ login: \'RichardLitt\', ... }]',
  '  $ get-github-user RichardLitt jbenet',
  '  [{...}, {...}]'
])

Promise.try(function () {
  return getGithubUser(cli.input)
}).then(function (response) {
  console.log(response)
})
