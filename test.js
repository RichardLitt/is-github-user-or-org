import test from 'ava'
import fn from './'

test('Returns a user', t => {
  return fn('RichardLitt').then(result => {
    t.deepEqual(result, 'User')
  })
})

test('Returns an Organization', t => {
  return fn('OpenSourceDesign').then(result => {
    t.deepEqual(result, 'Organization')
  })
})

test('Correctly uses the endpoint if specified', t => {
  return fn('OpenSourceDesign', { endpoint: 'https://api.github.com' }).then(result => {
    t.deepEqual(result, 'Organization')
  })
})

test('Correctly uses the rootURL endpoint alias', t => {
  return fn('OpenSourceDesign', { rootURL: 'https://api.github.com' }).then(result => {
    t.deepEqual(result, 'Organization')
  })
})

test('Throws if there is a bad endpoint', async t => {
  return fn('OpenSourceDesign', { rootURL: 'sadfsafd' }).then(result => {
    t.deepEqual(result, '@OpenSourceDesign is not a valid GitHub account.')
  })
})

test('Throws if there is a bad token', async t => {
  await t.throws(fn('OpenSourceDesign', { token: 'asdfsfssadf' }), 'Bad credentials.')
})

test('Throws if someone is not a user', t => {
  return fn('wkjhfw9a987sya323jkbsd7822dfsa').then(res => {
    t.deepEqual(res, '@wkjhfw9a987sya323jkbsd7822dfsa is not a valid GitHub account.')
  })
})
