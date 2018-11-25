// Soal no. 1 perulangan while

var loop = '';
var loop2 = '';
var i = 2;
var j = 20;
var counter = 2;


while (i <= 20) {
  loop += i + ' I love coding' + '\n'
  i += counter;
}

while (j > 0) {
  loop2 += j + ' I love coding' + '\n'
  j -= counter;
}
console.log('Looping pertama');
console.log(loop);
console.log('Looping kedua');
console.log(loop2);
console.log(' ');


// soal no. 2 perulangan for

console.log('LOOPING PERTAMA')
for (var i = 1; i <= 20; i++) {
  console.log(i + ' I love coding');
}

console.log('LOOPING KEDUA')
for (var i = 20; i > 0; i--) {
  console.log(i + ' I will become fullstack developer');
}

console.log(' ');


// Soal no.  3 ganjil genap

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

