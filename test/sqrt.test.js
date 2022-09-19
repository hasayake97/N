const { n } = require('../lib/index.js')

test('sqrt-1', () => {
  expect(n().sqrt(0.2401).toNumber()).toBe(0.49)
})

test('sqrt-2', () => {
  expect(n(0.2401).sqrt().toNumber()).toBe(0.49)
})

test('sqrt-3', () => {
  expect(n(4).sqrt(0.2401).toNumber()).toBe(0.49)
})
