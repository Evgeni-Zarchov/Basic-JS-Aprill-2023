function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMins = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMins = Number(input[3]);

    let totalExamTime = examHour * 60 + examMins;
    let totalArrivalTime = arriveHour * 60 + arriveMins;
    let totalDiffTime = Math.abs(totalExamTime - totalArrivalTime);
    let diffHours = Math.floor(totalDiffTime / 60);
    let diffMins = totalDiffTime % 60;
    if (totalExamTime === totalArrivalTime) {
        console.log("On time");
    } else if (totalExamTime < totalArrivalTime) {
        console.log("Late");


        if (totalDiffTime < 60) {
            console.log(`${totalDiffTime} minutes after the start`);
        } else {
            if (diffMins < 10) {
                console.log(`${diffHours}:0${diffMins} hours after the start`);
            } else {
                console.log(`${diffHours}:${diffMins} hours after the start`);
            }
        }
    } else {
        if (totalDiffTime <= 30) {
            console.log("On time");
            console.log(`${totalDiffTime} minutes before the start`);
        } else {
            console.log("Early");
        } if (totalDiffTime < 60) {
            console.log(`${totalDiffTime} minutes before the start`);
        } else {
            if (diffMins < 10) {
                console.log(`${diffHours}:0${diffMins} hours before the start`);
            } else {
                console.log(`${diffHours}:${diffMins} hours before the start`);
            }
        }
    }

}
onTimeForTheExam(['9', '30', '9', '50']);