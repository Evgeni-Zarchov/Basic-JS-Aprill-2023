function toyShop(input) {
    let excursionPrice = Number(input[0]);

    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let toysPrice = puzzleCount * 2.60 + dollsCount * 3 + bearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2;

    let toysCount = puzzleCount + dollsCount + bearsCount + minionsCount + trucksCount;

    if (toysCount >= 50) {
        toysPrice = 0.75 * toysPrice;
    }

    toysPrice = 0.90 * toysPrice;

    if (toysPrice >= excursionPrice) {
        let moneyLeft = toysPrice - excursionPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = excursionPrice - toysPrice;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}
toyShop(['40.8', '20', '25', '30', '50', '10']);