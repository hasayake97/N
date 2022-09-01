const NP = require('../lib/index.umd')

test('minus/default', () => {
  expect(NP().minus(0.3, 0.2).toNumber()).toBe(0.1)
})

test('minus/init', () => {
  expect(NP(0.3).minus(0.2).toNumber()).toBe(0.1)
})

test('minus/parameter-missing', () => {
  expect(() => NP(0.3).minus().toNumber()).toThrow()
})
