function sumSeconds(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);

    let totalMin = num1 + num2 + num3;

    let min = Math.floor(totalMin / 60);
    let seconds = totalMin % 60;

    if (seconds < 10) {
        console.log(`${min}:0${seconds}`);
    } else {
        console.log(`${min}:${seconds}`);
    }
}
sumSeconds(['35', '45', '44']);