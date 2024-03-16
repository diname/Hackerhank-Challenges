function reverseString(s) {
  let str = s
  try {
    let arr = s.split('').reverse()
    str = arr.join('')
  } catch (error) {
    console.log(error.message)
  } finally {
    console.log(str)
  }
}
reverseString('1234')
