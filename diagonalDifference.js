function diagonalDifference(arr) {
  // let LeftForRight = [arr[0][0], arr[1][1], arr[2][2]].reduce(
  //   (acc, current) => acc + current
  // )
  // let RightForLeft = [arr[0][2], arr[1][1], arr[2][0]].reduce(
  //   (acc, current) => acc + current
  // )
  // let differenceBetween = RightForLeft - LeftForRight
  // console.log(RightForLeft)

  let d1 = 0
  let d2 = 0

  for (let i = 0; i < arr.length; i++) {
    d1 += arr[i][i]
    d2 += arr[i][arr.length - i - 1]
  }
  console.log(d1)
  console.log(d2)
}

diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
])
