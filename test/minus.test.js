const { n } = require('../lib/index.js')

test('minus-1', () => {
  expect(n().minus(0.3, 0.2).toNumber()).toBe(0.1)
})

test('minus-2', () => {
  expect(n(0.3).minus(0.2).toNumber()).toBe(0.1)
})

test('minus-3', () => {
  expect(n(10).minus(2, 3).minus(2).toNumber()).toBe(3)
})
