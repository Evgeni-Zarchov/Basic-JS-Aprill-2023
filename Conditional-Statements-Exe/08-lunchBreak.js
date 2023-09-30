function lunchTime(input) {
    let movieTitle = input[0];
    let movieDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = (1 / 8) * breakDuration;
    let rest = (1 / 4) * breakDuration;

    let totalTakenTime = lunchTime + rest;
    let timeLeft = breakDuration - totalTakenTime;


    if (timeLeft >= movieDuration) {
        let freeTime = timeLeft - movieDuration;
        console.log(`You have enough time to watch ${movieTitle} and left with ${Math.ceil(freeTime)} minutes free time.`);
    } else {
        let timeNeeded = movieDuration - timeLeft;
        console.log(`You don't have enough time to watch ${movieTitle}, you need ${Math.ceil(timeNeeded)} more minutes.`);
    }
}
lunchTime(['Game of Thrones', '60', '96']);