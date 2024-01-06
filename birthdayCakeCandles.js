function birthdayCakeCandles(candles) {
  const max = Math.max(...candles)
  const result = candles.filter((e) => e === max)
  console.log(result.length)
}

birthdayCakeCandles([3, 2, 1, 3])
