const pathName = window.location.pathname;
const pathArr = pathName.split('/');
const pageName = pathArr[pathArr.length - 1];
const characterName = pageName.split('.')[0];

const recommendedBackpacks = {
    billy: {
        "Champion's Backpack": "3344343455",
        "Assassin's Starter-Kit": "2244242455",
        "Choose Goose's Lootbox": "2211212145",
        "Nurse Pound Cake's Medkit": "2255252533",
        "Techno Tank": "3355353544"
    },
    bmo: {
        "Champion's Backpack": "3344343455",
        "Assassin's Starter-Kit": "2244242455",
        "Techno Tank": "3355353544",
        "Bily's Bag": "1133131355",
        "Sorcerous Satchel": "3344343415"
    },
    cb: {
        "Assassin's Starter-Kit": "2244242455",
        "Candy Monarch Regalia": "1122121235",
        "Daredevil's Duffel Bag": "1122121244",
        "Nearly Ultimate Wizard Wear": "2244242433"
    },
    finn: {
        "Assassin's Starter-Kit": "1133131355",
        "Nurse Pound Cake's Medkit": "2255252533",
        "Bily's Bag": "1133131355",
        "Susan's Shredder": "1133131355"
    },
    fionna: {
        "Assassin's Starter-Kit": "1133131355",
        "Bily's Bag": "1133131355",
        "Huntress Wizard's Arsenal": "1133131345",
        "Susan's Shredder": "1133131355"
    },
    fp: {
        "Assassin's Starter-Kit": "1122121233",
        "Susan's Shredder": "1133131355"
    },
    gunter: {
        "Assassin's Starter-Kit": "1133131355",
        "Assassin's Starter-Kit": "2244242455",
        "Bily's Bag": "1133131355",
        "Nearly Ultimate Wizard Wear": "2244242433",
        "Huntress Wizard's Arsenal": "1133131345",
        "Susan's Shredder": "1133131355"
    },
    hunson: {
        "Champion's Backpack": "3344343455",
        "Techno Tank": "3355353544",
    },
    iceking: {
        "Assassin's Starter-Kit": "2244242455",
        "Huntress Wizard's Arsenal": "1122121245",
        "Candy Monarch Regalia": "1122121235",
        "Daredevil's Duffel Bag": "2211212144",
        "Nearly Ultimate Wizard Wear": "2244242433"
    },
    jake: {
        "Champion's Backpack": "3344343455",
        "Techno Tank": "3355353544",
        "Sorcerous Satchel": "3344343415"
    },
    lemongrab: {
        "Champion's Backpack": "3344343455",
        "Techno Tank": "3355353544",
        "Sorcerous Satchel": "3344343415"
    },
    lich: {
        "Assassin's Starter-Kit": "1133131355",
        "Assassin's Starter-Kit": "2244242455",
        "Candy Monarch Regalia": "1122121235",
        "Daredevil's Duffel Bag": "2211212144",
        "Nearly Ultimate Wizard Wear": "2244242433"
    },
    lsp: {
        "Assassin's Starter-Kit": "2244242455",
        "Nurse Pound Cake's Medkit": "2255252533",
        "Daredevil's Duffel Bag": "2211212144",
        "Nearly Ultimate Wizard Wear": "2244242433"
    },
    magicman: {
        "Assassin's Starter-Kit": "1133131355",
        "Bily's Bag": "1133131355"
    },
    marceline: {
        "Assassin's Starter-Kit": "2244242455",
        "Huntress Wizard's Arsenal": "1122121245",
        "Candy Monarch Regalia": "1122121235",
        "Daredevil's Duffel Bag": "2211212144",
        "Nearly Ultimate Wizard Wear": "2244242433"
    },
    neptr: {
        "Choose Goose's Lootbox": "2211212145",
        "Huntress Wizard's Arsenal": "1122121245",
        "Candy Monarch Regalia": "1122121235",
        "Daredevil's Duffel Bag": "2211212144",
        "Nearly Ultimate Wizard Wear": "2244242433"
    },
    pepbut: {
        "Champion's Backpack": "3344343455",
        "Techno Tank": "3355353544",
        "Huntress Wizard's Arsenal": "1133131345",
    },
    pb: {
        "Huntress Wizard's Arsenal": "1133131345",
        "Huntress Wizard's Arsenal": "1122121245",
        "Daredevil's Duffel Bag": "2211212144",
        "Bily's Bag": "1133131355",
        "Nearly Ultimate Wizard Wear": "2244242433"
    },
    rattleballs: {
        "Assassin's Starter-Kit": "1133131355",
        "Bily's Bag": "1133131355"
    }
}

function getBackpackPageName(displayBagName) {
    switch (displayBagName) {
        case "Assassin's Starter-Kit":
            return "assassin-starter-kit.html";
        case "Bily's Bag":
            return "billy-bag.html";
        case "Champion's Backpack":
            return "champions-backpack.html";
        case "Choose Goose's Lootbox": 
            return "choose-goose-lootbox.html";
        case "Daredevil's Duffel Bag":
            return "daredevil-duffel-bag.html";
        case "Huntress Wizard's Arsenal":
            return "huntress-wizard-arsenal.html";
        case "Nurse Pound Cake's Medkit":
            return "nurse-poundcake-medkit.html";
        case "Susan's Shredder":
            return "susan-shredder.html";
        default: return `${displayBagName.toLowerCase().replaceAll(' ', '-')}.html`;        
    } 
}

function buildRecommendedBackpacks(bagData) {
    const section = document.getElementById('recommended-backpacks');
    const ulElement = document.createElement('ul');
    ulElement.classList.add('wiki-list', 'wiki-backpacks-list');
    for (const key in bagData) {
        let liElement = document.createElement('li');
        let aElement = document.createElement('a');
        aElement.classList.add('wiki-link');
        let backpackPageName = getBackpackPageName(key);
        aElement.setAttribute('href', `../backpacks/${backpackPageName}`)
        aElement.textContent = key + " ";
        let liText = bagData[key].split('').join(' > ');
        liElement.appendChild(aElement);
        let node = document.createTextNode(liText);
        liElement.appendChild(node);
        ulElement.appendChild(liElement);
    }
    section.appendChild(ulElement);
}

let bags = recommendedBackpacks[characterName];
buildRecommendedBackpacks(bags);