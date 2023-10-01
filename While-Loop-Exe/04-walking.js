function walking(input) {
    let index = 0;
    let stepGoals = 10000;
    let totalSteps = 0;
    let currentSteps = input[index];
    index++;

    while (currentSteps !== "Going home") {
        currentSteps = Number(currentSteps);

        totalSteps += currentSteps;

        if (totalSteps >= stepGoals) {
            break;
        }

        currentSteps = input[index];
        index++;

    }
    if (currentSteps === "Going home") {
        let stepsToHome = Number(input[index]);
        totalSteps += stepsToHome;


        if (totalSteps >= stepGoals) {
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - stepGoals} steps over the goal!`);
        } else {
            console.log(`${stepGoals - totalSteps} more steps to reach goal.`);
        }
    } else {
        console.log("Goal reached! Good job!");
        console.log(`${totalSteps - stepGoals} steps over the goal!`);
    }
}
walking(["1000", "1500", "2000", "6500"]);