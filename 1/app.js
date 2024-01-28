let money = prompt("Ваш месячный доход?")
let expenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую")
let amount = prompt("Во сколько обойдутся обязательные статьи расходов?")
let deposit = confirm("Есть ли у вас вклад в банке?")
let budgetMonth = money - amount
console.log(budgetMonth)
let purpose = 100000
console.log(Math.ceil(purpose / money))
console.log(Math.floor(purpose / budgetMonth))

if (budgetMonth > 60000) {
  console.log("У вас высокий уровень дохода")
} else if(budgetMonth > 30000 && budgetMonth < 60000) {
  console.log("У вас средний уровень дохода")
} else if (budgetMonth > 0 && budgetMonth < 30000) {
  console.log("К сожалению у вас уровень дохода ниже среднего")
} else {
  console.log("Что-то пошло не так")
}