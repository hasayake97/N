import Big from 'big.js'
import NExt from './NExt'


class NCore extends NExt {
  prev = null
  constructor() {
    super()

    this.prev = null
  }

  baseExecution(args, exec) {
    let needArgs = [...args]

    // 无前置，检测此次操作参数是否合法
    if (!this.isTruy(this.prev)) { this.isLegal(args) }

    if (this.isTruy(this.prev)) {
      needArgs = [this.prev, ...args]
    }

    this.prev = needArgs.slice(1)
      .reduce((tot, ceil) => tot[exec](ceil), new Big(needArgs[0]))

    return this
  }

  /**
   * 加
   */
  add() {
    return this.baseExecution(arguments, 'plus')
  }

  /**
   * 减
   */
  minus() {
    return this.baseExecution(arguments, 'minus')
  }

  /**
   * 乘
   */
  mul() {
    return this.baseExecution(arguments, 'times')
  }

  /**
   * 除
   */
  div() {
    return this.baseExecution(arguments, 'div')
  }

  /**
   * 幂
   */
  pow() {
    return this.baseExecution(arguments, 'pow')
  }

  /**
   * 开方
   */
  sqrt(v) {
    this.prev = new Big(this.value(v)).sqrt()

    return this
  }

  /**
   * 输出-四舍五入
   */
  toRound(v) {
    return new Big(this.value(v)).round().toNumber()
  }

  /**
   * 输出-保留位数
   */
  toFixed(dp = 0, v) {
    return new Big(this.value(v)).toFixed(dp)
  }

  /**
   * 输出
   */
  toNumber() {
    return this.value().toNumber()
  }

  /**
   * 获取 value
   * @param v null | Object
   * @returns {null | Object}
   */
  value(v = this.prev) {
    this.prev = null

    return v
  }

  /**
   * 初始化首值
   * @param v Number | String
   * @returns {N}
   */
  init(v) {
    this.prev = new Big(v)

    return this
  }
}

export default NCore
