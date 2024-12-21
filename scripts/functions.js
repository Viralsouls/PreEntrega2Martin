// Validacion de fecha
function validateDate(date) {
    console.log("Validando fecha: " + date);
    let currentDate = new Date();
    let validDate = new Date(date);

    if (isNaN(validDate.getTime())) {
        console.log("Fecha inválida.");
        return false;
    }

    if (validDate < currentDate) {
        console.log("La fecha no puede ser anterior a la fecha actual.");
        return false;
    }

    console.log("Fecha válida.");
    return true;
}

// Validación de nombre nulo
function validateName(name) {
    console.log("Validando nombre: " + name);
    if (!name || name.trim() === "") {
        console.log("Nombre inválido.");
        return false;
    }
    console.log("Nombre válido.");
    return true;
}

// Validación cantidad de tiquetes
function validateAmount(amount) {
    console.log("Validando cantidad: " + amount);
    if (isNaN(amount) || amount <= 0) {
        console.log("Cantidad inválida.");
        return false;
    }
    console.log("Cantidad válida.");
    return true;
}

// Opciones de destinos

function populateDestinations(selectElement, locations) {
    locations.forEach(location => {
        const option = document.createElement("option");
        option.value = location;
        option.textContent = location;
        selectElement.appendChild(option);
    });
}