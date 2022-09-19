import N from './utils/N'

export default function(v) {
  const n = new N()

  return arguments.length
    ? N.init.call(n, v)
    : n
}
