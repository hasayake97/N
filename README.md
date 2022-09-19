# precisioner

**基于 [Big.js](http://mikemcl.github.io/big.js/)**

**设计为链式调用的方式，我们把计算链条中的每个节点作为一个 task，以 pipeline 的形式调用每个 task 计算。**

### 版本日志

- 0.1.0: 构建目标改为 ES5，同时释出 ESM 与 cjs 格式以支持不同的宿主环境。
- 0.2.0: 添加默认导出，命名导出 N -> n。
- 0.3.0
  - README.md 修改。
  - isNumber 命名改为 isValid
  - 代码重构，将异常抛出中断程序流的设计改为吞没异常不影响后续操作流程。

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
  - isValid 是否为合法的数字类型 （整型，浮点型，正负，'整型', '浮点型', '正负'）

## 引入

```javascript
import { n } from 'precisioner' // named export

import n from 'precisioner' // default export

/**
 * umd cdn
 * mount: window.precisioner.n / window.precisioner.default
 */
<script src="https://cdn.jsdelivr.net/npm/precisioner@0.3.5/lib/index.min.js"></script>
```

## 基本使用

```javascript
import { n } from 'precisioner'

n('10').toNumber() => 10

n(10).toNumber() => 10

n(-10).toNumber() => -10

n(1e3).toNumber() => 1000

n(0.1).add(0.2).toNumber() => 0.3

n().add(0.1, 0.2).toNumber() => 0.3

n('xxa').isValid() => false

n().toNumber() => 'Invalid Number'
```

## 解释

- Type: Number | String

----

## API

### 加 (add)

***add(value: Type, ...valueN: Type): _n***

```javscript
// 0.1 + 0.2 => 0.30000000000000004

n().add(0.1, 0.2).toNumber() => 0.3

n().add(0.1).add(0.2).toNumber() => 0.3

n(0.1).add(0.1, 0.2).add(0.6).toNumber() => 1
```

### 减 (minus)

***minus(value: Type, ...valueN: Type): _n***

```javscript
// 0.3 - 0.2 => 0.09999999999999998

n().minus(0.3, 0.2).toNumber() => 0.1

n(0.3).minus(0.2).toNumber() => 0.1

n(10).minus(2, 3).minus(2).toNumber() => 3
```

### 乘 (mul)

***mul(value: Type, ...valueN: Type): _n***

```javscript
// 0.6 * 3 => 1.7999999999999998

n().mul(0.6, 3).toNumber() => 1.8

n(0.6).mul(3).toNumber() => 1.8

n(2).mul(3, 4).mul(10).toNumber() => 240
```

### 除 (div)

***div(value: Type, ...valueN: Type): _n***

```javscript
// 0.6 / 3 => 0.19999999999999998

n().div(0.6, 3).toNumber() => 0.2

n(0.6).div(3).toNumber() => 0.2

n(100).div(2, 2).div(5).toNumber() => 5
```

### 幂 (pow)

***pow(value: Type, ...valueN: Type): _n***

```javscript
// 0.49 * 0.49 => 0.24009999999999998

n().pow(0.49, 2).toNumber() => 0.2401

n(0.49).pow(2).toNumber() => 0.2401

n(2).pow(2, 2).pow(3).toNumber() => 4096  

n().pow(0.49).toNumber() => 0.49
```

### 开方 (sqrt)

prev: ***sqrt(v?: Type): _n***

no-prev: ***sqrt(v: Type): _n***

```javscript
n().sqrt(0.2401).toNumber() => 0.49

n(0.2401).sqrt().toNumber() => 0.49

n(4).sqrt(0.2401).toNumber() => 0.49
```

## 输出

**每个输出 API 本身也被设计为接受值的传入，当前置任务有值，输出 API 本身也传入值时，将会以传入值为最高优先级输出。**

### 以 Number 格式输出 (toNumber)

prev: ***toNumber(v? Type): Number***

```javascript
n(10).toNumber() => 10

n().toNumber(10) => 10

n(2).toNumber(3) => 3

n(1e3).toNumber() => 1000
```

### 四舍五入输出 (toRound)

prev: ***toRound(v?: Type): Number***

noPrev: ***toRound(v: Type): Number***

```javascript
// Math.round(123.45) => 123
// Math.round(123.55) => 124
// Math.round(123.65) => 124

n(123.45).toRound() => 123

n().toRound(123.55) => 124

n(1000).toRound(123.65) => 124
```

### 保持若干位小数输出-补零 (toFixed)

prev: ***toFixed(dp?: Number = 0, v?: Type): String***

no-prev: ***toFixed(dp: Number, v: Type): String***

```javascript
n(123.44).toFixed(1) => '123.4'

n(123.45).toFixed(1) => '123.5'

n(123.45).toFixed(2) => '123.45'

n(123.45).toFixed(10) => '123.4500000000'

n(123.45).toFixed(10, 2) => '2.0000000000'
```

### 保持若干位小数输出-不补零 (toFixedMax)

prev: ***toFixedMax(dp?: Number = 0, v?: Type): Number***

no-prev: ***toFixedMax(dp: Number, v: Type): Number***

```javascript
n(123.44).toFixedMax(1) => 123.4

n(123.45).toFixedMax(1) => 123.5

n(123.45).toFixedMax(10) => 123.45

n().toFixedMax(10, 123.45) => 123.45

n(123.45).toFixedMax(10, 121.121) => 121.121
```

### 千分位输出 (toThousandth)

prev: ***toThousandth(v?: Type): String***

no-prev: ***toThousandth(v: Type): String***

```javascript
n(10000000).toThousandth() => '10,000,000'

n().toThousandth(10000000) => '10,000,000'

n(20000000).toThousandth(10000000) => '10,000,000'

n(10000000.9988356).toThousandth() => '10,000,000.9988356'
```

### 结构化输出 (toStructure)
分别输出 **整数位** + **小数位(若有)**

prev: ***toStructure(v?: Type): Number[]***

no-prev: ***toStructure(v: Type): Number[]***

```javascript
n(3.1415).toStructure() => [3, 0.1415]

n().toStructure(3.1415) => [3, 0.1415]

n(3.1415).toStructure(3.66666) => [3, 0.66666]

n(3.00).toStructure() => [3]

n(-3.00).toStructure() => [-3]
```

### 是否为合法值 (isValid)

prev: ***isValid(v?: Type): Boolean***

no-prev: ***isValid(v: Type): Boolean***

```javascript
n().isValid() => false

n(undefined).isValid() => false

n(NaN).isValid() => false

n(1).isValid() => true

n(1.2345).isValid() => true

n('-1.2345').isValid() => true

n(1e3).isValid() => true

n(NaN).isValid(3) => true

n(3).isValid(NaN) => false
```

### 缓存运算
```javascript
const _n = n(100.1)

_n.toNumber() => 100.1

_n.add(1, 2) => 103.1

_n.isValid() => true

_n.toFixed(2) => '100.10'
```

### 混合运算

```javascript
// 等同于 (((1 + 2 - 1 + 1) * 2) / 10)^2

n().add(1, 2).minus(1).add(1).mul(2).div(10).pow(2).toNumber() => 0.36 
```

### 异常处理

计算过程中出现的异常将会被内部吞没处理

异常发生时，将会导致此次后续计算任务除 **init** 外全部被抛弃直接返回 **'Invalid Number'**

若在此次计算任务中存在 **isValid** 任务，将会返回 false

```javascript
n().toNumber() => 'Invalid Number'

n().add().toNumber() => 'Invalid Number'

n(NaN).add(1).toNumber() => 'Invalid Number'

n(1).add(NaN).toNumber() => 'Invalid Number'

n(NaN).add(1).isValid() => false

n(1).add(NaN).isValid() => false

n(1).add(NaN).isValid(10) => false
```


