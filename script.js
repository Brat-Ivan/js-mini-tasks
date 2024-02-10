const profit = 'Freelance';
const purpose = 10000000;
const money = prompt('Ваш месячный доход?', 1000000);
const amount = prompt('Во сколько обойдутся обязательные статьи расходов?', 100000);
const extraMoney = prompt(`Перечислите возможный доход за ваши дополнительные работы: ${profit}?`, 500000);

function getAccumulatedIncome() {
  return +money + +extraMoney - amount;
}

const accumulatedIncome = getAccumulatedIncome();

function getTargetMonth() {
  return purpose / accumulatedIncome;
}

const budgetDay = accumulatedIncome / 30;

console.log(`Ваш бюджет на месяц с учетом ваших расходов составляет: ${accumulatedIncome}`);
console.log(`Ваша цель накопить ${purpose} с учетом всех ваших расходов будет достигнута через ${getTargetMonth()} месяца`);
console.log(`Дневной бюджет: ${budgetDay}`);