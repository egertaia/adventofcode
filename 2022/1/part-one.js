const { input } = require('./input');

let maxCalories = 0;

input.forEach((numbers) => {
    const convertedNumbers = numbers.map((number) => parseInt(number, 10));
    const sum = convertedNumbers.reduce((a, b) => a+b, 0);
    if (maxCalories < sum) maxCalories = sum;
})

console.log(maxCalories);
