import test from 'ava'
import fn from './'

test(t => {
  return fn('RichardLitt').then(result => {
    t.is(result[0].login, 'RichardLitt')
  })
})

test(t => {
  return fn(['RichardLitt', 'sindresorhus']).then(result => {
    t.is(result[0].login, 'RichardLitt')
    t.is(result[1].login, 'sindresorhus')
  })
})

