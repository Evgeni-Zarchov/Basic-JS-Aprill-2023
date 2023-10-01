function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combination = 0;
    let valid = false;
    for (let a = start; a <= end; a++) {
        for (let b = start; b <= end; b++) {

            combination++;
            let sum = a + b;
            if (sum === magicNumber) {
                console.log(`Combination N:${combination} (${a} + ${b} = ${magicNumber})`);
                valid = true;
                break;
            }
        }
        if (valid === true) {
            break;
        }
    }
    if (valid === false) {
        console.log(`${combination} combinations - neither equals ${magicNumber}`);
    }
}
sumOfTwoNumbers(['1', '10', '5']);