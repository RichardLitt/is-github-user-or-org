'use strict'

const getGithubUser = require('get-github-user')

module.exports = function (user, opts) {
  opts = opts || {}
  // Because Octokat is different than gh-get, and I forget which I use
  if (!opts.endpoint && opts.rootURL) {
    opts.endpoint = opts.rootURL
  }
  const token = opts.token || process.env.GITHUB_TOKEN

  if (typeof user !== 'string') {
    throw new TypeError('Expected a string.')
  }

  return getGithubUser(user, {token, rootURL: opts.endpoint}).then((res) => {
    if (res && res[0] && res[0].type) {
      return res[0].type
    }
  }).catch(function (err) {
    if (err.json.message === 'Bad credentials') {
      throw new Error('Bad credentials.')
    }
    throw new Error('Not a GitHub user.')
  })
}
