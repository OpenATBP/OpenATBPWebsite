const ITEMS = {
    "anti-anti-magic-potion": {
        "stat1": "Power Damage (20/50/100/200)",
        "stat2": "Power Vamp (3%/5%/7%/10%)",
        "stat3": "Shields (-5/-10-15-25)"
    },
    "anti-gravity-tote-chamber": {
        "stat1": "Health (25/75/100/150)",
        "stat2": "Regenerate (1/2/3/4)",
        "stat3": "Speed (.10/.15/.20/.30)"
    },
    "anti-magic-cube": {
        "stat1": "Shields (10/25/50/100)",
        "stat2": "Health (25/50/75/100)",
        "stat3": "Power Damage (-10/-20/-30/-50)"
    },
    "armor-of-zelderon": {
        "stat1": "Armor (10/20/30/50)",
        "stat2": "Speed (.10/.15/.20/.30)"
    },
    "ax-bass": {
        "stat1": "Attack Damage (10/25/45/75)",
        "stat2": "Attack Vamp (3%/5%/7%/10%)",
        "stat3": "Regenerate (1/2/3/5)"
    },
    "bacon-pancakes": {
        "stat1": "Health (75/150/225/325)"
    },
    "battle-moon": {
        "stat1": "Armor (10/20/30/50)",
        "stat2": "Attack Damage (5/10/15/20)",
        "stat3": "Every 120/110/100/90 seconds a Battle Moon will appear when attacked and negate physical attacks for 4/5/6/7 seconds."
    },
    "billys-loincloth": {
        "stat1": "Armor (10/20/30/50)",
        "stat2": "Regenerate (2/4/6/8)",
        "stat3": "Speed (.05/.10/.15/.20)"
    },
    "bubblegums-t-shirt": {
        "stat1": "Shields (10/20/30/50)",
        "stat2": "Health (25/75/100/150)",
        "stat3": "Speed (0.05/.10/.15/.20)"
    },
    "candy-cane-shotgun": {
        "stat1": "Attack Damage (10/25/45/75)",
        "stat2": "Armor Breach (10/25/45/75)",
        "stat3": "Attack Range (-.2/-.3/-.4/-.5)"
    },
    "crystal-gem-apple": {
        "stat1": "Armor (10/20/40/75)",
        "stat2": "Power Damage (10/20/30/50)",
        "stat3": "Cooldown Reduction (5%/7%/10%/15%)"
    },
    "demon-blood-sword": {
        "stat1": "Attack Damage (10/25/45/75)",
        "stat2": "30% Extra damage to jungle monsters"
    },
    "demonic-wishing-eye": {
        "stat1": "Power Damage (15/35/75/150)",
        "stat2": "Power Vamp (3%/5%/7%/10%)",
        "stat3": "Critical Chance (5%/5%/5%/5%)"
    },
    "electrode-gun": {
        "stat1": "Power Damage (15/35/75/150)",
        "stat2": "Cooldown (3%/5%/7%/10%)",
        "stat3": "Critical Chance (3%/5%/7%/10%)"
    },
    "enchiridion": {
        "stat1": "Health (25/75/100/150)",
        "stat2": "Attack Speed (75/125/200/275)",
        "stat3": "Critical Chance (3%/5%/7%/10%)"
    },
    "eyeball-whip": {
        "stat1": "Attack Damage (10/20/30/50)",
        "stat2": "Power Damage (10/20/30/50)",
        "stat3": "Attack Range (-10%/-20%/-30%/-35%)"
    },
    "finns-golden-sword": {
        "stat1" : "Attack Damage (15/30/60/100)"
    },
    "flame-cloak": {
        "stat1": "Shields (10/20/30/50)",
        "stat2": "Shield Breach (10/20/30/50)"
    },
    "future-crystal": {
        "stat1": "Shields (10/20/30/50)",
        "stat2": "Cooldown (3%/5%/7%/10%)",
        "stat3": "Every 240/230/220/210 seconds, a killing blow instead heals you for 10/15/20/25 percent of your health."
    },
    "ghost-pouch": {
        "stat1": "Health (25/75/100/150)",
        "stat2": "Power Damage (10/20/30/50)",
        "stat3": "Power Vamp (3%/5%/7%/10%)"
    },
    "glasses-of-nerdicon": {
        "stat1": "Regenerate (2/4/6/8)",
        "stat2": "Cooldown (5%/10%/15%/20%)",
        "stat3": "Gain XP 5%/10%/15%/20% faster"
    },
    "googoomamameter": {
        "stat1": "Health (25/75/100/150)",
        "stat2": "Regenerate (2/4/6/8)",
        "stat3": "Cooldown (5%/7%/10%/15%)"
    },
    "grass-sword": {
        "stat1": "Attack Damage (10/25/50/75)",
        "stat2": "Cooldown (5%/10%/15%/20%)"
    },
    "grob-gob-glob-grods-device": {
        "stat1": "Shields (10/20/30/50)",
        "stat2": "Power Vamp (5%/10%/15%/20%)",
        "stat3": "When you hit enemies with auto-attacks there's a 25% chance their Power Damage is decreased by 25/50/75/100 for 5 seconds."
    },
    "ice-armor": {
        "stat1": "Armor (10/25/50/100)",
        "stat2": "Health (25/75/100/150)",
        "stat3": "Attack speed (-50/-100/-150/-200)"
    },
    "ice-kings-crown": {
        "stat1": "Shields (10/20/30/50)",
        "stat2": "Power Damage (10/25/50/100)",
        "stat3": "Cooldown (5%/10%/15%/20%)"
    },
    "jakes-helm": {
        "stat1": "Armor (10/25/50/100)"
    },
    "jakes-mace": {
        "stat1": "Attack Damage (10/20/30/50)",
        "stat2": "Armor Breach (10/20/30/50)",
        "stat3": "Health (25/50/75/100)"
    },
    "lightning-sword": {
        "stat1": "Power Damage (10/32/50/100)"
    },
    "magic-nail": {
        "stat1": "Attack Damage (5/10/20/35)",
        "stat2": "Speed (.05/.10/.15/.20)",
        "stat3": "getting KO's adds bonus Attack Damage (+5 for champions, +2 for minions/jungle creeps), get KO'ed and lose half your bonus. Max of 25 Attack Damage per level in Magic Nail."
    },
    "magic-wand": {
        "stat1": "Power Damage (20/50/100/200)"
    },
    "marcelines-amp": {
        "stat1": "Power Damage (15/35/75/150)",
        "stat2": "Power Vamp (5%/10%/15%/20%)"
    },
    "medal-of-bravery": {
        "stat1": "Armor (10/20/40/75)",
        "stat2": "Attack Speed (75/150/250/350)"
    },
    "me-mows-dagger": {
        "stat1": "Attack Damage (10/20/30/50)",
        "stat2": "Critical Chance (5%/10%/15%/20%)",
        "stat3": "Attack Speed (75/150/250/350)"
    },
    "nightosphere-amulet": {
        "stat1": "Health (50/100/150/225)",
        "stat2": "Attack Vamp (5%/10%/15%/20%)",
        "stat3": "Power Vamp (5%/10%/15%/20%)"
    },
    "nothung": {
        "stat1": "Attack Damage (10/25/45/75)",
        "stat2": "Armor Breach (5/10/15/25)"
    },
    "numb-chucks": {
        "stat1": "Attack Damage (10/20/30/50)",
        "stat2": "Speed (.03/.05/.08/.10)",
        "stat3": "Your basic attacks lower enemy champion Attack Speed by 25% for 3 seconds"
    },
    "robo-suit": {
        "stat1": "Armor (10/20/40/75)",
        "stat2": "Shields (5/10/15/20)",
        "stat3": "Health (25/50/75/100)"
    },
    "simon-petrikovs-glasses": {
        "stat1": "Power Damage (10/25/50/100)",
        "stat2": "Cooldown (10%/15%/20%/25%)"
    },
    "the-art-of-fridjitsu": {
        "stat1": "Cooldown (5%/10%/15%/20%)",
        "stat2": "Speed (.05/.10/.15/.20)",
        "stat3": "Critical Chance (3%/5%/7%/10%)"
    },
    "the-gauntlet-of-the-hero": {
        "stat1": "Power Damage (15/25/50/100)",
        "stat2": "Shield Breach (10/25/50/75)"
    },
    "wizard-robe": {
        "stat1": "Shields (10/25/50/75)",
        "stat2": "Power Damage (10/20/30/50)",
        "stat3": "Cooldown Reduction (5%/7%/10%/15%)"
    },
    "wizards-cloak": {
        "stat1": "Shields (10/25/50/100)"
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