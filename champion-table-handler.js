const path = window.location.pathname;
const pathArray = path.split('/');
const page = pathArray[pathArray.length - 1];
const championName = page.split('.')[0];

IMMUTABLE_STATS = ["attack-range", "speed", "attack-vamp", "power-vamp", "armor-breach", "shield-breach", "critical-chance", "critical-damage"];


const baseStats = BASE_STATS[championName];
const statsPerLevel = STATS_PER_LEVEL[championName];

console.log(statsPerLevel);

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