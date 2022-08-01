# precisioner

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
  - toFixedMax 保留若干位小数输出不补零
  - toThousandth 千分位输出
  - toStructure 结构化输出 (整数位 + 小数位)

- 工具方法
  - isNumber 是否为合法的数字类型 （整型，浮点型，正负，'整型', '浮点型', '正负'）

## 引入

```javascript
import NP from 'precisioner'

// or cdn umd.js
<script src="https://cdn.jsdelivr.net/npm/precisioner@0.0.15/lib/index.min.js"></script>
```

## 基本使用

```javascript
import NP from 'precisioner'

const N = NP()

N.add(0.1, 0.2).toNumber() => 0.3
N.add(0.1, 0.2, 0.3).toNumber() => 0.6

NP(0.1).add(0.2).toNumber() => 0.3
NP(0.1).add(0.2, 0.3).toNumber() => 0.6
NP().add(0.1).toNumber() => 0.1
NP(0.1).toNumber() => 0.1
```

## 解释

- Type: Number | String

----

## API

### 加 (add)

***add(value: Type, ...valueN: Type): N***

```javscript
// 0.1 + 0.2 => 0.30000000000000004

N.add(0.1, 0.2).toNumber() => 0.3
N.add(0.1, 0.2, 5).toNumber() => 5.3
N.add(0.1, 0.2).add(5).toNumber() => 5.3
```

### 减 (minus)

***minus(value: Type, ...valueN: Type): N***

```javscript
// 0.3 - 0.2 => 0.09999999999999998

N.minus(0.3, 0.2).toNumber() => 0.1
N.minus(0.3, 0.2, 2).toNumber() => -1.8
N.minus(0.3, 0.2).minus(2).toNumber() => -1.8
N.minus(0.3, 0.2).toNumber() => 0.1
```

### 乘 (mul)

***mul(value: Type, ...valueN: Type): N***

```javscript
// 0.6 * 3 => 1.7999999999999998

N.mul(0.6, 3).toNumber() => 1.8
N.mul(0.6, 3, 2).toNumber() => 3.6
N.mul(0.6, 3).mul(2).toNumber() => 3.6
```

### 除 (div)

***div(value: Type, ...valueN: Type): N***

```javscript
// 0.6 / 3 => 0.19999999999999998

N.div(0.6, 3).toNumber() => 2
N.div(0.6, 3, 2).toNumber() => 1
N.div(0.6, 3).div(2).toNumber() => 1
N.div(0.6, 3).toNumber() => 2
```

### 幂 (pow)

***pow(value: Type, ...valueN: Type): N***

```javscript
// 0.49 * 0.49 => 0.24009999999999998

N.pow(0.49, 2).toNumber() => 0.2401
N.add(10, 10).pow(2).toNumber() => 400
N.add(10, 10).toNumber() => 20
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

### 保持若干位小数输出-补零 (toFixed)

prev: ***toFixed(dp?: Number = 0, v?: Type): String***

no-prev: ***toFixed(dp: Number, v: Type): String***

```javascript
N.toFixed(2, 123.45) => '123.45'
N.toFixed(10, 123.45) => '123.4500000000'
N.add(0.1, 0.2).toFixed(2) => '0.30'
```

### 保持若干位小数输出-不补零 (toFixedMax)

prev: ***toFixedMax(dp?: Number = 0, v?: Type): Number***

no-prev: ***toFixedMax(dp: Number, v: Type): Number***

```javascript
N.toFixedMax(2, 123.45) => 123.45
N.toFixedMax(10, 123.45) => 123.45
N.add(0.1, 0.2).toFixedMax(2) => 0.3
```

### 千分位输出 (toThousandth)

prev: ***toThousandth(v?: Type): String***

no-prev: ***toThousandth(v: Type): String***

```javascript
const N = NP()
N.toThousandth('12300000.0000001') => '12,300,000.0000001'

NP('12300000.0000001').toThousandth() => '12,300,000.0000001'
NP(4).toThousandth() => '4'
```

### 结构化输出 (toStructure)
分别输出 **整数位** + **小数位(若有)**

prev: ***toStructure(v?: Type): Number[]***

no-prev: ***toStructure(v: Type): Number[]***

```javascript
const N = NP()

N.toStructure(-3.4555) => [-3, -0.4555]

NP('-3.4555').toStructure() => [-3, -0.4555]

NP('-3.00').toStructure() => [-3]
```

### 是否为合法值 (isNumber)

prev: ***isNumber(v?: Type): Boolean***

no-prev: ***isNumber(v: Type): Boolean***

```javascript
const N = NP()

N.isNumber(4.1415) => true
N.isNumber('4.1415') => true

NP(4.1415).isNumber() => true
NP('-3.00').isNumber() => true
NP('-3.x2').isNumber() => false
```

### 混合运算

```javascript
N.add(1, 2).minus(1).add(1).mul(2).div(10).pow(2) => 0.36 
// 等同于 (((1 + 2 - 1 + 1) * 2) / 10)^2
```

