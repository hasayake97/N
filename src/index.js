import NCore from './utils/NCore'


const NP = function(v) {
  const N = new NCore()

  return v === undefined
    ? N
    : NCore.init.call(N, v)
}

export default NP
