function bandingkanAngka (angka1, angka2) {
  if (angka1 < angka2) {
    console.log(true)
  } else if (angka1 > angka2) {
    console.log(false)
  } else {
    console.log(-1)
  }

  return ' '
}

// TEST CASES
console.log(bandingkanAngka(5, 8)) // true
console.log(bandingkanAngka(5, 3)) // false
console.log(bandingkanAngka(4, 4)) // -1
console.log(bandingkanAngka(3, 3)) // -1
console.log(bandingkanAngka(17, 2)) // false
