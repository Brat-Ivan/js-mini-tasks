const money = 1000000;
const profit = 'Freelance';
const expenses = 'Food, Travel';
const purpose = 10000000;
const period = 12;

console.log(typeof money, typeof profit);
console.log(expenses.length);
console.log(`Период равен ${period} месяцев`, `\nЦель заработать ${purpose} рублей`);

const budgetDay = money / 30;
console.log(budgetDay);

const arr = expenses.toLocaleLowerCase().split(',');
console.log(arr);