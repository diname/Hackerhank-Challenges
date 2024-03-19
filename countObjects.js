function getCount(objects) {
  const values = objects.filter((value) => value.x === value.y)

  return values.length
}

getCount([
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 4, y: 5 }
])
