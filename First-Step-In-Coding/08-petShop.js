function petShop(input) {
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);

    let foodPriceForDog = dogFood * 2.50;
    let foodPriceForCat = catFood * 4;

    let totalPrice = foodPriceForDog + foodPriceForCat;

    console.log(totalPrice);

}
petShop(['5', '4']);