function miniMaxSum(arr) {
  arr.sort()
  const min = arr.slice(0, 4).reduce((acc, cur) => acc + cur)
  const max = arr.slice(1, 5).reduce((acc, cur) => acc + cur)
  console.log(min, max)
}

miniMaxSum([7, 69, 2, 221, 8974])
