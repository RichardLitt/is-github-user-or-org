import test from 'ava'
import fn from './'

test(t => {
  const token = '523ef691191741c99d5afbcfe58079bfa0038771';
  
  return fn('RichardLitt', {token}).then(result => {
    t.is(result, 'User')
  })
})

test(t => {
  const token = '523ef691191741c99d5afbcfe58079bfa0038771';

  return fn('OpenSourceDesign', {token}).then(result => {
    t.same(result, 'Organization')
  })
})

test('throws', t => {
  const token = '523ef691191741c99d5afbcfe58079bfa0038771';

  return fn('wkjhfw9a987sya323jkbsd7822dfsa', {token}).catch((error) => {
    t.is(error.message, 'Not a GitHub user.');
  })
});
