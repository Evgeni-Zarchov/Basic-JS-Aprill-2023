function trekkingMania(input) {
    let count = Number(input[0]);
    let musala = 0;
    let monblan = 0;
    let kalimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    for (let i = 1; i <= count; i++) {
        let alpinist = Number(input[i]);
        if (alpinist <= 5) {
            musala += alpinist;
        } else if (alpinist <= 12) {
            monblan += alpinist;
        } else if (alpinist <= 25) {
            kalimanjaro += alpinist;
        } else if (alpinist <= 40) {
            k2 += alpinist;
        } else {
            everest += alpinist;
        }
    }
    let totalAlpinists = musala + monblan + kalimanjaro + k2 + everest;
    let perCentMusala = (musala / totalAlpinists) * 100;
    let perCentMonblan = (monblan / totalAlpinists) * 100;
    let perCentKalimanjaro = (kalimanjaro / totalAlpinists) * 100;
    let perCentK2 = (k2 / totalAlpinists) * 100;
    let perCentEverest = (everest / totalAlpinists) * 100;
    console.log(`${perCentMusala.toFixed(2)}%`);
    console.log(`${perCentMonblan.toFixed(2)}%`);
    console.log(`${perCentKalimanjaro.toFixed(2)}%`);
    console.log(`${perCentK2.toFixed(2)}%`);
    console.log(`${perCentEverest.toFixed(2)}%`);

}
trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);