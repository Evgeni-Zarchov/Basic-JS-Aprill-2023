function sumOfNumbers(input) {
    let text = input[0] + "";
    let sum = 0;
    for (let i = 0; i < text.length; i++) {
        let numbers = Number(text[i]);
        sum += numbers;
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(['1234']);