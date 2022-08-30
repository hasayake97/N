const NP = require('../lib/index.umd')

test('minus: NP().minus(0.3, 0.2).toNumber() => 0.1', () => {
  expect(NP().minus(0.3, 0.2).toNumber()).toBe(0.1)
})

test('minus: NP(0.3).minus(0.2).toNumber() => 0.1', () => {
  expect(NP(0.3).minus(0.2).toNumber()).toBe(0.1)
})

test('minus: NP(0.3).minus(0.2).toNumber() => 0.1', () => {
  expect(NP(0.3).minus().toNumber()).toBe(0.1)
})
