function cinemaTickets(input) {
    let index = 0;


    let command = input[index];
    index++;

    let studentTickets = 0;
    let standartTickets = 0;
    let kidsTickets = 0;

    while (command !== "Finish") {
        let movieName = command;
        let place = Number(input[index]);
        index++;

        let command1 = input[index];
        index++;

        let takenPlaces = 0;

        while (command1 !== "End") {
            let ticketType = command1;
            takenPlaces++;

            if (ticketType === "student") {
                studentTickets++;
            } else if (ticketType === "standard") {
                standartTickets++;
            } else {
                kidsTickets++;
            }

            if (takenPlaces === place) {
                break;
            }

            command1 = input[index];
            index++;
        }

        let takenPerCent = (takenPlaces / place) * 100;
        console.log(`${movieName} - ${takenPerCent.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }
    let totalTickets = studentTickets + standartTickets + kidsTickets;
    console.log(`Total tickets: ${totalTickets}`);

    let studentTicketsPerCent = (studentTickets / totalTickets) * 100;
    let standartTicketsPerCent = (standartTickets / totalTickets) * 100;
    let kidsTicketsPerCent = (kidsTickets / totalTickets) * 100;


    console.log(`${studentTicketsPerCent.toFixed(2)}% student tickets.`);
    console.log(`${standartTicketsPerCent.toFixed(2)}% standard tickets.`);
    console.log(`${kidsTicketsPerCent.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]);