const path = window.location.pathname;
const pathArray = path.split('/');
const page = pathArray[pathArray.length - 1];
const championName = page.split('.')[0];

BASE_STATS = {
    "billy": {
        "attack-damage": 50,
        "armor": 20,
        "attack-speed": 1800,
        "power-damage": 20,
        "shields": 15,
        "health": 500,
        "regenerate": 2,
        "attack-range": 1.8,
        "speed": 2.8,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "critical-damage": "200%"
    }
}

STATS_PER_LEVEL = {
    "billy": {
        "attack-damage": 5,
        "armor": 1,
        "attack-speed": 30,
        "power-damage": 3,
        "shields": 1,
        "health": 50,
        "regenerate": 1,
    }
}

IMMUTABLE_STATS = ["attack-range", "speed", "attack-vamp", "power-vamp", "critical-damage"];


const baseStats = BASE_STATS[championName];
const statsPerLevel = STATS_PER_LEVEL[championName];

window.onload = function() {
    for (let stat in baseStats) {
        if (baseStats.hasOwnProperty(stat)) {
            let className = `${stat}-value`;
            let statElement = document.querySelector(`.${className}`);
            let baseStat = baseStats[stat];

            if (statElement) {
                statElement.innerHTML = baseStat;
            }
        }
    }
}

const selectElement = document.querySelector('.champion-level-select');

selectElement.addEventListener('change', ()=>{
    const level = selectElement.value;
    const levelInt = level.split(' ')[1];
    
    for (let stat in baseStats) {
        if (baseStats.hasOwnProperty(stat)) {
            if (IMMUTABLE_STATS.includes(stat)) continue;
            let newStat;

            if (levelInt == 1) {
                newStat = baseStats[stat];
            } else if (stat == "attack-speed") {
                newStat = baseStats[stat] - (statsPerLevel[stat] * (levelInt - 1));
            } else {
                newStat = baseStats[stat] + (statsPerLevel[stat] * (levelInt - 1));
            }
        
            let className = `${stat}-value`;
            let statElement = document.querySelector(`.${className}`);

            if (selectElement) {
                statElement.innerHTML = newStat;
            }
        }
    }
})