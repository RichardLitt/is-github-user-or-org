import test from 'ava'
import fn from './'

test(t => {
  return fn('RichardLitt').then(result => {
    t.is(result, 'User')
  })
})

test(t => {
  return fn('OpenSourceDesign').then(result => {
    t.same(result, 'Organization')
  })
})

test('throws', t => {
    return fn('wkjhfw9a987sya323jkbsd7822dfsa').catch((error) => {
      t.is(error.message, 'Not a GitHub user.');
    })
});
