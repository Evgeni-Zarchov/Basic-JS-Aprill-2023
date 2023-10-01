function fishing(input) {
    let rent = Number(input[0]);
    let seasons = input[1];
    let fishersCount = Number(input[2]);
    let totalPrice = 0;
    switch (seasons) {
        case "Spring":
            totalPrice = 3000;
            break;
        case "Summer":
        case "Autumn":
            totalPrice = 4200;
            break;
        case "Winter":
            totalPrice = 2600;
            break;
    }
    if (fishersCount <= 6) {
        totalPrice *= 0.90;
    } else if (fishersCount <= 11) {
        totalPrice *= 0.85;
    } else if (fishersCount > 12) {
        totalPrice *= 0.75;
    }
    if (fishersCount % 2 === 0 && seasons !== "Autumn") {
        totalPrice *= 0.95;

    }
    if (rent >= totalPrice) {
        let moneyLeft = rent - totalPrice;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = totalPrice - rent;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
}
fishing(['3000', 'Summer', '11']);