var nama = 'bill'
var peran = 'tabib'

if (nama === 'albert' && peran === '') {
  console.log('Hello ' + nama + ' pilih peranmu untuk bermain')
} else if (nama === 'bill' && peran === 'ksatria') {
  console.log('Hello ' + peran, nama + ' kamu dapat menyerang dengan senjatamu!')
} else if (nama === 'charlie' && peran === 'tabib') {
  console.log('Hello ' + peran, nama + ' kamu akan membantu temanmu yang terluka.')
} else if (nama === 'dominik' && peran === 'penyihir') {
  console.log('Hello ' + peran, nama + ' ciptakan keajaiban yang membantu kemenanganmu!')
} else if (nama === '' && peran === '') {
  console.log('nama harus isi!')
} else {
    console.log('invalid')
}
