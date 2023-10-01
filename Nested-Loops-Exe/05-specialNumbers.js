function specialNumers(input) {
    let n = Number(input[0]);
    let result = "";
    for (let currNum = 1111; currNum <= 9999; currNum++) {
        let isSpecial = true;

        let currNumAsString = currNum.toString();
        for (let i = 0; i < currNumAsString.length; i++) {
            let currDigit = Number(currNumAsString[i]);
            if (n % currDigit !== 0) {
                isSpecial = false;
                break;
            }
        }
        if (isSpecial === true) {
            result += currNum + " ";
        }
    }
    console.log(result);
}
specialNumers(['3']);