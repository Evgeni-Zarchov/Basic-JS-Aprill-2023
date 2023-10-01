function hotelRoom(input) {
    let seasons = input[0];
    let nightsCount = Number(input[1]);
    let studioPrice = 50.00;
    let apartmentPrice = 65.00;
    let studioRent = 0;
    let apartmentRent = 0;
    switch (seasons) {
        case "May":
        case "October":
            studioPrice = 50.00
            apartmentPrice = 65.00
            studioRent = studioPrice * nightsCount;
            apartmentRent = apartmentPrice * nightsCount;

            if (seasons === "May" || seasons === "October") {
                if (nightsCount > 14) {
                    studioRent *= 0.70;
                } else if (nightsCount > 7) {
                    studioRent *= 0.95;
                }
            }
            break;
        case "June":
        case "September":
            studioPrice = 75.20
            apartmentPrice = 68.70
            studioRent = studioPrice * nightsCount;
            apartmentRent = apartmentPrice * nightsCount;
            if (seasons === "June" || seasons === "September") {
                if (nightsCount > 14) {
                    studioRent *= 0.80;
                }
            }
            break;
        case "July":
        case "August":
            studioPrice = 76.00;
            apartmentPrice = 77.00;
            studioRent = studioPrice * nightsCount;
            apartmentRent = apartmentPrice * nightsCount;
            if (seasons === "July" || seasons === "August") {
                if (nightsCount > 14) {
                    studioRent = nightsCount * 76;
                }
                break;
            }
    }if (nightsCount > 14) {
        apartmentRent *= 0.90;

    }
    console.log(`Apartment: ${apartmentRent.toFixed(2)} lv.`);
    console.log(`Studio: ${studioRent.toFixed(2)} lv.`);
}
hotelRoom(['May', '15']);