const habitats = {
    jungle: {
        name: "Jungle",
        description: "Découvrez la jungle et ses habitants exotiques.",
        animals: ["Tigres", "Singes", "Perroquets"]
    },
    savane: {
        name: "Savane",
        description: "Explorez la savane et ses majestueux animaux.",
        animals: ["Lions", "Éléphants", "Girafes"]
    },
    marais: {
        name: "Marais",
        description: "Parcourez les marais et observez des espèces uniques.",
        animals: ["Crocodiles", "Hérons", "Grenouilles"]
    }
};

function showHabitatInfo(habitatKey) {
    const habitatInfo = habitats[habitatKey];
    document.getElementById("habitat-name").textContent = habitatInfo.name;
    document.getElementById("habitat-description").textContent = habitatInfo.description;
    
    const animalsList = document.getElementById("habitat-animals");
    animalsList.innerHTML = '';
    habitatInfo.animals.forEach(animal => {
        const li = document.createElement("li");
        li.textContent = animal;
        animalsList.appendChild(li);
    });

    document.getElementById("habitat-info").style.display = 'block';
}
