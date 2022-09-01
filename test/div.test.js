const NP = require('../lib/index.umd')

test('div/default', () => {
  expect(NP().div(0.6, 3).toNumber()).toBe(0.2)
})

test('div/init', () => {
  expect(NP(0.6).div(3).toNumber()).toBe(0.2)
})

test('div/parameter-missing', () => {
  expect(() => NP(0.6).div().toNumber()).toThrow()
})
