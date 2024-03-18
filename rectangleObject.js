function Rectangle(a, b) {
  const length = a
  const width = b
  const perimeter = 2 * (length + width)
  const area = length * width

  let rectangleObj = {
    length,
    width,
    perimeter,
    area
  }

  return rectangleObj
}

Rectangle(4, 5)
