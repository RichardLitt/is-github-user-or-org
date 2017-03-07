'use strict'

const Octokat = require('octokat')
const getGithubUser = require('get-github-user')
var octo

module.exports = function (user, opts) {
  var opts = opts || {}
  const token = opts.token || process.env.GITHUB_TOKEN

  octo = new Octokat({token})

  if (typeof user !== 'string') {
    throw new TypeError('Expected a string.')
  }

  return getGithubUser(user, {token}).then((res) => {
    if (res && res[0] && res[0].type) {
      return res[0].type
    } else {
      throw new Error
    }
  }).catch(function (err) {
    throw new Error('Not a GitHub user.')
  })
}
