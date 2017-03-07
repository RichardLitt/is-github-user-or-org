'use strict'

const Octokat = require('octokat')
const Promise = require('bluebird')
const isArray = require('is-array')
const getGithubUser = require('get-github-user')
var octo

module.exports = function (user, opts) {
  var opts = opts || {}

  octo = new Octokat({
    token: opts.token || process.env.GITHUB_OGN_TOKEN
  })

  if (typeof user !== 'string') {
    throw new TypeError('Expected a string.')
  }

  return getGithubUser(user).then((res) => {
    if (res && res[0] && res[0].type) {
      return res[0].type
    } else {
      throw new Error
    }
  }).catch(function (err) {
    throw new Error('Not a GitHub user.')
  })
}
