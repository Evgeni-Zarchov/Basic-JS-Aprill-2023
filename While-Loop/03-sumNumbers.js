function sumNumbers(input) {
    let num = Number(input[0]);
    let countSum = 0;
    let index = 1;
    let currentNuber = Number(input[index]);
    while (countSum < num) {
        countSum += currentNuber;
        index++;
        currentNuber = Number(input[index]);
    }
    console.log(countSum);
}
sumNumbers(["100", "10", "20", "30", "40"]);