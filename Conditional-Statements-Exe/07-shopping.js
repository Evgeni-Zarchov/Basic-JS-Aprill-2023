function shopping(input) {
    let budged = Number(input[0]);
    let videoCardsCount = Number(input[1]);
    let processorCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let videoCard = videoCardsCount * 250;
    let processorPrice = (videoCard * 0.35) * processorCount;
    let ramPrice = (videoCard * 0.10) * ramCount;

    let totalPrice = videoCard + processorPrice + ramPrice;

    if (videoCardsCount > processorCount) {
        totalPrice = totalPrice * 0.85
    }
    if (totalPrice <= budged) {
        let newPrice = budged - totalPrice;
        console.log(`You have ${newPrice.toFixed(2)} leva left!`);
    } else {
        let moneyNeeded = totalPrice - budged;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }
}
shopping(['900', '2', '1', '3']);