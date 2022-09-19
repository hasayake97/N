const { n } = require('../lib/index.js')

test('pow-1', () => {
  expect(n().pow(0.49, 2).toNumber()).toBe(0.2401)
})

test('pow-2', () => {
  expect(n(0.49).pow(2).toNumber()).toBe(0.2401)
})

test('pow-3', () => {
  expect(n(2).pow(2, 2).pow(3).toNumber()).toBe(4096)
})

test('pow-4', () => {
  expect(n().pow(0.49).toNumber()).toBe(0.49)
})
