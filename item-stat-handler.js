const ITEMS = {
    "anti-anti-magic-potion": {
        "stat1": "Power Damage (25/50/125/250)",
        "stat2": "Power Vamp (3%/5%/7%/10%)",
        "stat3": "Shields (-5/-10/-20/-40)"
    },
    "anti-gravity-tote-chamber": {
        "stat1": "Health (25/75/100/150)",
        "stat2": "Regenerate (1/2/3/4)",
        "stat3": "Speed (.10/.15/.20/.30)"
    },
    "anti-magic-cube": {
        "stat1": "Shields (10/20/30/45)",
        "stat2": "Power Damage (-10/-20/-30/-50)",
        "stat3": "Abilities reduce target's Power Damage (-25/-50/-75/-100)"
    },
    "armor-of-zelderon": {
        "stat1": "Armor (5/10/15/20)",
        "stat2": "Shield Breach (5/10/15/25)",
        "stat3": "After casting an ability, gain a temporary speed boost (0.05/0.1/0.15/0.2) for 2 seconds."
    },
    "ax-bass": {
        "stat1": "Attack Damage (15/30/55/115)",
        "stat2": "Attack Vamp (10%/15%/15%/20%)",
        "stat3": "Cannot heal from usual means. Gain 15% Max HP on Champion KO."
    },
    "bacon-pancakes": {
        "stat1": "Health (100/225/350/500)"
    },
    "battle-moon": {
        "stat1": "Armor (10/15/25/35)",
        "stat2": "Health (25/75/100/150)",
        "stat3": "Have random chance (3%/5%/10%/15%) to negate all damage"
    },
    "billys-loincloth": {
        "stat1": "Armor (5/10/20/30)",
        "stat2": "Regenerate (2/4/6/8)",
        "stat3": "Speed (.05/.10/.15/.20)"
    },
    "bubblegums-t-shirt": {
        "stat1": "Shields (5/10/15/25)",
        "stat2": "Health (25/75/100/150)",
        "stat3": "Speed (0.05/.10/.15/.20)"
    },
    "candy-cane-shotgun": {
        "stat1": "Attack Damage (10/25/45/75)",
        "stat2": "Armor Breach (5/10/20/30)",
        "stat3": "Attack Range (-.2/-.3/-.4/-.5)"
    },
    "cosmic-gauntlet": {
        "stat1": "Power Damage (15/40/75/115)",
        "stat2": "Attack Damage (5/10/15/25)",
        "stat3": "Spells enhance your next basic attack (+20 AD per stack), if used quick enough (decays in 1/2/3/4 seconds)"
    },
    "crystal-gem-apple": {
        "stat1": "Armor (10/20/30/40)",
        "stat2": "Power Damage (5/10/20/35)",
        "stat3": "Cooldown Reduction (5%/7%/10%/15%)"
    },
    "demon-blood-sword": {
        "stat1": "Attack Damage (10/25/45/75)",
        "stat2": "Bonus damage to jungle monsters (15%/20%/25%/30%)",
        "stat3": "Gain additional xp (10%) and unique buffs from monsters for 60s. (+15 AD and +40 PD from Owls and Gnomes | +5 Armor and +5 MR from Grassbear and Hugwolf | +0.15 MS from Goo | +5% Crit from Keeoth)"
    },
    "demonic-wishing-eye": {
        "stat1": "Power Damage (15/35/75/150)",
        "stat2": "Critical Chance: (5%/10%/20%/40%)",
        "stat3": "Abilities can now crit. AoE and Dot spells have half the chance to proc."
    },
    "electrode-gun": {
        "stat1": "Power Damage (15/35/75/150)",
        "stat2": "Cooldown (5%/10%/15%/20%)",
        "stat3": "25% chance to deal chain damage to enemies (25%/30%/40%/50% of damage)"
    },
    "enchiridion": {
        "stat1": "Health (75/125/200/275)",
        "stat2": "Attack Damage (5/10/15/25)",
        "stat3": "Critical Chance (1%/2%/4%/8%)"
    },
    "eyeball-whip": {
        "stat1": "Attack Damage (10/20/30/50)",
        "stat2": "Power Damage (10/20/30/50)",
        "stat3": "Attack Range (-10%/-20%/-30%/-35%)"
    },
    "fight-king-sword": {
        "stat1": "Attack Damage (10/25/50/80)",
        "stat2": "Power Damage (10/20/30/50)",
        "stat3": "Basic attacks enhance your next ability (+15 PD per stack) if used quickly (decays in 2/4/7/12 seconds)"
    },
    "finns-golden-sword": {
        "stat1" : "Attack Damage (15/30/60/100)"
    },
    "flame-cloak": {
        "stat1": "Shields (10/15/25/40)",
        "stat2": "Health (50/100/150/250)",
        "stat3": "Periodic spell damage (3.5% Max HP) to nearby enemies"
    },
    "future-crystal": {
        "stat1": "Shields (5/10/15/25)",
        "stat2": "Cooldown (3%/5%/7%/10%)",
        "stat3": "Chance to cheat death once per life (25%/40%/50%/75%). Heals to 30% Max HP"
    },
    "ghost-pouch": {
        "stat1": "Health (50/100/175/250)",
        "stat2": "Cooldown (10%/15%/20%/25%)",
        "stat3": "Kills and assists heal nearby allies by (3%/5%/10%/15% of their Max HP)"
    },
    "glasses-of-nerdicon": {
        "stat1": "Regenerate (2/4/6/8)",
        "stat2": "Health (25/50/100/200)",
        "stat3": "Gain XP (15%/25%/35%/35%) faster. Max level in this item grants +1 Spell Point."
    },
    "glob-helmet": {
        "stat1": "Armor (10/15/25/50)",
        "stat2": "Deal increased damage (5%/10%/15%/25%) to targets with a higher max HP"
    },
    "googoomamameter": {
        "stat1": "Health (25/75/125/200)",
        "stat2": "Cooldown (5%/7%/10%/15%)",
        "stat3": "Gain xp from altars (25 XP), +5 more score, and 1.5x modifier to altar buff stats"
    },
    "grape-juice-sword": {
        "stat1": "Attack Damage (10/25/50/75)",
        "stat2": "Increased damage to minions (15%/20%/25%/30%)",
        "stat3": "Additional xp from minions (10%). Empower nearby minions (15% AD, 50% Armor/MR, +0.3 Speed)"
    },
    "grass-sword": {
        "stat1": "Attack Damage (10/25/50/75)",
        "stat2": "Attack Speed (75/100/125/150)",
        "stat3": "Critical Damage +25%"
    },
    "grob-gob-glob-grods-device": {
        "stat1": "Shields (10/20/30/40)",
        "stat2": "Cooldown (5%/10%/15%/20%)",
        "stat3": "Every 90 seconds, gain a spell shield that blocks all effects from one spell."
    },
    "hotdog-knights-helmet": {
        "stat1": "Armor: 10/15/17/20",
        "stat2": "Crit chance: 5%/10%/15%/30%",
        "stat3": "Armor Breach: 5/10/20/40"
    },
    "ice-armor": {
        "stat1": "Armor (10/15/25/40)",
        "stat2": "Health (50/100/175/275)",
        "stat3": "Speed (-.05/-.05/-.10/-.15)"
    },
    "ice-kings-crown": {
        "stat1": "Shields (10/15/17/20)",
        "stat2": "Shield Breach (10/15/20/40)",
        "stat3": "Cooldown (3%/7%/10%/15%)"
    },
    "jakes-helm": {
        "stat1": "Armor (10/25/40/60)"
    },
    "jakes-mace": {
        "stat1": "Attack Damage (10/20/40/60)",
        "stat2": "Armor Breach (5/10/15/25)",
        "stat3": "Health (25/50/75/100)"
    },
    "lich-hand": {
        "stat1": "Power Damage (20/45/90/165)",
        "stat2": "Shield Breach (5/10/15/20)",
        "stat3": "Deal increased spell damage when hitting the same target. (10% per stack). 1 second cooldown on obtaining new stacks."
    },
    "lightning-sword": {
        "stat1": "Power Damage (10/32/50/75)",
        "stat2": "Getting KO's add bonus Spell Damage (+7 for champions, +4 for minions/jungle creeps), get KO'ed and lose half your bonus. Max of 55 Spell Damage per level in Lightning Sword."
    },
    "magic-nail": {
        "stat1": "Attack Damage (5/10/20/35)",
        "stat2": "Speed (.05/.10/.15/.20)",
        "stat3": "Getting KO's adds bonus Attack Damage (+7 for champions, +4 for minions/jungle creeps), get KO'ed and lose half your bonus. Max of 40 Attack Damage per level in Magic Nail."
    },
    "magic-carpet": {
        "stat1": "Cooldown (5%/10%/15%/20%)",
        "stat2": "Speed (.05/.10/.20/.40)",
        "stat3": "Power Damage (10/15/30/50)"
    },
    "magic-wand": {
        "stat1": "Power Damage (20/50/100/200)"
    },
    "marcelines-amp": {
        "stat1": "Power Damage (15/35/75/150)",
        "stat2": "Power Vamp (5%/10%/15%/20%)"
    },
    "medal-of-bravery": {
        "stat1": "Armor (10/10/10/25)",
        "stat2": "Attack Speed (75/125/200/275)",
        "stat3": "Critical Chance (5%/10%/15%/30%)"
    },
    "me-mows-dagger": {
        "stat1": "Attack Damage (10/20/30/50)",
        "stat2": "Critical Chance (5%/15%/30%/60%)",
        "stat3": "Attack Speed (75/150/250/350)"
    },
    "night-sword": {
        "stat1": "Attack Damage (10/25/55/110)",
        "stat2": "Armor (5/-10/-20/-40)",
        "stat3": "Briefly enter stealth (2 seconds) after each kill"
    },
    "nightosphere-amulet": {
        "stat1": "Health (50/100/150/225)",
        "stat2": "Attack Vamp (5%/10%/15%/20%)",
        "stat3": "Power Vamp (5%/10%/15%/20%)"
    },
    "nothung": {
        "stat1": "Attack Damage (10/25/45/75)",
        "stat2": "Armor Breach (10/20/35/55)"
    },
    "numb-chucks": {
        "stat1": "Attack Damage (10/20/30/50)",
        "stat2": "Speed (.03/.05/.08/.10)",
        "stat3": "Every 2 autos your attacks lower enemy champion speed by (10%/15%/20%/30%)"
    },
    "peppermint-tank": {
        "stat1": "Power Damage (10/25/50/100)",
        "stat2": "Health (25/50/100/175)",
        "stat3": "Increased spell damage (5%/10%/15%/25%) when near target"
    },
    "robo-suit": {
        "stat1": "Armor (10/25/40/60)",
        "stat2": "Increased speed (0.05 per stack, capping at 3 stacks) out of combat. When at three stacks, first hit removes stacks and slows the attacker by 20% for 2 seconds. This slow effect has a 10 second cooldown."
    },
    "sai": {
        "stat1": "Attack Damage: 10/25/50/75",
        "stat2": "Crit Chance: 5%/10%/15%/20%",
        "stat3": "Basic attacks have a chance to reduce the target’s Armor. The chance and amount of reduction are equal to your Crit Chance. This effect lasts 3 seconds and does not stack"
    },
    "simon-petrikovs-glasses": {
        "stat1": "Power Damage (10/15/25/50)",
        "stat2": "Cooldown (10%/15%/20%/25%)",
        "stat3": "Allies within range receive increased Power Damage (50/75/100/150)"
    },
    "the-art-of-fridjitsu": {
        "stat1": "Cooldown (5%/10%/15%/20%)",
        "stat2": "Speed (.05/.10/.15/.20)",
        "stat3": "Critical Chance (5%/10%/15%/20%)"
    },
    "the-gauntlet-of-the-hero": {
        "stat1": "Power Damage (15/35/70/125)",
        "stat2": "Shield Breach (10/20/35/55)"
    },
    "wizard-robe": {
        "stat1": "Shields (5/10/15/20)",
        "stat2": "Power Damage (10/20/35/50)",
        "stat3": "Getting KO's add bonus Cooldown Reduction (+1 for champs, +0.2 for minions/jungle monsters), get KO'd and lose half your bonus. Max of 10% CDR per level in Wizard Robe. Epic jungle monsters count as Champion KO for gaining stacks."
    },
    "wizards-cloak": {
        "stat1": "Shields (10/20/30/50)"
    }
}

window.onload = function() {
    for (let item in ITEMS) {
        const element = document.querySelector(`.${item}`);
        if (element) {
            const itemStats = ITEMS[item];

            for (let statKey in itemStats) {
                const li = document.createElement("li");
                li.textContent = `${itemStats[statKey]}`;
                element.appendChild(li);
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