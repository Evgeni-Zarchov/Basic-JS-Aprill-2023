function projectCreation(input) {
    let name = input[0];
    let projectsCount = Number(input[1]);
    let totalHour = projectsCount * 3;
    console.log(`The architect ${name} will need ${totalHour} hours to complete ${projectsCount} project/s.`);
}
projectCreation(['George', '4']);