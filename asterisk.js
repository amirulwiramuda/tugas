// soal no. 1 baris bintang vertikal

var rows1 = 5

for (i = 1; i <= rows1; i++) {
  console.log('*')
}

console.log(' ')

// soal no. 2 baris bintang nested looping vertikal dan horizontal

var rows2 = 5
var column = ''
for (i = 1; i <= rows2; i++) {
  column += '*'

}
for (j = 1; j <= rows2; j++) {
  console.log(column)
}

console.log(' ')
// soal no.3 baris bintang segitiga

var rows3 = 5
var column = ''
for (i = 1; i <= rows3; i++) {
  column += '*'
console.log(column)

}