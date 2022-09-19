import { NExt, NTask } from './NTool'

export default class N extends NTask {
  constructor() { super() }

  // 基本四则运算
  static fourCalculations(init, exec) {
    if (init.length) {
      return this.pushTask(
        (...prev) => NExt.baseExecution(
          prev.length ? [...prev, ...init] : [...init],
          exec
        ),
        exec
      )
    }

    return this
  }

  static init (v) {
    return this.pushTask(NExt.init.bind(null, v), 'init')
  }

  // 加
  add() {
    return N.fourCalculations.call(this, arguments, 'plus')
  }

  // 减
  minus() {
    return N.fourCalculations.call(this, arguments, 'minus')
  }

  // 乘
  mul() {
    return N.fourCalculations.call(this, arguments, 'times')
  }

  // 除
  div() {
    return N.fourCalculations.call(this, arguments, 'div')
  }

  // 幂
  pow() {
    return N.fourCalculations.call(this, arguments, 'pow')
  }

  // 开方
  sqrt() {
    return this.pushTask(NExt.helper(arguments, 'sqrt'), 'sqrt')
  }

  // 输出
  toNumber() {
    return this
      .pushTask(NExt.helper(arguments, 'toNumber'), 'toNumber')
      .exec()
  }

  // 输出-四舍五入
  toRound() {
    return this
      .pushTask(NExt.helper(arguments, 'toRound'), 'toRound')
      .exec()
  }

  // 输出-保留指定位数
  toFixed(dp = 0, v) {
    const _toFixed = arguments.length === 2
      ? () => NExt.toFixed(dp, v)
      : prev => NExt.toFixed(dp, prev)

    return this.pushTask(_toFixed, 'toFixed').exec()
  }

  // 输出-保留指定位数 (非补零)
  toFixedMax(dp = 0, v) {
    const _toFixedMax = arguments.length === 2
      ? () => NExt.toFixedMax(dp, v)
      : prev => NExt.toFixedMax(dp, prev)

    return this.pushTask(_toFixedMax, 'toFixedMax').exec()
  }

  // 输出-千分位
  toThousandth() {
    return this
      .pushTask(NExt.helper(arguments, 'toThousandth'), 'toThousandth')
      .exec()
  }

  // 输出-结构化
  toStructure() {
    return this
      .pushTask(NExt.helper(arguments, 'toStructure'), 'toStructure')
      .exec()
  }

  // 值是否合法
  isValid() {
    return this
      .pushTask(NExt.helper(arguments, 'isValid'), 'isValid')
      .exec()
  }
}


