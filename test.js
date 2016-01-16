import test from 'ava'
import fn from './'

test(t => {
  return fn('RichardLitt').then(result => {
    t.is(result[0].login, 'RichardLitt')
  })
})

test(t => {
  return fn('wkjhfw9a987sya323jkbsd7822dfsa').then(result => {
    t.same(result, [])
  })
})

test(t => {
  return fn(['wkjhfw9a987sya323jkbsd7822dfsa', 'RichardLitt']).then(result => {
    t.same(result, [])
  })
})

test(t => {
  return fn(['RichardLitt', 'sindresorhus']).then(result => {
    t.is(result[0].login, 'RichardLitt')
    t.is(result[1].login, 'sindresorhus')
  })
})

