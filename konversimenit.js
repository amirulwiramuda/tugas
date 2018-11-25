function konversiMenit (menit) {
  var menit;
  var modMenit;

  modMenit = menit % 60;
  menit = menit / 60;
  if (modMenit <= 9) {
    modMenit += '0' + modMenit
  }
  console.log(parseInt(menit).toString() + ':' + (modMenit).toString().charAt());
}

// TEST CASES
console.log(konversiMenit(63)) // 1:03
console.log(konversiMenit(124)) // 2:04
console.log(konversiMenit(53)) // 0:53
console.log(konversiMenit(88)) // 1:28
console.log(konversiMenit(120)) // 2:00
