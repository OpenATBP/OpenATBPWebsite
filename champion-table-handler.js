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
    },
    "bmo": {
        "attack-damage": 30,
        "armor": 20,
        "attack-speed": 1600,
        "power-damage": 55,
        "shields": 25,
        "health": 375,
        "regenerate": 2,
        "attack-range": 5.5,
        "speed": 2.95,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "critical-damage": "200%"
    },
    "cb": {
        "attack-damage": 45,
        "armor": 10,
        "attack-speed": 1600,
        "power-damage": 30,
        "shields": 10,
        "health": 500,
        "regenerate": 2,
        "attack-range": 1.8,
        "speed": 2.8,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "critical-damage": "200%"
    },
    "finn": {
        "attack-damage": 50,
        "armor": 20,
        "attack-speed": 1500,
        "power-damage": 15,
        "shields": 10,
        "health": 500,
        "regenerate": 2,
        "attack-range": 1.5,
        "speed": 3,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "critical-damage": "200%"
    },
    "fionna": {
        "attack-damage": 50,
        "armor": 20,
        "attack-speed": 1400,
        "power-damage": 15,
        "shields": 10,
        "health": 500,
        "regenerate": 2,
        "attack-range": 1.5,
        "speed": 2.65,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "critical-damage": "200%"
    },
    "fp": {
        "attack-damage": 30,
        "armor": 10,
        "attack-speed": 1800,
        "power-damage": 60,
        "shields": 30,
        "health": 350,
        "regenerate": 2,
        "attack-range": 6.5,
        "speed": 2.85,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "critical-damage": "200%"
    },
    "gunter": {
        "attack-damage": 50,
        "armor": 10,
        "attack-speed": 1500,
        "power-damage": 30,
        "shields": 10,
        "health": 325,
        "regenerate": 2,
        "attack-range": 5,
        "speed": 2.85,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "critical-damage": "250%"
    },
    "hunson": {
        "attack-damage": 55,
        "armor": 15,
        "attack-speed": 1600,
        "power-damage": 50,
        "shields": 25,
        "health": 475,
        "regenerate": 3,
        "attack-range": 1.5,
        "speed": 2.85,
        "attack-vamp": "0%",
        "power-vamp": "20%",
        "critical-damage": "200%"
    },
    "iceking": {
        "attack-damage": 50,
        "armor": 10,
        "attack-speed": 1250,
        "power-damage": 60,
        "shields": 30,
        "health": 350,
        "regenerate": 2,
        "attack-range": 5,
        "speed": 2.8,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "critical-damage": "200%"
    },
    "jake": {
        "attack-damage": 40,
        "armor": 20,
        "attack-speed": 1500,
        "power-damage": 10,
        "shields": 10,
        "health": 750,
        "regenerate": 2,
        "attack-range": 1.5,
        "speed": 2.65,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "critical-damage": "200%"
    },
    "lemongrab": {
        "attack-damage": 50,
        "armor": 10,
        "attack-speed": 1500,
        "power-damage": 20,
        "shields": 35,
        "health": 500,
        "regenerate": 2,
        "attack-range": 1.5,
        "speed": 3,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "critical-damage": "200%"
    },
    "lich": {
        "attack-damage": 35,
        "armor": 0,
        "attack-speed": 1800,
        "power-damage": 50,
        "shields": 30,
        "health": 350,
        "regenerate": 2,
        "attack-range": 6,
        "speed": 2.45,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "critical-damage": "200%"
    },
    "lsp": {
        "attack-damage": 25,
        "armor": 27,
        "attack-speed": 1600,
        "power-damage": 50,
        "shields": 27,
        "health": 350,
        "regenerate": 2,
        "attack-range": 5.75,
        "speed": 3.15,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "critical-damage": "200%"
    },
    "magicman": {
        "attack-damage": 45,
        "armor": 20,
        "attack-speed": 1600,
        "power-damage": 25,
        "shields": 20,
        "health": 350,
        "regenerate": 2,
        "attack-range": 5,
        "speed": 2.75,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "critical-damage": "200%"
    },
    "marceline": {
        "attack-damage": 50,
        "armor": 10,
        "attack-speed": 1700,
        "power-damage": 25,
        "shields": 10,
        "health": 400,
        "regenerate": 2,
        "attack-range": 2,
        "speed": 3,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "critical-damage": "200%"
    },
    "neptr": {
        "attack-damage": 35,
        "armor": 15,
        "attack-speed": 1500,
        "power-damage": 35,
        "shields": 15,
        "health": 375,
        "regenerate": 2,
        "attack-range": 5,
        "speed": 2.85,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "critical-damage": "200%"
    },
    "pb": {
        "attack-damage": 35,
        "armor": 15,
        "attack-speed": 1500,
        "power-damage": 60,
        "shields": 25,
        "health": 350,
        "regenerate": 2,
        "attack-range": 5,
        "speed": 2.75,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "critical-damage": "200%"
    },
    "pepbut": {
        "attack-damage": 50,
        "armor": 10,
        "attack-speed": 1500,
        "power-damage": 25,
        "shields": 10,
        "health": 400,
        "regenerate": 2,
        "attack-range": 2,
        "speed": 2.8,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "critical-damage": "200%"
    },
    "rattleballs": {
        "attack-damage": 50,
        "armor": 25,
        "attack-speed": 1300,
        "power-damage": 15,
        "shields": 20,
        "health": 425,
        "regenerate": 2,
        "attack-range": 1.5,
        "speed": 2.8,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "critical-damage": "200%"
    },
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
    },
    "bmo": {
        "attack-damage": 3,
        "armor": 2,
        "attack-speed": 40,
        "power-damage": 3,
        "shields": 2,
        "health": 32,
        "regenerate": 1,
    },
    "cb": {
        "attack-damage": 4,
        "armor": 1,
        "attack-speed": 30,
        "power-damage": 3,
        "shields": 2,
        "health": 50,
        "regenerate": 1,
    },
    "finn": {
        "attack-damage": 5,
        "armor": 1,
        "attack-speed": 50,
        "power-damage": 2,
        "shields": 1,
        "health": 50,
        "regenerate": 1,
    },
    "fionna": {
        "attack-damage": 5,
        "armor": 1,
        "attack-speed": 60,
        "power-damage": 2,
        "shields": 1,
        "health": 50,
        "regenerate": 1,
    },
    "fp": {
        "attack-damage": 4,
        "armor": 1,
        "attack-speed": 40,
        "power-damage": 3,
        "shields": 2,
        "health": 35,
        "regenerate": 1,
    },
    "gunter": {
        "attack-damage": 4,
        "armor": 1,
        "attack-speed": 75,
        "power-damage": 3,
        "shields": 1,
        "health": 25,
        "regenerate": 1,
    },
    "hunson": {
        "attack-damage": 4,
        "armor": 1,
        "attack-speed": 40,
        "power-damage": 3,
        "shields": 2,
        "health": 40,
        "regenerate": 2,
    },
    "iceking": {
        "attack-damage": 2,
        "armor": 1,
        "attack-speed": 50,
        "power-damage": 3,
        "shields": 1,
        "health": 35,
        "regenerate": 1,
    },
    "jake": {
        "attack-damage": 3,
        "armor": 3,
        "attack-speed": 50,
        "power-damage": 2,
        "shields": 1,
        "health": 50,
        "regenerate": 1,
    },
    "lemongrab": {
        "attack-damage": 3,
        "armor": 1,
        "attack-speed": 50,
        "power-damage": 2,
        "shields": 3,
        "health": 35,
        "regenerate": 1,
    },
    "lich": {
        "attack-damage": 2,
        "armor": 1,
        "attack-speed": 20,
        "power-damage": 3,
        "shields": 1,
        "health": 50,
        "regenerate": 1,
    },
    "lsp": {
        "attack-damage": 2.5,
        "armor": 2,
        "attack-speed": 50,
        "power-damage": 4,
        "shields": 2,
        "health": 35,
        "regenerate": 1,
    },
    "magicman": {
        "attack-damage": 2,
        "armor": 1,
        "attack-speed": 40,
        "power-damage": 3,
        "shields": 1,
        "health": 40,
        "regenerate": 1,
    },
    "marceline": {
        "attack-damage": 3,
        "armor": 1,
        "attack-speed": 50,
        "power-damage": 5,
        "shields": 1,
        "health": 35,
        "regenerate": 1,
    },
    "neptr": {
        "attack-damage": 5,
        "armor": 2,
        "attack-speed": 40,
        "power-damage": 4,
        "shields": 2,
        "health": 25,
        "regenerate": 1,
    },
    "pb": {
        "attack-damage": 3,
        "armor": 1,
        "attack-speed": 50,
        "power-damage": 3,
        "shields": 1,
        "health": 50,
        "regenerate": 1,
    },
    "pepbut": {
        "attack-damage": 5,
        "armor": 1,
        "attack-speed": 60,
        "power-damage": 3,
        "shields": 1,
        "health": 50,
        "regenerate": 1,
    },
    "rattleballs": {
        "attack-damage": 5,
        "armor": 1,
        "attack-speed": 50,
        "power-damage": 2,
        "shields": 1,
        "health": 35,
        "regenerate": 1,
    },
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