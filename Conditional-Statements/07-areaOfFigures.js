function areaOfFigures(input) {
    let figure = input[0];
    if (figure === "square") {
        let aSide = Number(input[1]);
        let area = aSide * aSide;
        console.log(area.toFixed(3));
    } else if (figure === "rectangle") {
        let length = Number(input[1]);
        let width = Number(input[2]);
        let area = length * width;
        console.log(area.toFixed(3));
    } else if (figure === "circle") {
        let r = Number(input[1]);
        let area = r * Math.PI * r;
        console.log(area.toFixed(3));
    } else if (figure === "triangle") {
        let a = Number(input[1]);
        let h = Number(input[2]);
        let perimeter = a * h / 2;
        console.log(perimeter.toFixed(3));
    }
}
areaOfFigures(['square', '5']);