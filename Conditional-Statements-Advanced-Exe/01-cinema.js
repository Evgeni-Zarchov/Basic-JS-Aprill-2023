function cinema(input) {
    let movieType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);
    let earning = 0;
    let ticketPrice = rows * cols;
    if (movieType === "Premiere") {
        profit = ticketPrice * 12;
    } else if (movieType === "Normal") {
        profit = ticketPrice * 7.50;
    } else if (movieType === "Discount") {
        profit = ticketPrice * 5;
    }
    console.log(`${profit.toFixed(2)} leva`);
}
cinema(['Premiere', '10', '12']);