function xo (str) {
  var vx = 0;
  var vo = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'x') {
      vx++;
    } else if (str[i] === 'o') {
      vo++;
    }
  }

  if (vx === vo) {
    return true
  } else {
    return false
  }
}

// TEST CASES
console.log(xo('xoxoxo')) // true
console.log(xo('oxooxo')) // false
console.log(xo('oxo')) // false
console.log(xo('xxxooo')) // true
console.log(xo('xoxooxxo')) // true
