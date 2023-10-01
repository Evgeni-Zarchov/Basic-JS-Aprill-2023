function numOfPyramid(input) {
    let current = 1;
    let isBigger = false;
    let currentLine = "";
    let n = Number(input[0]);
    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            currentLine += current + " ";
            current++;

        }
        console.log(currentLine);
        currentLine = "";
        if (isBigger) {
            break;
        }
    }
}
numOfPyramid(['7']);