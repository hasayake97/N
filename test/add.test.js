const NP = require('../lib/index.umd')

test('add/default', () => {
  expect(NP().add(0.1, 0.2).toNumber()).toBe(0.3)
})

test('add/init', () => {
  expect(NP(0.1).add(0.2).toNumber()).toBe(0.3)
})

test('add/arguments', () => {
  expect(NP().add(0.1, 0.2, 0.1).toNumber()).toBe(0.4)
})

test('add/invalid-number', () => {
  expect(() => NP().add(0.1, 0.2, "xxx").toNumber()).toThrow()
})
