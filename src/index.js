import NCore from "./utils/NCore"

const NP = function(v) {
  const N = new NCore()

  return v ? NCore.init.call(N, v) : N
}

export default NP
