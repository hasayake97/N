const { n } = require('../lib/index.js')

const invalid = 'Invalid Number'

test('abnor-1', () => {
  expect(n().toNumber()).toBe(invalid)
})

test('abnor-2', () => {
  expect(n().add().toNumber()).toBe(invalid)
})

test('abnor-3', () => {
  expect(n(NaN).add(1).toNumber()).toBe(invalid)
})

test('abnor-4', () => {
  expect(n(1).add(NaN).toNumber()).toBe(invalid)
})

test('abnor-5', () => {
  expect(n(NaN).add(1).isValid()).toBe(false)
})

test('abnor-6', () => {
  expect(n(1).add(NaN).isValid()).toBe(false)
})

test('abnor-7', () => {
  expect(n(1).add(NaN).isValid(10)).toBe(false)
})
