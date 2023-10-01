function salary(input) {
    let index = 0;
    let openTabs = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;

    let doYouHaveMoney = true;

    for (let i = 0; i < openTabs; i++) {
        let currentNum = input[index];
        index++;
        if (currentNum === "Facebook") {
            money -= 150;
        } else if (currentNum === "Instagram") {
            money -= 100;
        } else if (currentNum === "Reddit") {
            money -= 50;
        }
        if (money <= 0) {
            console.log("You have lost your salary.");
            doYouHaveMoney = false;
            break;
        }
    }
    if (doYouHaveMoney) {
        console.log(money);
    }
}
salary((["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]));