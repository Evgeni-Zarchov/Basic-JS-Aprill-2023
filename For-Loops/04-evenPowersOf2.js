function evenPowersOf2(input) {
    let n = Number(input[0]);

    for (let i = 0; i <= n; i += 2) {
        let squareNumber = Math.pow(2, i);
        console.log(squareNumber);
    }
}
evenPowersOf2(['3']);