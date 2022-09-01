const NP = require('../lib/index.umd')

test('mul/default', () => {
  expect(NP().mul(10, 10).toNumber()).toBe(100)
})

test('mul/init', () => {
  expect(NP(10).mul(10).toNumber()).toBe(100)
})

test('mul/parameter-missing', () => {
  expect(() => NP(10).mul().toNumber()).toThrow()
})
