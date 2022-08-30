const NP = require('../lib/index.umd')

test('add: NP().add(0.1, 0.2).toNumber() => 0.3', () => {
  expect(NP().add(0.1, 0.2).toNumber()).toBe(0.3)
})

test('add: NP(0.1).add(0.2).toNumber() => 0.3', () => {
  expect(NP(0.1).add(0.2).toNumber()).toBe(0.3)
})

test('add: NP().add(0.1, 0.2, 0.1).toNumber() => 0.4', () => {
  expect(NP().add(0.1, 0.2, 0.1).toNumber()).toBe(0.4)
})

test('add: NP().add(0.1, 0.2, "xxx").toNumber() => toThrow', () => {
  expect(() => NP().add(0.1, 0.2, "xxx").toNumber()).toThrow()
})
