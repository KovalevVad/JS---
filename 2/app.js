let money = prompt("Ваш месячный доход?")
let expenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую")
let amount = prompt("Во сколько обойдутся обязательные статьи расходов?")
let deposit = confirm("Есть ли у вас вклад в банке?")
let purpose = 100000


//3 Задача
let extraMoney = prompt("Перечислите возможный доход за ваши дополнительные работы:")

function getAccumulatedIncome() {
  return (+extraMoney + +money) - +amount
}

let accumulatedIncome = getAccumulatedIncome()

function getTargetMonth() {
  return purpose/accumulatedIncome
}

let purposeMonth =  Math.floor(getTargetMonth())
let budgetDay = Math.floor(accumulatedIncome / 30)
console.log(`Ваш бюджет на месяц с учетом ваших расходов составляет: ${accumulatedIncome}`)
console.log(`Ваша цель накопить ${purpose} с учетом всех ваших расходов будет достигнута через ${purposeMonth} месяца`)
console.log(`Дневной бюджет: ${budgetDay}`)