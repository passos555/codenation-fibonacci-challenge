'use strict'

const fibonacciNumbers = [0];

const getCurrentIndex = () => fibonacciNumbers.length - 1; 

const fibonacci = () => {
    let index = getCurrentIndex();    
    
    while (fibonacciNumbers[index] <= 350){
        const newFibonacciNumber = generateFibonacci(index);

        fibonacciNumbers.push(newFibonacciNumber);

        index = getCurrentIndex();
    }

    return fibonacciNumbers;
}

const generateFibonacci = (num) => {
    if (num <= 1) return 1;

    return generateFibonacci(num - 1) + generateFibonacci(num - 2);
}

const isFibonnaci = (num) => fibonacciNumbers.includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}
