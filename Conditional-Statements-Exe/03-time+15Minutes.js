function time15Minutes(input) {
    let currentHour = Number(input[0]);
    let currentMins = Number(input[1]);

    let totalMins = currentHour * 60 + currentMins + 15;
    let hour = Math.floor(totalMins / 60);
    let mins = totalMins % 60;

    if (hour === 24) {
        hour = 0;
    }

    if (mins < 10) {
        console.log(`${hour}:0${mins}`);
    } else {
        console.log(`${hour}:${mins}`);
    }
}
time15Minutes(['1', '46']);