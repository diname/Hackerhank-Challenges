function isPositive(a) {
  if (a === 0) {
    throw new Error('Zero Error')
  }
  if (a < 0) {
    throw new Error('Negative Error')
  }
  return 'YES'
}

isPositive(2, 0, 6)
