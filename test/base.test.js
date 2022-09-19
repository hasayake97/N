const { n } = require('../lib/index.js')

test('basic-1', () => {
  expect(n('10').toNumber()).toBe(10)
})

test('basic-2', () => {
  expect(n(10).toNumber()).toBe(10)
})

test('basic-3', () => {
  expect(n(-10).toNumber()).toBe(-10)
})

test('basic-4', () => {
  expect(n(1e3).toNumber()).toBe(1000)
})

test('basic-5', () => {
  expect(n(0.1).add(0.2).toNumber()).toBe(0.3)
})

test('basic-6', () => {
  expect(n().add(0.1, 0.2).toNumber()).toBe(0.3)
})

test('basic-7', () => {
  expect(n(NaN).isValid()).toBe(false)
})

test('basic-8', () => {
  expect(n().toNumber()).toBe('Invalid Number')
})
