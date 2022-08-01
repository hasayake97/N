class NExt {
  static Version = '0.0.1'
  static PKG_NAME = 'Big'
  static Falsy = ['', null, NaN, undefined]
  static MESSAGE_ERR = {
    import: 'Big.js is not undefined...',
    args: 'Arguments must be two or more...'
  }

  constructor(Big) {
    this.isImported(Big)
  }

  // 是否为真
  isTruy(v) {
    return !NExt.Falsy.includes(v)
  }

  // 参数校验
  isLegal(newValue) {
    if (newValue.length <= 1) {
      throw new TypeError(NExt.MESSAGE_ERR.args)
    }
  }

  // 是否已加载 Big.js
  isImported(Big) {
    if (!Big) {
      throw new ReferenceError(NExt.MESSAGE_ERR.import)
    }
  }
}

const Big = require('./big.min')

class N extends NExt {
  Big = null
  prev = null

  constructor(Big) {
    super(Big)

    this.Big = Big
  }

  baseExecution(args, exec) {
    let needArgs = [...args]

    // 无前置，检测此次操作参数是否合法
    if (!this.isTruy(this.prev)) { this.isLegal(args) }

    if (this.isTruy(this.prev)) {
      needArgs = [this.prev, ...args]
    }

    this.prev = needArgs.slice(1)
      .reduce((tot, ceil) => tot[exec](ceil), new this.Big(needArgs[0]))

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
    this.prev = new this.Big(this.value(v)).sqrt()

    return this
  }

  /**
   * 输出-四舍五入
   */
  toRound(v) {
    return new this.Big(this.value(v)).round().toNumber()
  }

  /**
   * 输出-保留位数
   */
  toFixed(dp = 0, v) {
    return new this.Big(this.value(v)).toFixed(dp)
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
    this.prev = new this.Big(v)

    return this
  }
}

export {
  Big,
  N
}
