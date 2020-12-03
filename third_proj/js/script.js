let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let firstAnswer = prompt("Введите обязательную статью расходов в этом месяце");
let secondAnswer = prompt("Во сколько обойдется?");
let moneyPerDay = (money / 30);
let expenses = {firstAnswer, secondAnswer};
let optionalExpenses = {};
let income = [];
let savings = false;
let appData = {
    money,
    time,
    expenses,
    optionalExpenses, 
    income,
    savings
};

console.log(appData);
alert("your budget on 1 day is - " + moneyPerDay);