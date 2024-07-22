document.addEventListener("DOMContentLoaded", () => {
    // Charger les avis des visiteurs
    const avisContainer = document.getElementById("avis-container");

    const avis = [
        "Super expérience, les animaux sont bien traités !",
        "Nous avons adoré la visite guidée !",
        "Un endroit merveilleux pour toute la famille."
    ];

    avis.forEach(avis => {
        const avisElement = document.createElement("div");
        avisElement.className = "avis";
        avisElement.textContent = avis;
        avisContainer.appendChild(avisElement);
    });
});
