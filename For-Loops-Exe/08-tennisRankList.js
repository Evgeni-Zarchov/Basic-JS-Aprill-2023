function tennisRankList(input) {
    let index = 0;

    let tournamentCount = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;
    let avgPoints = 0;
    let winnsCount = 0;
    for (let i = 0; i < tournamentCount; i++) {
        let score = input[index];
        index++;

        switch (score) {
            case "W": avgPoints += 2000;
                winnsCount++;
                break;
            case "F": avgPoints += 1200; break;
            case "SF": avgPoints += 720; break;
        }

    }
    let finalPoints = avgPoints + startPoints;
    let percent = Math.floor(avgPoints / tournamentCount);
    let gamesWon = winnsCount / tournamentCount * 100;
    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${percent}`);
    console.log(`${gamesWon.toFixed(2)}%`);

}
tennisRankList(["5", "1400", "F", "SF", "W", "W", "SF"]);