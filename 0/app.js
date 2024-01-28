let money = 21000
let profit = 'стипендия'
let expenses = 'Метро, Питание, Телефон'
let purpose = 100000
let period = 5

console.log(typeof(money), typeof(profit)) //1
console.log(expenses.length)//2
console.log(`Период равен ${period} месяцев`, `Цель заработать ${purpose} рублей`)

let budgetDay = money/30
console.log(budgetDay)

let array = expenses.toLowerCase().split(',')
console.log(array)