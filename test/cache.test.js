const { n } = require('../lib/index.js')

const _n = n(100.1)

test('cache-1', () => {
  expect(_n.toNumber()).toBe(100.1)
})

test('cache-2', () => {
  expect(_n.add(1, 2).toNumber()).toBe(103.1)
})

test('cache-3', () => {
  expect(_n.isValid()).toBe(true)
})

test('cache-4', () => {
  expect(_n.toFixed(2)).toBe('100.10')
})


