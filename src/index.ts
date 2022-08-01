import NCore from "./utils/NCore"

const N = function(v) {
  return v ? new NCore().init(v) : new NCore()
}

export default N
