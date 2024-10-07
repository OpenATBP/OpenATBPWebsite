const path = window.location.pathname;
const pathArray = path.split('/');
const page = pathArray[pathArray.length - 1];
const championName = page.split('.')[0];

BASE_STATS = {
    "billy": {
        "attack-damage": 55,
        "armor": 21,
        "attack-speed": 1770,
        "power-damage": 23,
        "shields": 16,
        "health": 550,
        "regenerate": 3,
        "attack-range": 1.8,
        "speed": 2.8,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "armor-breach": 0,
        "shield-breach": 0,
        "critical-chance": "0%",
        "critical-damage": "200%"
    },
    "bmo": {
        "attack-damage": 33,
        "armor": 22,
        "attack-speed": 1560,
        "power-damage": 58,
        "shields": 27,
        "health": 407,
        "regenerate": 3,
        "attack-range": 5.5,
        "speed": 2.95,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "armor-breach": 0,
        "shield-breach": 0,
        "critical-chance": "0%",
        "critical-damage": "200%"
    },
    "cb": {
        "attack-damage": 49,
        "armor": 11,
        "attack-speed": 1570,
        "power-damage": 33,
        "shields": 12,
        "health": 525,
        "regenerate": 3,
        "attack-range": 1.8,
        "speed": 2.7,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "armor-breach": 0,
        "shield-breach": 0,
        "critical-chance": "0%",
        "critical-damage": "200%"
    },
    "finn": {
        "attack-damage": 55,
        "armor": 21,
        "attack-speed": 1450,
        "power-damage": 17,
        "shields": 11,
        "health": 525,
        "regenerate": 3,
        "attack-range": 1.5,
        "speed": 3,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "armor-breach": 0,
        "shield-breach": 0,
        "critical-chance": "0%",
        "critical-damage": "200%"
    },
    "fionna": {
        "attack-damage": 55,
        "armor": 21,
        "attack-speed": 1340,
        "power-damage": 17,
        "shields": 11,
        "health": 550,
        "regenerate": 3,
        "attack-range": 1.5,
        "speed": 2.8,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "armor-breach": 0,
        "shield-breach": 0,
        "critical-chance": "0%",
        "critical-damage": "200%"
    },
    "fp": {
        "attack-damage": 34,
        "armor": 11,
        "attack-speed": 1760,
        "power-damage": 63,
        "shields": 32,
        "health": 385,
        "regenerate": 3,
        "attack-range": 6.4,
        "speed": 2.85,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "armor-breach": 0,
        "shield-breach": 0,
        "critical-chance": "0%",
        "critical-damage": "200%"
    },
    "gunter": {
        "attack-damage": 54,
        "armor": 11,
        "attack-speed": 1425,
        "power-damage": 33,
        "shields": 11,
        "health": 350,
        "regenerate": 3,
        "attack-range": 5,
        "speed": 2.85,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "armor-breach": 5,
        "shield-breach": 0,
        "critical-chance": "1%",
        "critical-damage": "225%"
    },
    "hunson": {
        "attack-damage": 59,
        "armor": 16,
        "attack-speed": 1560,
        "power-damage": 53,
        "shields": 27,
        "health": 515,
        "regenerate": 5,
        "attack-range": 1.5,
        "speed": 2.85,
        "attack-vamp": "0%",
        "power-vamp": "20%",
        "armor-breach": 0,
        "shield-breach": 0,
        "critical-chance": "0%",
        "critical-damage": "200%"
    },
    "iceking": {
        "attack-damage": 22,
        "armor": 11,
        "attack-speed": 1200,
        "power-damage": 63,
        "shields": 31,
        "health": 385,
        "regenerate": 3,
        "attack-range": 5,
        "speed": 2.8,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "armor-breach": 0,
        "shield-breach": 0,
        "critical-chance": "0%",
        "critical-damage": "200%"
    },
    "jake": {
        "attack-damage": 43,
        "armor": 23,
        "attack-speed": 1450,
        "power-damage": 12,
        "shields": 11,
        "health": 800,
        "regenerate": 3,
        "attack-range": 1.5,
        "speed": 2.65,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "armor-breach": 0,
        "shield-breach": 0,
        "critical-chance": "0%",
        "critical-damage": "200%"
    },
    "lemongrab": {
        "attack-damage": 53,
        "armor": 11,
        "attack-speed": 1450,
        "power-damage": 22,
        "shields": 38,
        "health": 535,
        "regenerate": 3,
        "attack-range": 1.5,
        "speed": 3,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "armor-breach": 0,
        "shield-breach": 0,
        "critical-chance": "0%",
        "critical-damage": "200%"
    },
    "lich": {
        "attack-damage": 37,
        "armor": 1,
        "attack-speed": 1780,
        "power-damage": 53,
        "shields": 31,
        "health": 400,
        "regenerate": 3,
        "attack-range": 6,
        "speed": 2.45,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "armor-breach": 0,
        "shield-breach": 0,
        "critical-chance": "0%",
        "critical-damage": "200%"
    },
    "lsp": {
        "attack-damage": 28,
        "armor": 29,
        "attack-speed": 1550,
        "power-damage": 54,
        "shields": 29,
        "health": 385,
        "regenerate": 3,
        "attack-range": 5.75,
        "speed": 3.15,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "armor-breach": 0,
        "shield-breach": 0,
        "critical-chance": "0%",
        "critical-damage": "200%"
    },
    "magicman": {
        "attack-damage": 47,
        "armor": 21,
        "attack-speed": 1560,
        "power-damage": 28,
        "shields": 21,
        "health": 390,
        "regenerate": 3,
        "attack-range": 5,
        "speed": 2.75,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "armor-breach": 0,
        "shield-breach": 0,
        "critical-chance": "0%",
        "critical-damage": "200%"
    },
    "marceline": {
        "attack-damage": 53,
        "armor": 11,
        "attack-speed": 1650,
        "power-damage": 30,
        "shields": 11,
        "health": 450,
        "regenerate": 3,
        "attack-range": 2,
        "speed": 3,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "armor-breach": 0,
        "shield-breach": 0,
        "critical-chance": "0%",
        "critical-damage": "200%"
    },
    "neptr": {
        "attack-damage": 40,
        "armor": 17,
        "attack-speed": 1460,
        "power-damage": 39,
        "shields": 17,
        "health": 400,
        "regenerate": 3,
        "attack-range": 5,
        "speed": 2.85,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "armor-breach": 0,
        "shield-breach": 0,
        "critical-chance": "0%",
        "critical-damage": "200%"
    },
    "pb": {
        "attack-damage": 38,
        "armor": 16,
        "attack-speed": 1450,
        "power-damage": 63,
        "shields": 26,
        "health": 400,
        "regenerate": 3,
        "attack-range": 5,
        "speed": 2.75,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "armor-breach": 0,
        "shield-breach": 0,
        "critical-chance": "0%",
        "critical-damage": "200%"
    },
    "pepbut": {
        "attack-damage": 55,
        "armor": 11,
        "attack-speed": 1440,
        "power-damage": 28,
        "shields": 11,
        "health": 450,
        "regenerate": 3,
        "attack-range": 2,
        "speed": 2.8,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "armor-breach": 0,
        "shield-breach": 0,
        "critical-chance": "0%",
        "critical-damage": "200%"
    },
    "rattleballs": {
        "attack-damage": 55,
        "armor": 26,
        "attack-speed": 1250,
        "power-damage": 17,
        "shields": 21,
        "health": 460,
        "regenerate": 3,
        "attack-range": 1.5,
        "speed": 2.8,
        "attack-vamp": "0%",
        "power-vamp": "0%",
        "armor-breach": 0,
        "shield-breach": 0,
        "critical-chance": "0%",
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
        "health": 25,
        "regenerate": 1,
    },
    "finn": {
        "attack-damage": 5,
        "armor": 1,
        "attack-speed": 50,
        "power-damage": 2,
        "shields": 1,
        "health": 25,
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
        "health": 50,
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

IMMUTABLE_STATS = ["attack-range", "speed", "attack-vamp", "power-vamp", "armor-breach", "shield-breach", "critical-chance", "critical-damage"];


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

    // add mobile nav handler here cause two window.onload scripts cant be used on one page
    const mobileNavOpenBtn = document.getElementById('mobile-nav-open-btn');
    const mobileNavCloseBtn = document.getElementById('mobile-nav-close');
    const mobileNav = document.getElementById('mobile-nav');

    mobileNavOpenBtn.addEventListener('click', function() {
        mobileNav.style.left = '0';
        mobileNavOpenBtn.style.display = 'none';
    });

    mobileNavCloseBtn.addEventListener('click', function() {
        mobileNav.style.left = '-100%';
        mobileNavOpenBtn.style.display = 'flex';
    });
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