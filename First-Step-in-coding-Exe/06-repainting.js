function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let workersHour = Number(input[3]);

    let extraPaint = 0.10 * paint;
    let totalPaint = extraPaint + paint;

    let totalNylon = nylon + 2;

    let totalMaterialPrice = totalNylon * 1.50 + totalPaint * 14.50 + thinner * 5 + 0.40;

    let workHours = 0.30 * totalMaterialPrice;

    let totalHours = workersHour * workHours;

    let totalHour = totalMaterialPrice + totalHours;

    console.log(totalHour);


}
repainting(['10', '11', '4', '8']);