function minNumber(input) {
    let number = Number.MAX_SAFE_INTEGER;
    let index = 0;
    let currentInput = input[index];
    while (currentInput !== "Stop") {
        let numberInput = Number(currentInput);
        if (numberInput < number) {
            number = numberInput;
        }
        index++;
        currentInput = input[index];

    }
    console.log(number);

}
minNumber(["100", "99", "80", "70", "Stop"]);