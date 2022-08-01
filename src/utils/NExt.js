interface IMessage {
  import: string
  args: string
}


class NExt {
  static Version = '0.0.1'
  static Falsy = ['', null, NaN, undefined]
  static MESSAGE_ERR = {
    import: 'Big.js is not undefined...',
    args: 'Arguments must be two or more...',
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
}



export default NExt
