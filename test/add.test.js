const { n } = require('../lib/index.js')

test('add-1', () => {
  expect(n().add(0.1, 0.2).toNumber()).toBe(0.3)
})

test('add-2', () => {
  expect(n().add(0.1).add(0.2).toNumber()).toBe(0.3)
})

test('add-2', () => {
  expect(n(0.1).add(0.1, 0.2).add(0.6).toNumber()).toBe(1)
})
