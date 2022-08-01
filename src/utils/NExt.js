class NExt {
  static Version = '0.0.1'

  static Regs = {
    thousand: /(?=\B(\d{3})+$)/g,
    number: /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/
  }

  static MESSAGE_ERR = {
    import() {
      return {
        e: ReferenceError,
        t: 'Big.js is not undefined...'
      }
    },

    args(v) {
      return {
        e: Error,
        t: 'Arguments must be one or more...'
      }
    },

    number(v) {
      return {
        e: TypeError,
        t: v + ' is not a valid number format...'
      }
    }
  }

  // 抛出错误
  static throwError(k, v) {
    const Err = NExt.MESSAGE_ERR[k](v)

    throw new Err.e(Err.t)
  }

  // 判断类型
  static isType(source, expect) {
    return Object.prototype.toString.call(source).slice(8, -1) === expect
  }

  static isNumber(v) {
    return NExt.Regs.number.test(v)
  }

  // 参数校验
  static isLegal(v) {
    const wv = NExt.isType(v, 'Arguments') ? v : [v]

    if (!wv.length) { NExt.throwError('args') }

    for (const _v of wv) {
      if (!NExt.isNumber(_v)) {
        NExt.throwError('number', _v)
      }
    }

    return true
  }


}

export default NExt
