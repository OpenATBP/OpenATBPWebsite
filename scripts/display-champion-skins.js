document.addEventListener("DOMContentLoaded", function () {
    const pathParts = window.location.pathname.split("/");
    const fileName = pathParts[pathParts.length - 1];
    const championName = fileName.replace(".html", "").toLowerCase();

    const skinGrid = document.querySelector(".champion-outfit-grid");

    if (!skinGrid) return;

    const championSkins = SKINS[championName];

    if (!championSkins || Object.keys(championSkins).length === 0) {
        skinGrid.innerHTML = `
            <p class="champion-no-outfits">No outfits available for this champion yet.</p>
        `;
        return;
    }

    skinGrid.innerHTML = "";

    for (const skinName in championSkins) {
        const skin = championSkins[skinName];

        const skinCard = document.createElement("article");
        skinCard.className = "champion-outfit-card";

        skinCard.innerHTML = `
            <img src="${skin.img}" alt="${skinName} outfit">

            <h3>${skinName}</h3>

            <p class="champion-outfit-cost">
                <span>${skin.cost}</span>
                <img src="/img/wiki/other/pb-coin.png" alt="Coins">
            </p>

            <p class="champion-outfit-release">
                Released: <span>${skin.released}</span>
            </p>
        `;

        skinGrid.appendChild(skinCard);
    }
});