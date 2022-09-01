const NP = require('../lib/index.umd')

// toNumber
test('output/toNumber:init', () => {
  expect(NP(10).toNumber()).toBe(10)
})

test('output/toNumber:prev', () => {
  expect(NP(10).toNumber(11)).toBe(11)
})

test('output/toNumber:parameter-missing', () => {
  expect(() => NP().toNumber()).toThrow()
})

// toRound
test('output/toRound:init', () => {
  expect(NP(123.45).toRound()).toBe(123)
})

test('output/toRound:prev', () => {
  expect(NP(123.45).toRound(111.111)).toBe(111)
})

test('output/toRound:parameter-missing', () => {
  expect(() => NP().toRound()).toThrow()
})

// toFixed
test('output/toFixed:default', () => {
  expect(NP().toFixed(2, 123.455)).toBe('123.46')
})

test('output/toFixed:prev', () => {
  expect(NP(444.123).toFixed(2, 123.455)).toBe('123.46')
})

test('output/toFixed:init-1', () => {
  expect(NP(0.3).toFixed(2)).toBe('0.30')
})

test('output/toFixed:init-2', () => {
  expect(NP(0.3).toFixed(3)).toBe('0.300')
})

test('output/toFixed:parameter-missing', () => {
  expect(() => NP().toFixed(2)).toThrow()
})

// toFixedMax
test('output/toFixedMax:default', () => {
  expect(NP().toFixedMax(2, 123.455)).toBe(123.46)
})

test('output/toFixedMax:default-1', () => {
  expect(NP().toFixedMax(3, 123.455)).toBe(123.455)
})

test('output/toFixedMax:default-2', () => {
  expect(NP().toFixedMax(10, 123.455)).toBe(123.455)
})

test('output/toFixedMax:prev', () => {
  expect(NP(4.1231).toFixedMax(2, 123.455)).toBe(123.46)
})

test('output/toFixedMax:init', () => {
  expect(NP(123.455).toFixedMax(10)).toBe(123.455)
})

test('output/toFixedMax:init-1', () => {
  expect(NP(123.555).toFixedMax()).toBe(124)
})

test('output/toFixedMax:parameter-missing', () => {
  expect(() => NP().toFixedMax()).toThrow()
})

// toStructure
test('output/toStructure:default', () => {
  expect(NP().toStructure(-3.4555)).toStrictEqual([-3, -0.4555])
})

test('output/toStructure:default-1', () => {
  expect(NP().toStructure('-3.4556')).toStrictEqual([-3, -0.4556])
})

test('output/toStructure:prev', () => {
  expect(NP(-10.123).toStructure(-3.4555)).toStrictEqual([-3, -0.4555])
})

test('output/toStructure:init', () => {
  expect(NP(-3.4555).toStructure()).toStrictEqual([-3, -0.4555])
})

test('output/toStructure:init', () => {
  expect(() => NP().toStructure()).toThrow()
})

// isNumber
test('output/isNumber:default', () => {
  expect(NP().isNumber(123)).toBe(true)
})

test('output/isNumber:default-1', () => {
  expect(NP().isNumber('123.12')).toBe(true)
})

test('output/isNumber:default-2', () => {
  expect(NP().isNumber(undefined)).toBe(false)
})

test('output/isNumber:prev', () => {
  expect(NP(123).isNumber('xxx')).toBe(false)
})

test('output/isNumber:init', () => {
  expect(NP('123').isNumber()).toBe(true)
})

test('output/isNumber:parameter-missing', () => {
  expect(NP().isNumber()).toBe(false)
})

test('output/isNumber:throw', () => {
  expect(() => NP('xxx').isNumber(123)).toThrow()
})

