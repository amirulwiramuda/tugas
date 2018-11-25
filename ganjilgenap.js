console.log('Odd/even number')
for (i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + ' Ini adalah angka genap')
  } else {
    console.log(i + ' Ini adalah angka ganjil')
  }
}

console.log(' ')
console.log('KELIPATAN 3')
for (i = 1; i <= 100; i += 2) {
  if (i % 3 !== 0) {
    console.log(i + ' Bukan kelipatan 3')
  } else if (i % 3 === 0) {
    console.log(i + ' Adalah kelipatan 3')
  }
}
console.log(' ')
console.log('KELIPATAN 5')
for (i = 1; i <= 100; i += 5) {
  if (i % 6 !== 0) {
    console.log(i + ' Bukan kelipatan 6')
  } else if (i % 6 === 0) {
    console.log(i + ' Adalah kelipatan 6')
  }
}
console.log(' ')
console.log('KELIPATAN 10')
for (i = 1; i <= 100; i += 9) {
  if (i % 10 !== 0) {
    console.log(i + ' Bukan kelipatan 10')
  } else if (i % 10 === 0) {
    console.log(i + ' Adalah kelipatan 10')
  }
}
