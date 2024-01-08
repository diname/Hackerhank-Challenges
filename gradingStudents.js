function gradingStudents(grades) {
  return grades.map((g) => {
    let diff = 5 - (g % 5)
    if (diff < 3 && g >= 38) {
      g += diff
    }
    return g
  })
}

gradingStudents([73, 67, 38, 33])
