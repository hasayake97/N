const { n } = require('../lib/index.js')

// toNumber
test('output/toNumber-1', () => {
  expect(n(10).toNumber()).toBe(10)
})

test('output/toNumber-2', () => {
  expect(n().toNumber(10)).toBe(10)
})

test('output/toNumber-3', () => {
  expect(n(2).toNumber(3)).toBe(3)
})

test('output/toNumber-4', () => {
  expect(n(1e3).toNumber()).toBe(1000)
})

// toRound
test('output/toRound-1', () => {
  expect(n(123.45).toRound()).toBe(123)
})

test('output/toRound-2', () => {
  expect(n().toRound(123.55)).toBe(124)
})

test('output/toRound-3', () => {
  expect(n(1000).toRound(123.65)).toBe(124)
})

// toFixed
test('output/toFixed-1', () => {
  expect(n(123.44).toFixed(1)).toBe('123.4')
})

test('output/toFixed-2', () => {
  expect(n(123.45).toFixed(1)).toBe('123.5')
})

test('output/toFixed-3', () => {
  expect(n(123.45).toFixed(2)).toBe('123.45')
})

test('output/toFixed-4', () => {
  expect(n(123.45).toFixed(10)).toBe('123.4500000000')
})

test('output/toFixed-5', () => {
  expect(n(123.45).toFixed(10, 2)).toBe('2.0000000000')
})

// toFixedMax
test('output/toFixedMax-1', () => {
  expect(n(123.44).toFixedMax(1)).toBe(123.4)
})

test('output/toFixedMax-2', () => {
  expect(n(123.45).toFixedMax(1)).toBe(123.5)
})

test('output/toFixedMax-3', () => {
  expect(n(123.45).toFixedMax(10)).toBe(123.45)
})

test('output/toFixedMax-4', () => {
  expect(n().toFixedMax(10, 123.45)).toBe(123.45)
})

test('output/toFixedMax-5', () => {
  expect(n(123.45).toFixedMax(10, 121.121)).toBe(121.121)
})

// toThousandth
test('output/toThousandth-1', () => {
  expect(n(10000000).toThousandth()).toBe('10,000,000')
})

test('output/toThousandth-2', () => {
  expect(n().toThousandth(10000000)).toBe('10,000,000')
})

test('output/toThousandth-3', () => {
  expect(n(20000000).toThousandth(10000000)).toBe('10,000,000')
})

test('output/toThousandth-3', () => {
  expect(n(10000000.9988356).toThousandth()).toBe('10,000,000.9988356')
})

// toStructure
test('output/toStructure-1', () => {
  expect(n(3.1415).toStructure()).toStrictEqual([3, 0.1415])
})

test('output/toStructure-2', () => {
  expect(n().toStructure(3.1415)).toStrictEqual([3, 0.1415])
})

test('output/toStructure-3', () => {
  expect(n(3.1415).toStructure(3.66666)).toStrictEqual([3, 0.66666])
})

test('output/toStructure-4', () => {
  expect(n(3.00).toStructure()).toStrictEqual([3])
})

test('output/toStructure-5', () => {
  expect(n(-3.00).toStructure()).toStrictEqual([-3])
})

// isValid
test('output/isValid-1', () => {
  expect(n().isValid()).toBe(false)
})

test('output/isValid-2', () => {
  expect(n(undefined).isValid()).toBe(false)
})

test('output/isValid-3', () => {
  expect(n(NaN).isValid()).toBe(false)
})

test('output/isValid-4', () => {
  expect(n(1).isValid()).toBe(true)
})

test('output/isValid-5', () => {
  expect(n(1.2345).isValid()).toBe(true)
})

test('output/isValid-6', () => {
  expect(n('-1.2345').isValid()).toBe(true)
})

test('output/isValid-7', () => {
  expect(n(1e3).isValid()).toBe(true)
})

test('output/isValid-8', () => {
  expect(n(NaN).isValid(3)).toBe(true)
})

test('output/isValid-9', () => {
  expect(n(3).isValid(NaN)).toBe(false)
})
