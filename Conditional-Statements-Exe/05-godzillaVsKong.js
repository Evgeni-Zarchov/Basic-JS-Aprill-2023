function godzillaVsKong(input) {
    let movieBudged = Number(input[0]);
    let actors = Number(input[1]);
    let clothesPerActor = Number(input[2]);

    let decorPrice = 0.10 * movieBudged;

    let totalClothesPrice = actors * clothesPerActor;

    if (actors > 150) {
        totalClothesPrice = 0.90 * totalClothesPrice;
    }

    let totalPrice = decorPrice + totalClothesPrice;

    if (totalPrice > movieBudged) {
        let moneyNeed = totalPrice - movieBudged
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeed.toFixed(2)} leva more.`);
    } else {
        let moneyLeft = movieBudged - totalPrice;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);

    }
}
godzillaVsKong(['20000', '120', '55.5']);