import Big from 'big.js'
import NExt from './NExt'

class NCore extends NExt {
  constructor() {
    super()

    this.prev = null
  }

  baseExecution(args, exec) {
    if (NExt.isLegal.call(this, args)) {
      const _args = this.prev ? [this.prev, ...args] : [...args]

      this
        .prev = _args.slice(1)
        .reduce(
          (tot, ceil) => tot[exec](ceil),
          NCore.toBig(_args[0])
        )
    }

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
    v && NExt.isLegal.call(this, v)

    this.prev = new Big(this.value(v)).sqrt()

    return this
  }

  /**
   * 输出-四舍五入
   */
  toRound(v) {
    v && NExt.isLegal.call(this, v)

    return NCore.toBig(this.value(v)).round().toNumber()
  }

  /**
   * 输出-保留位数
   */
  toFixed(dp = 0, v) {
    v && NExt.isLegal.call(this, v)

    return NCore.toBig(this.value(v)).toFixed(dp)
  }

  /**
   * 输出-保留有限位数
   */
  toFixedMax(dp = 0, v) {
    v && NExt.isLegal.call(this, v)

    return parseFloat(NCore.toBig(this.value(v)).toFixed(dp))
  }

  /**
   * 输出
   */
  toNumber() {
    return NCore.toBig(this.value()).toNumber()
  }

  /**
   * 千分位输出
   */
  toThousandth(th) {
    th && NExt.isLegal.call(this, th)

    const v = NCore.toBig(this.value(th)).toNumber()

    let _v = []
    if (NExt.isType(v, 'Number')) {
      // v % 1 === 0 => int
      _v = v % 1 === 0
        ? [String(v)]
        : String(v).split('.')
    }

    if (NExt.isType(v, 'String')) {
      _v = String(v).split('.')
    }

    return _v[1]
      ? `${_v[0]}`.replace(NExt.Regs.thousand, ',') + `.${_v[1]}`
      : `${_v[0]}`.replace(NExt.Regs.thousand, ',')
  }

  /**
   * 结构化输出
   */
  toStructure(v) {
    v && NExt.isLegal.call(this, v)

    const _v = NCore.toBig(this.value(v)).toNumber()

    return [
      Math.trunc(_v),
      NCore.toBig(_v).mod(1).toNumber()
    ].filter(Boolean)
  }

  // 是否为数字
  isNumber(v) {
    return NExt.isNumber(this.value(v))
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
  static init(v) {
    this.prev = v

    return this
  }

  static toBig(v) {
    return v.constructor === Big ? v : new Big(v)
  }
}

export default NCore
