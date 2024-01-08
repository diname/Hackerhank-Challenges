function timeConversion(s) {
  let periodo = s.slice(-2).toUpperCase()
  let arr = s.slice(0, -2).split(':')

  if (periodo === 'AM' && arr[0] === '12') {
    arr[0] = '00'
  } else if (periodo === 'PM') {
    arr[0] = (arr[0] % 12) + 12
  }
  console.log(arr.join(':'))
  // return arr.join(':')
}

timeConversion('07:05:45pm')
