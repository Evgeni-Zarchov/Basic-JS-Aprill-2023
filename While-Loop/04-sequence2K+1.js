function num2K(input) {
    let n = Number(input[0]);
    let number = 1;
    while (number <= n) {
        console.log(number);
        number = 2 * number + 1;
    }
}
num2K(['3']);