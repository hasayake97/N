const { n } = require('../lib/index.js')

test('mul-1', () => {
  expect(n().mul(0.6, 3).toNumber()).toBe(1.8)
})

test('mul-2', () => {
  expect(n(0.6).mul(3).toNumber()).toBe(1.8)
})

test('mul-3', () => {
  expect(n(2).mul(3, 4).mul(10).toNumber()).toBe(240)
})
