function suppliesForSchool(input) {
    let packOfPens = Number(input[0]);
    let packOfMarkers = Number(input[1]);
    let chemicalPerLitre = Number(input[2]);
    let discount = Number(input[3]);

    let penPrice = packOfPens * 5.80;
    let markersPrice = packOfMarkers * 7.20;
    let chemicalPrice = chemicalPerLitre * 1.20;

    let discountDecimal = discount / 100;

    let priceWithoutDiscount = penPrice + markersPrice + chemicalPrice;

    let totalPrice = priceWithoutDiscount - (priceWithoutDiscount * discountDecimal);

    console.log(totalPrice);

}
suppliesForSchool(['2', '3', '4', '25']);