function vacationBookList(input) {
    let pagesInCurrentBook = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysToreadTheBook = Number(input[2]);

    let totalReadingsInHour = pagesInCurrentBook / pagesPerHour;

    let totalTime = totalReadingsInHour / daysToreadTheBook;

    console.log(totalTime);
}
vacationBookList(['212', '20', '2']);