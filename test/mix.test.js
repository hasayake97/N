const NP = require('../lib/index.umd')

test('mix:case-1', () => {
  expect(NP(1).add(2, 3).mul(1).toNumber()).toBe(6)
})

test('mix:case-2', () => {
  expect(NP(1).add(2, 3).mul(1).div(10).toNumber()).toBe(0.6)
})

test('mix:case-3', () => {
  expect(NP().add(2, 3).pow(2).toNumber()).toBe(25)
})

test('mix:case-4', () => {
  expect(NP(2).add(2, 3).pow(2).mul(10).div(2).toNumber()).toBe(245)
})
