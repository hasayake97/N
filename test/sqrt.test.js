const NP = require('../lib/index.umd')

test('sqrt/default', () => {
  expect(NP().sqrt(0.2401).toNumber()).toBe(0.49)
})

test('sqrt/prev', () => {
  expect(NP(0.4).sqrt(0.2401).toNumber()).toBe(0.49)
})

test('sqrt/init', () => {
  expect(NP(0.2401).sqrt().toNumber()).toBe(0.49)
})

test('sqrt/parameter-missing', () => {
  expect(() => NP().sqrt().toNumber()).toThrow()
})
