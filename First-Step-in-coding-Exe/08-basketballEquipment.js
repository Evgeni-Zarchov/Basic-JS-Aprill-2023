function basketBallEquipment(input) {
    let yearTax = Number(input[0]);

    let basketballShoes = yearTax - (yearTax * 0.40);

    let basketballDress = basketballShoes - (basketballShoes * 0.20);

    let basketballBall = basketballDress / 4;

    let basketballAcs = basketballBall / 5;

    let totalPrice = yearTax + basketballShoes + basketballDress + basketballBall + basketballAcs;

    console.log(totalPrice);
}
basketBallEquipment(['365']);