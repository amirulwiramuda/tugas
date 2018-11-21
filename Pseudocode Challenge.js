// Soal No. 1 Newton Law II

/* Pseudocode
STORE "resultan" without any value
STORE "MassaInKG" with 600
STORE "AccInMPerS" with 2

COMPUTE "masa" * "acc"
SET "resultan" value with compute result

DISPLAY "resultan"
*/

var resultan
var mass = 600
var acc = 2

resultan = mass * acc

console.log('If the mass= ' + mass + ' and the acceleration= ' + acc + ' m/s^2 so the resultan in N= ' + resultan)

// Soal No. 2 Tahun Kabisat

/*
INPUT "year" with any year value
GET "year"

IF ("year" mod 4 = 0 && "year" mod 100 ≠ 0 ) {
    PRINT "year" is leap year!
} ELSE IF ("year" mod 4 = 0 && "year" mod 100 = 0 && "year" mod 400 = 0)
{
    PRINT "year" is leap year!
} ELSE {
    PRINT "year" is not leap year!
}

*/

var year = 2025

if (year % 4 === 0 && year % 100 !== 0) {
  console.log('Year is Leap Year!')
} else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
  console.log('Year is Leap Year!')
} else {
  console.log('Year is not Leap year')
}

/* Soal No. 3 Laundry day

Pseudocode

INPUT foxie without any value

WHILE foxie <=20
ADD foxie by 1

DISPLAY "Already done, time to wash!"
*/

var foxie

for (foxie = 1; foxie <= 20; foxie++) { console.log('Foxy put the ' + foxie + ' clothes') }

/* Soal No. 4

Pseudocode

INPUT kukumurid without any value

WHILE kukumurid <= 40

ADD kukumurid by 1

IF kukumurid mod 2 EQUAL 0

THEN DISPLAY kukumurid equal dihukum

ELSE DISPLAY kukumurid equal dipuji

*/

var kukumurid

for (kukumurid = 1; kukumurid <= 40; kukumurid++) {
  if (kukumurid % 2 == 0) { console.log(kukumurid + ' Kuku murid panjang: kamu dihukum!')}
  else console.log(kukumurid + ' Kuku murid pendek: kamu dipuji!')
}
