# N

**基于 [Big.js](http://mikemcl.github.io/big.js/)**

**支持链式调用**

## 支持
- 运算
  - 四则运算 (加、减、乘、除)
  - 幂运算，幂逆运算(开方)
- 输出
  - toNumber 正常输出
  - toRound 四舍五入输出
  - toFixed 保留若干位小数输出

## 解释

- Type: Number | String

- prev: 在进行该操作前，存在前置操作。

- no-prev: 在进行该操作前，不存在前置操作。此操作为首先操作。

----

## 引入

```javascript
import { Big, N } from 'precisioner'

const _N = new N(Big)
```

## API

### 加 (add)

prev: ***add(...value?: Type): N***

noPrev: ***add(value: Type, value1: Type, ...valueN: Type): N***

```javscript
// 0.1 + 0.2 => 0.30000000000000004

N.add(0.1, 0.2).toNumber() => 0.3
N.add(0.1, 0.2, 5).toNumber() => 5.3
N.add(0.1, 0.2).add(5).toNumber() => 5.3
```

### 减 (minus)

prev: ***minus(...valueN?: Type): N***

noPrev: ***minus(value: Type, value1: Type, ...valueN: Type): N***

```javscript
// 0.3 - 0.2 => 0.09999999999999998

N.minus(0.3, 0.2).toNumber() => 0.1
N.minus(0.3, 0.2, 2).toNumber() => -1.8
N.minus(0.3, 0.2).minus(2).toNumber() => -1.8
N.minus(0.3, 0.2).minus().toNumber() => 0.1
```

### 乘 (mul)

prev: ***mul(...valueN?: Type): N***

noPrev: ***mul(value: Type, value1: Type, ...valueN: Type): N***

```javscript
// 0.6 * 3 => 1.7999999999999998

N.mul(0.6, 3).toNumber() => 1.8
N.mul(0.6, 3, 2).toNumber() => 3.6
N.mul(0.6, 3).mul(2).toNumber() => 3.6
```

### 除 (div)

prev: ***div(...valueN?: Type): N***

noPrev: ***div(value: Type, value1: Type, ...valueN: Type): N***

```javscript
// 0.6 / 3 => 0.19999999999999998

N.div(0.6, 3).toNumber() => 2
N.div(0.6, 3, 2).toNumber() => 1
N.div(0.6, 3).div(2).toNumber() => 1
N.div(0.6, 3).div().toNumber() => 2
```

### 幂 (pow)

prev: ***pow(...valueN?: Type): N***

noPrev: ***pow(value: Type, value1: Type, ...valueN: Type): N***

```javscript
// 0.49 * 0.49 => 0.24009999999999998

// no-prev
N.pow(0.49, 2).toNumber() => 0.2401

// prev
N.add(10, 10).pow(2).toNumber() => 400
N.add(10, 10).pow().toNumber() => 20
```

### 开方 (sqrt)

prev: ***sqrt(v?: Type): N***

no-prev: ***sqrt(v: Type): N***

```javscript
// no-prev
N.sqrt(0.2401).toNumber() => 0.49

// prev
N.pow(0.49, 2).sqrt().toNumber() => 0.49
```

## 输出

### 以 Number 格式输出 (toNumber)

prev: ***toNumber(): Number***

```javascript
// (0.1 + 0.2) * 2
// 等同于
N.add(0.1, 0.2).mul(2).toNumber() => 0.6
```

### 四舍五入输出 (toRound)

prev: ***toRound(v?: Type): Number***

noPrev: ***toRound(v: Type): Number***

```javascript
// Math.round(123.45) => 123
// Math.round(123.55) => 124
// Math.round(123.65) => 124

N.toRound(123.45) => 123
N.toRound(123.55) => 124
N.toRound(123.65) => 124
N.add(123, 0.45).toRound() => 123
```

### 保持若干位小数输出 (toFixed)

prev: ***toFixed(dp?: Number = 0, v?: Type): String***

no-prev: ***toFixed(dp: Number, v: Type): String***

```javascript
N.toFixed(2, 123.45) => '123.45'
N.toFixed(10, 123.45) => '123.4500000000'
N.add(0.1, 0.2).toFixed(2) => '0.30'
```

### 混合运算

```javascript
N.add(1, 2).minus(1).add(1).mul(2).div(10).pow(2) => 0.36 
// 等同于 (((1 + 2 - 1 + 1) * 2) / 10)^2
```

## 特殊的

### init

***init(v: Type): N***

前置占位，用以解决在 no-prev 情况下，以 prev 的形式传参。

```javascript
// not-allowed 
N.add(1).add(2).toNumber() // add(1) 将会报错，无第二参数

// allowed
N.add(1, 2).toNumber()
N.add(1, 2).add(3).toNumber()

// 借助 init
N.init(1).add(2).toNumber
```
