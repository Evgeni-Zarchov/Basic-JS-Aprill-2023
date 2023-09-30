function fishTank(input) {
    let lengthCm = Number(input[0]);

    let widthCm = Number(input[1]);

    let heigthCm = Number(input[2]);

    let perCent = Number(input[3]);

    let totalArea = lengthCm * widthCm * heigthCm;

    let totalVolume = totalArea / 1000;

    let totalLitres = totalVolume * (perCent / 100);

    let result = totalVolume - totalLitres;

    console.log(result);
}
fishTank(['85', '75', '47', '17']);