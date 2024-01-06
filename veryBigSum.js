function aVeryBigSum(ar) {
  let soma = ar.reduce((acc, current) => acc + current)
  console.log(soma)
}

aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
