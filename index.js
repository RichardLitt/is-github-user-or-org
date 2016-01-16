'use strict'

const Octokat = require('octokat')
const octo = new Octokat({
  token: process.env.GITHUB_OGN_TOKEN
})
const Promise = require('bluebird')
const isArray = require('is-array')

module.exports = function (users) {
  if (typeof users !== 'string') {
    if (!isArray(users)) {
      throw new TypeError('Expected a string or an array')
    }
  } else {
    users = [users]
  }

  return Promise.map(users, function (user) {
    return octo.users(user).fetch()
  }).then(function (users) {
    return users
  }).catch(function (err) {
    if (err.status === 404) {
      return []
    } else {
      throw ('Could not get GitHub user', err)
    }
  })
}
