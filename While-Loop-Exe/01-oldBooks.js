function oldBooks(input) {
    let index = 0;
    let searchedBooks = input[index];
    index++;


    let currentBook = input[index];
    index++;

    let isFound = false;
    let bookChecked = 0;
    while (currentBook !== "No More Books") {
        if (currentBook === searchedBooks) {
            isFound = true;
            break;
        }

        bookChecked++;
        currentBook = input[index];
        index++;
    }
    if (isFound) {
        console.log(`You checked ${bookChecked} books and found it.`);
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${bookChecked} books.`);
    }
}
oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);