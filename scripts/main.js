const bookings = [];
const locations = ["Nueva York", "Londres", "Bogotá", "Buenos Aires", "España", "Tokio"];

const destinationSelect = document.getElementById("destination");
populateDestinations(destinationSelect, locations);


function displayBookings(bookingsToDisplay) {
    const bookingList = document.getElementById("bookingList");
    bookingList.innerHTML = "";
    bookingsToDisplay.forEach((booking, index) => {
        const div = document.createElement("div");
        div.textContent = `${index + 1}. ${booking.name} - Destino: ${booking.destination}, Fecha: ${booking.date}, Tiquetes: ${booking.amount}`;
        bookingList.appendChild(div);
    });
}

document.getElementById("flightForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const amount = parseInt(document.getElementById("amount").value, 10);

    if (!validateName(name)) {
        alert("Nombre inválido.");
        return;
    }
    if (!validateDate(date)) {
        alert("Fecha inválida.");
        return;
    }
    if (!validateAmount(amount)) {
        alert("Cantidad inválida.");
        return;
    }

    const booking = { name, destination, date, amount };
    bookings.push(booking);

    displayBookings(bookings);
    alert("Reserva confirmada!");
});

document.getElementById("filterByDestination").addEventListener("click", () => {
    const filterDestination = prompt("Ingresa el destino que deseas buscar: ");
    const filteredBookings = bookings.filter(b => b.destination === filterDestination);
    displayBookings(filteredBookings);
});

document.getElementById("sortByDate").addEventListener("click", () => {
    const sortedBookings = [...bookings].sort((a,b) => new Date(a.date) - new Date(b.date));
    displayBookings(sortedBookings);
});

document.getElementById("sortByTickets").addEventListener("click", () => {
    const sortedBookings = [...bookings].sort((a, b) => b.amount - a.amount);
    displayBookings(sortedBookings);
})