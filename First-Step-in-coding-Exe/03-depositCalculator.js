function depositCalculator(input) {
    let depositedSum = Number(input[0]);
    let depositedTime = Number(input[1]);
    let interestPerYear = Number(input[2]);

    let interestDeciaml = interestPerYear / 100;

    let totalSum = depositedSum + depositedSum * ((depositedTime * interestDeciaml) / 12);

    console.log(totalSum);

}
depositCalculator(['200', '3', '5.7']);