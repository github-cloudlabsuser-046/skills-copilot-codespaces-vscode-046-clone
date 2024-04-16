class Calculator {
    constructor() {
        this.result = 0;
    }

    add(number) {
        this.result += number;
        return this;
    }

    subtract(number) {
        this.result -= number;
        return this;
    }

    multiply(number) {
        this.result *= number;
        return this;
    }

    divide(number) {
        if (number === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.result /= number;
        return this;
    }

    getResult() {
        return this.result;
    }
}

// Usage
let calculator = new Calculator();
calculator.add(5).subtract(2).multiply(3).divide(2);
console.log(calculator.getResult()); // Outputs: 4.5

// FILEPATH: /workspaces/skills-copilot-codespaces-vscode-046-clone/test.js
const Calculator = require('./Calculator'); // Assuming Calculator is in a file named Calculator.js

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('add', () => {
        calculator.add(5);
        expect(calculator.getResult()).toBe(5);
    });

    test('subtract', () => {
        calculator.add(5);
        calculator.subtract(2);
        expect(calculator.getResult()).toBe(3);
    });

    test('multiply', () => {
        calculator.add(5);
        calculator.multiply(2);
        expect(calculator.getResult()).toBe(10);
    });

    test('divide', () => {
        calculator.add(10);
        calculator.divide(2);
        expect(calculator.getResult()).toBe(5);
    });

    test('chain operations', () => {
        calculator.add(5).subtract(2).multiply(3).divide(2);
        expect(calculator.getResult()).toBe(4.5);
    });

    test('divide by zero', () => {
        expect(() => {
            calculator.divide(0);
        }).toThrow('Cannot divide by zero');
    });
});