function moving(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;
    let totalVolume = width * length * height;
    let boxCount = input[index];
    index++;


    while (boxCount !== "Done") {
        boxCount = Number(boxCount);
        totalVolume -= boxCount;
        if (totalVolume <= 0) {
            console.log(`No more free space! You need ${Math.abs(totalVolume)} Cubic meters more.`);
            return;
        }

        boxCount = (input[index]);
        index++;
    }
    console.log(`${totalVolume} Cubic meters left.`);

}
moving(["10", "1", "2", "4", "6", "Done"]);