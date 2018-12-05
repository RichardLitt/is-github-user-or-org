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

  return getGithubUser(user, { token, rootURL: opts.endpoint }).then((res) => {
    if (res && res[0] && res[0].type) {
      return res[0].type
    }
    if (res && res.length == 0) {
      return `@${user} is not a valid GitHub account.`
    }
  }).catch((err) => {
    if (err.message.indexOf('Bad credentials') !== -1) {
      throw new Error('Bad credentials.')
    } else {
      throw new Error(`Unable to get GitHub user type for @${user}.`)
    }
  })
}
