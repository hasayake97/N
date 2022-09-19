const { n } = require('../lib/index.js')

test('mix-1', () => {
  expect(n(1).add(2, 3).mul(1).toNumber()).toBe(6)
})

test('mix-2', () => {
  expect(n(1).add(2, 3).mul(1).div(10).toNumber()).toBe(0.6)
})

test('mix-3', () => {
  expect(n().add(2, 3).pow(2).toNumber()).toBe(25)
})

test('mix-4', () => {
  expect(n(2).add(2, 3).pow(2).mul(10).div(2).toNumber()).toBe(245)
})
