function accountBalance(input) {
    let savedMoney = 0;
    let index = 0;
    let money = input[index];
    while (money !== "NoMoreMoney") {
        let numMoney = Number(input[index]);
        if (money < 0) {
            console.log("Invalid operation!");
            break;
        }
        savedMoney += numMoney;
        console.log(`Increase: ${numMoney.toFixed(2)}`);
        money = (input[++index]);
    }
    console.log(`Total: ${savedMoney.toFixed(2)}`);
}
accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);