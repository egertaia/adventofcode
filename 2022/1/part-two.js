const { input } = require('./input');

const results = [];

input.forEach((numbers) => {
    const convertedNumbers = numbers.map((number) => parseInt(number, 10));
    const sum = convertedNumbers.reduce((a, b) => a+b, 0);
    results.push(sum);
});

results.sort((a, b) => b-a);


console.log(results.slice(0, 3).reduce((a,b) => a+b, 0));
