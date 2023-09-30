function invalidNumbers(input) {
    let numbers = Number(input[0]);
    if (numbers === 100 || numbers === 200 || numbers === 150 || numbers === 199 || numbers === 0) {
    } else {
        console.log("invalid");
    }
}
invalidNumbers(['220']);