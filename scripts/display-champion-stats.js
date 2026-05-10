window.addEventListener('DOMContentLoaded', function () {
    const pathParts = window.location.pathname.split('/');
    const fileName = pathParts[pathParts.length - 1];
    const champion = fileName.replace('.html', '').toLowerCase();

    const championStats = STATS_PER_LEVEL[champion];

    if (STATS_PER_LEVEL && STATS_PER_LEVEL[champion]) {
        document.getElementById(`${champion}-ad`).textContent = `Attack damage: ${championStats["attack-damage"]}`;
        document.getElementById(`${champion}-as`).textContent = `Attack speed: ${championStats["attack-speed"]}`;
        document.getElementById(`${champion}-armor`).textContent = `Armor: ${championStats["armor"]}`;
        document.getElementById(`${champion}-health`).textContent = `Health: ${championStats["health"]}`;
        document.getElementById(`${champion}-regen`).textContent = `Health regen: ${championStats["regenerate"]}`;
        document.getElementById(`${champion}-shields`).textContent = `Shields: ${championStats["shields"]}`;
        document.getElementById(`${champion}-pd`).textContent = `Power damage: ${championStats["power-damage"]}`;
    }
});

