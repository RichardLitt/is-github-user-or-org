import test from 'ava'
import fn from './'

test('Returns a user', t => {
  return fn('RichardLitt').then(result => {
    t.is(result, 'User')
  })
})

test('Returns an Organization', t => {
  return fn('OpenSourceDesign').then(result => {
    t.same(result, 'Organization')
  })
})

test('Correctly uses the endpoint if specified', t => {
  return fn('OpenSourceDesign', {endpoint: 'https://api.github.com'}).then(result => {
    t.same(result, 'Organization')
  })
})

test('Correctly uses the rootURL endpoint alias', t => {
  return fn('OpenSourceDesign', {rootURL: 'https://api.github.com'}).then(result => {
    t.same(result, 'Organization')
  })
})

test('Throws if there is a bad endpoint', t => {
  return fn('OpenSourceDesign', {endpoint: 'https://fail'}).catch((error) => {
    t.is(error.message, 'Not a GitHub user.')
  })
})

test('Throws if there is a bad token', t => {
  return fn('OpenSourceDesign', {token: 'thisisnotatoken'}).catch((error) => {
    t.is(error.message, 'Bad credentials.')
  })
})

test('Throws if someone is not a user', t => {
  return fn('wkjhfw9a987sya323jkbsd7822dfsa').catch((error) => {
    t.is(error.message, 'Not a GitHub user.')
  })
})
