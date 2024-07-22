// Fonction de connexion simulée
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    // Simuler une connexion réussie
    switch (role) {
        case "employe":
            window.location.href = "htmlemploye.html";
            break;
        case "veterinaire":
            window.location.href = "htmlveterinaire.html";
            break;
        case "administrateur":
            window.location.href = "htmladmin.html";
            break;
        default:
            alert("Type de compte inconnu");
    }
}

// Ajouter une entrée de nourriture
function addFoodEntry(event) {
    event.preventDefault();
    const animal = document.getElementById("animal").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const foodType = document.getElementById("food-type").value;
    const quantity = document.getElementById("quantity").value;

    const table = document.getElementById("food-table").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    newRow.insertCell(0).appendChild(document.createTextNode(animal));
    newRow.insertCell(1).appendChild(document.createTextNode(date));
    newRow.insertCell(2).appendChild(document.createTextNode(time));
    newRow.insertCell(3).appendChild(document.createTextNode(foodType));
    newRow.insertCell(4).appendChild(document.createTextNode(quantity));

    // Clear the form
    document.getElementById("food-form").reset();
}

// Ajouter une note sur un habitat
function addHabitatNotes(event) {
    event.preventDefault();
    const habitat = document.getElementById("habitat").value;
    const notes = document.getElementById("notes").value;
    const date = new Date().toLocaleDateString();

    // Ajouter la note au tableau
    const table = document.getElementById("notes-table").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    newRow.insertCell(0).appendChild(document.createTextNode(date));
    newRow.insertCell(1).appendChild(document.createTextNode(habitat));
    newRow.insertCell(2).appendChild(document.createTextNode(notes));

    // Clear the form
    document.getElementById("notes-form").reset();
}

// Créer un compte utilisateur
function createAccount(event) {
    event.preventDefault();
    const email = document.getElementById("account-email").value;
    const password = document.getElementById("account-password").value;
    const role = document.getElementById("account-role").value;

    // Simuler la création de compte
    alert(`Compte ${role} créé pour ${email}`);
    document.getElementById("create-account-form").reset();
}
