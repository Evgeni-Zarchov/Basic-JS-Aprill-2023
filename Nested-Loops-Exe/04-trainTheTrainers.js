function trainInTheTrainers(input) {
    let index = 0;
    let judgeCounts = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let totalGradesCount = 0;
    let totalGradeCount = 0;
    while (command !== "Finish") {
        let presentation = command;
        let sumGrades = 0;

        for (let i = 0; i < judgeCounts; i++) {
            let currentGrade = Number(input[index]);
            index++;

            sumGrades += currentGrade;

        }
        let avgGrade = sumGrades / judgeCounts;
        console.log(`${presentation} - ${avgGrade.toFixed(2)}.`);
        totalGradeCount += avgGrade;
        totalGradesCount++;

        command = input[index];
        index++;

    }
    let finalAvg = totalGradeCount / totalGradesCount
    console.log(`Student's final assessment is ${finalAvg.toFixed(2)}.`);
}
trainInTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);