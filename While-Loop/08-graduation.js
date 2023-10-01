function graduation(input) {
    let name = input[0];
    let index = 1;
    let currGrade = Number(input[index]);
    let sumGrade = 0;
    let excluded = 0;
    while (index <= 12) {
        if (currGrade < 4) {
            excluded++;
        }
        if (excluded > 1) {
            console.log(`${name} has been excluded at ${index - 1} grade`);
            break;
        }
        sumGrade += currGrade;
        index++;
        currGrade = Number(input[index]);
    }
    let averageGrade = sumGrade / 12;
    if (excluded < 2) {
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}
graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);