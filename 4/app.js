const arr = ['2102', '12423','42034','12341','7667','234','3']
const result = arr.filter( el => (el[0] === '2' || el[0] === '4'))
const result1 = arr.filter(el => +el > 5)
console.log(result,result1)

function main(str) {
  if (typeof(str) !== "string") {
    console.log('Это не строка')
  }
  str.trim()
  if (str.length > 30) {
    let a = str.split('')
    a.splice(30, str.length - 30)
    let str1 = a.join("") + '...'
    return str1
  } else {
    return str
  }

}
console.log(main('bnsdafoakfoakpfapkfaofaporippaффф'))