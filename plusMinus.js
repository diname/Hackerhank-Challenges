function plusMinus(arr) {
  let positive = 0
  let negative = 0
  let zero = 0
  let length = arr.length
  arr.forEach((e) => {
    if (e > 0) positive++
    else if (e < 0) negative++
    else zero++
  })
  console.log((positive / length).toFixed(6))
  console.log((negative / length).toFixed(6))
  console.log((zero / length).toFixed(6))
}

plusMinus([-4, 3, -9, 0, 4, 1])
