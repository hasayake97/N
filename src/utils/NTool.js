import Big from 'big.js'

export class NTask {
  constructor() {
    this.queue = []
  }

  static text = {
    init: 'init',
    isValid: 'isValid',
    invalid: 'Invalid Number',
    err: 'Error: [big.js] Invalid number',
  }

  pushTask (task, name) {
    this.queue.push({ name, t: task })

    return this
  }

  static execBefore(task) {
    const { isValid, init } = NTask.text

    return task.reduce((output, t, idx) => {
      // 任务队列中是否存在 isValid
      if (t.name === isValid) { output.hasValid = true }

      // 是否存在 init
      if (idx === 0 && t.name === init) { output.initTask = t }

      return output
    }, { hasValid: false, initTask: null })
  }

  exec () {
    let result = null
    const { hasValid, initTask } = NTask.execBefore(this.queue)

    try {
      result = this.queue.shift().t()

      /**
       * 先进先出
       * pipeline 计算
       */
      while (this.queue.length) {
        result = this.queue.shift().t(result)
      }
    } catch (err) {
      /**
       * 吞没异常
       * 若 task 中存在 isValid，返回 false
       * 否则返回 NTask.text.invalid
       */
      if (err.toString() === NTask.text.err) {
        this.queue = []
        result = hasValid ? false : NTask.text.invalid
      }
    }

    // 若存在 init，将始终会被保留在 task 中
    initTask && this.pushTask(initTask.t, initTask.name)

    return result
  }
}

export class NExt {
  static version = '0.0.2'

  static regs = {
    thousand: /(?=\B(\d{3})+$)/g,
    number: /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i
  }

  static toBig(v) {
    return (v instanceof Big) ? v : new Big(v)
  }

  static baseExecution(args, exec) {
    return args.slice(1)
      .reduce(
        (tot, cell) => tot[exec](cell),
        NExt.toBig(args[0])
      )
  }

  static isNumber(v) {
    return NExt.regs.number.test(v)
  }

  static helper(args, exec) {
    const _args = [...args]

    return _args.length
      ? NExt[exec].bind(null, _args[0])
      : NExt[exec]
  }

  static init(v) { return v }

  static sqrt(prev) { return NExt.toBig(prev).sqrt() }

  static toNumber(prev) { return NExt.toBig(prev).toNumber() }

  static toRound(prev) { return NExt.toBig(prev).round().toNumber() }

  static toFixed(dp, prev) { return NExt.toBig(prev).toFixed(dp) }

  static toFixedMax(dp, prev) { return parseFloat(NExt.toBig(prev).toFixed(dp)) }

  static toThousandth(prev) {
    const _prev = NExt.toBig(prev).toNumber()

    if (_prev % 1 === 0) {
      return String(_prev).replace(NExt.regs.thousand, ',')
    }

    if (_prev % 1 !== 0) {
      const _v = String(_prev).split('.')

      return _v[0].replace(NExt.regs.thousand, ',') + `.${_v[1]}`
    }
  }

  static toStructure(prev) {
    const _prev = NExt.toBig(prev)

    return [
      Math.trunc(_prev.toNumber()),
      _prev.mod(1).toNumber()
    ].filter(Boolean)
  }

  static isValid(prev) { return NExt.isNumber(prev) }
}

