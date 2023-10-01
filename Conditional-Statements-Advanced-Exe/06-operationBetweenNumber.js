function operationNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    let calculation = 0;
    if (operator === "+") {
        calculation = num1 + num2;
        if (calculation % 2 === 0) {
            console.log(`${num1} + ${num2} = ${calculation} - even`);
        } else {
            console.log(`${num1} + ${num2} = ${calculation} - odd`);
        }

    } else if (operator === "-") {
        calculation = num1 - num2;
        if (calculation % 2 === 0) {
            console.log(`${num1} - ${num2} = ${calculation} - even`);
        } else {
            console.log(`${num1} - ${num2} = ${calculation} - odd`);
        }

    } else if (operator === "*") {
        calculation = num1 * num2;
        if (calculation % 2 === 0) {
            console.log(`${num1} * ${num2} = ${calculation} - even`);
        } else {
            console.log(`${num1} * ${num2} = ${calculation} - odd`);
        }

    } else if (operator === "/") {
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);
        } else {
            calculation = num1 / num2;
            console.log(`${num1} / ${num2} = ${calculation.toFixed(2)}`);
        }

    } else if (operator === "%") {
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);
        } else {
            calculation = num1 % num2;
            console.log(`${num1} % ${num2} = ${calculation}`);
        }

    }
}
operationNumbers(['10', '12', '+']);