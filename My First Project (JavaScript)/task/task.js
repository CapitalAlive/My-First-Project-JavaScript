const input = require('sync-input');

 let income = 5405
console.log(`Earned amount:
Bubblegum: $202
Toffee: $118
Ice cream: $2250
Milk chocolate: $1680
Doughnut: $1075
Pancake: $80
Income: $` + income.toString())

let staffExpenses = Number(input('Enter the staff expenses: '))
let otherExpenses = Number(input('Enter other expenses: '))
console.log('Net income: $' + (income - staffExpenses - otherExpenses))

