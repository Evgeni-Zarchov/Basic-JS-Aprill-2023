function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let vacationPrice = 0;
    let destination = '';
    let place = '';

    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season === 'summer') {
            vacationPrice = budget * 0.30;
            place = "Camp - " + vacationPrice.toFixed(2);
        } else {
            vacationPrice = budget * 0.70;
            place = "Hotel - " + vacationPrice.toFixed(2);
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        if (season === 'summer') {
            vacationPrice = budget * 0.40;
            place = "Camp - " + vacationPrice.toFixed(2);
        } else {
            vacationPrice = budget * 0.80;
            place = "Hotel - " + vacationPrice.toFixed(2);
        }
    } else {
        destination = 'Europe';
        vacationPrice = budget * 0.90;
        place = "Hotel - " + vacationPrice.toFixed(2);
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${place}`);
}
journey(['50', 'summer']);