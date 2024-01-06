function compareTriplets(a, b) {
  let scorePoints = [0, 0]
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      scorePoints[0] += 1
    } else if (a[i] < b[i]) {
      scorePoints[1] += 1
    }
  }
  console.log(scorePoints)
}

compareTriplets([5, 8, 7], [3, 6, 10])
