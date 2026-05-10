const path = window.location.pathname;
const pathArray = path.split('/');
const page = pathArray[pathArray.length - 1];
const championName = page.split('.')[0];

const IMMUTABLE_STATS = [
    "attack-range",
    "speed",
    "attack-vamp",
    "power-vamp",
    "armor-breach",
    "shield-breach",
    "critical-chance",
    "critical-damage"
];

function setStatValue(stat, value) {
    const statElement = document.querySelector(`.${stat}-value`);

    if (statElement) {
        statElement.textContent = value;
    }
}

function displayChampionStats(level = 1) {
    const baseStats = BASE_STATS[championName];
    const statsPerLevel = STATS_PER_LEVEL[championName];

    if (!baseStats || !statsPerLevel) {
        console.error(`Champion stats not found for: ${championName}`);
        return;
    }

    for (const stat in baseStats) {
        let statValue = baseStats[stat];

        if (level > 1 && !IMMUTABLE_STATS.includes(stat)) {
            if (stat === "attack-speed") {
                statValue = baseStats[stat] - (statsPerLevel[stat] * (level - 1));
            } else {
                statValue = baseStats[stat] + (statsPerLevel[stat] * (level - 1));
            }
        }

        setStatValue(stat, statValue);
    }
}

function displayStatsPerLevel() {
    const championStats = STATS_PER_LEVEL[championName];

    if (!championStats) return;

    const statLabels = {
        ad: `Attack damage: ${championStats["attack-damage"]}`,
        as: `Attack speed: ${championStats["attack-speed"]}`,
        armor: `Armor: ${championStats["armor"]}`,
        health: `Health: ${championStats["health"]}`,
        regen: `Health regen: ${championStats["regenerate"]}`,
        shields: `Shields: ${championStats["shields"]}`,
        pd: `Power damage: ${championStats["power-damage"]}`
    };

    for (const key in statLabels) {
        const element = document.getElementById(`${championName}-${key}`);

        if (element) {
            element.textContent = statLabels[key];
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.querySelector('.champion-level-select');

    displayChampionStats(1);
    displayStatsPerLevel();

    if (selectElement) {
        selectElement.addEventListener('change', function () {
            const selectedLevel = parseInt(selectElement.value.replace('Level ', ''), 10);
            displayChampionStats(selectedLevel);
        });
    }
});