function pool(input) {
    let recordInSec = Number(input[0]);
    let distInMeter = Number(input[1]);
    let timeInSeconds = Number(input[2]);

    let time = distInMeter * timeInSeconds;
    let loseTime = Math.floor(distInMeter / 15);

    let totalDistanceTime = loseTime * 12.5;
    let totalTime = time + totalDistanceTime;


    if (totalTime >= recordInSec) {
        let Seconds = totalTime - recordInSec;
        console.log(`No, he failed! He was ${Seconds.toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
}
pool(['10464', '1500', '20']);