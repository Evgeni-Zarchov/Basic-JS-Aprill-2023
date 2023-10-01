function oscars(input) {
    let index = 0;
    let actorName = input[index];
    index++;
    let academyPoints = Number(input[index]);
    index++;
    let juryCount = Number(input[index]);
    index++;
    let isTrueOrFalse = false;

    for (let i = 0; i < juryCount; i++) {
        let name = input[index];
        index++;
        let points = Number(input[index]);
        index++;

        academyPoints += name.length * points / 2;

        if (academyPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            isTrueOrFalse = true;
            break;
        }
    }
    let difference = Math.abs(academyPoints - 1250.5);
    if (!isTrueOrFalse) {
        console.log(`Sorry, ${actorName} you need ${difference.toFixed(1)} more!`);
    }
}
oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);