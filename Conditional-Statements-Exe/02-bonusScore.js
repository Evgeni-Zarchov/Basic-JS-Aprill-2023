function bonusScore(input) {
    let score = Number(input[0]);
    let bonusScore = 0;
    if (score <= 100) {
        bonusScore = 5;
    } else if (score <= 1000) {
        bonusScore = 0.20 * score;
    } else {
        bonusScore = 0.10 * score;
    }
    if (score % 2 === 0) {
        bonusScore = bonusScore + 1;
    } else if (score % 10 === 5) {
        bonusScore = bonusScore + 2;
    }
    console.log(bonusScore);
    console.log(score + bonusScore);
}
bonusScore(['20']);