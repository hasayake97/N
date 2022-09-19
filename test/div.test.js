const { n } = require('../lib/index.js')

test('div-1', () => {
  expect(n().div(0.6, 3).toNumber()).toBe(0.2)
})

test('div-2', () => {
  expect(n(0.6).div(3).toNumber()).toBe(0.2)
})

test('div-3', () => {
  expect(n(100).div(2, 2).div(5).toNumber()).toBe(5)
})
