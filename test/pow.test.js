const NP = require('../lib/index.umd')

test('pow/default', () => {
  expect(NP().pow(10, 2).toNumber()).toBe(100)
})

test('pow/init', () => {
  expect(NP(10).pow(2).toNumber()).toBe(100)
})

test('pow/parameter-missing', () => {
  expect(() => NP(10).pow().toNumber()).toThrow()
})
