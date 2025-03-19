let clicks = 0
let clickIncrement = 1
let cps = 0
let button = document.getElementById('clicker')
let clickCounter = document.getElementById('clicks')
let cpsCounter = document.getElementById('cps')
let upgrades = [
    {   
        name: "autoClicker",
        button: document.getElementById("auto-clicker"),
        costElement: document.getElementById("auto-clicker-cost"),
        cpsElement: document.getElementById("auto-clicker-cps"),
        count: 0,
        cost: 15,
        cps: 0.2,
        costMultiplier: 1.05,
        clickMultiplier: 0,
        visible: true
    },
    {
        name: "curiousSibling",
        button: document.getElementById("curious-sibling"),
        costElement: document.getElementById("curious-sibling-cost"),
        cpsElement: document.getElementById("curious-sibling-cps"),
        count: 0,
        cost: 500,
        cps: 5,
        costMultiplier: 1.05,
        clickMultiplier: 0,
        visible: false
    },
    {
        name: "personWithAdhd",
        button: document.getElementById("personWithAdhd"),
        costElement: document.getElementById("personWithAdhd-cost"),
        cpsElement: document.getElementById("personWithAdhd-cps"),
        count: 0,
        cost: 1500,
        cps: 10,
        costMultiplier: 1.10,
        clickMultiplier: 0,
        visible: false
    },
    {
        name: "twiceThePens",
        button: document.getElementById("twice-as-many-pens"),
        costElement: document.getElementById("twice-as-many-pens-cost"),
        cpsElement: document.getElementById("twice-as-many-pens-cps"),
        count: 0,
        cost: 15000,
        cps: 0,
        costMultiplier: 1.5,
        clickMultiplier: 2,
        visible: false
    },
    {
        name: "ultraFastGamer",
        button: document.getElementById("ultra-fast-gamer"),
        costElement: document.getElementById("ultra-fast-gamer-cost"),
        cpsElement: document.getElementById("ultra-fast-gamer-cps"),
        count: 0,
        cost: 75000,
        cps: 100,
        costMultiplier: 1.1,
        clickMultiplier: 0,
        visible: false
    },
    {
        name: "laserMachine",
        button: document.getElementById("laser-machine"),
        costElement: document.getElementById("laser-machine-cost"),
        cpsElement: document.getElementById("laser-machine-cps"),
        count: 0,
        cost: 5000000,
        cps: 1000,
        costMultiplier: 1.05,
        clickMultiplier: 0,
        visible: false
    },
    {
        name: "ahkFile",
        button: document.getElementById("ahk-file"),
        costElement: document.getElementById("ahk-file-cost"),
        cpsElement: document.getElementById("ahk-file-cps"),
        count: 0,
        cost: 50000000,
        cps: 15000,
        costMultiplier: 1.1,
        clickMultiplier: 0,
        visible: false
    },
    {
        name: "clickSquared",
        button: document.getElementById("click-squared"),
        costElement: document.getElementById("click-squared-cost"),
        cpsElement: document.getElementById("click-squared-cps"),
        count: 0,
        cost: 0,
        cps: 0,
        costMultiplier: 0,
        clickMultiplier: 0,
        visible: false
    },
    {
        name: "fiftyNinety",
        button: document.getElementById("5090"),
        costElement: document.getElementById("5090-cost"),
        cpsElement: document.getElementById("5090-cps"),
        count: 0,
        cost: 1000000000,
        cps: 1000000,
        costMultiplier: 1.1,
        clickMultiplier: 0,
        visible: false
    },
    {
        name: "UFOs",
        button: document.getElementById("ufos"),
        costElement: document.getElementById("ufos-cost"),
        cpsElement: document.getElementById("ufos-cps"),
        count: 0,
        cost: 50000000000,
        cps: 25000000,
        costMultiplier: 1.15,
        clickMultiplier: 0,
        visible: false
    },
    {   
        name: "galacticImports",
        button: document.getElementById("galactic-imports"),
        costElement: document.getElementById("galactic-imports-cost"),
        cpsElement: document.getElementById("galactic-imports-cps"),
        count: 0,
        cost: 500000000000,
        cps: 5000000,
        costMultiplier: 1.15,
        clickMultiplier: 0,
        visible: false
    },
]
let upgradeCps = []
for (let i = 0; i < upgrades.length; i++) {
    upgradeCps.push(0)
}
augments = {
    cpsAugments: {

    },
    clickAugments: {
            
    },
    autoClickerAugments: {
        faster: {
            availableAfter: 1,
            cpsMultiplier: 5,
            clickMultiplier: 0,
            cost: 500,
            purchased: false,
            name: "...Faster",
            augmentFor: "Auto Clicker",
            augmentForIdentifier: "autoClicker",
            upgradeType: "cps",
            id: "faster"
        },
        annoying: {
            availableAfter: 10,
            cpsMultiplier: 2,
            clickMultiplier: 0,
            cost: 1000,
            purchased: false,
            name: "That's Just Annoying",
            augmentFor: "Auto Clicker",
            augmentForIdentifier: "autoClicker",
            upgradeType: "cps",
            id: "annoying",
        }
    },
    curiousSiblingAugments: {
        addiction: {
            availableAfter: 10,
            cpsMultiplier: 2,
            clickMultiplier: 0,
            cost: 5000,
            purchased: false,
            name: "Addiction",
            augmentFor: "Curious Sibling",
            augmentForIdentifier: "curiousSibling",
            upgradeType: "cps",
            id: "addiction",
        },
        hyperactivity: {
            availableAfter: 25,
            cpsMultiplier: 2,
            clickMultiplier: 0,
            cost: 25000,
            purchased: false,
            name: "Hyperactivity",
            augmentFor: "Curious Sibling",
            augmentForIdentifier: "curiousSibling",
            upgradeType: "cps",
            id: "hyperactivity",
        }
    },
    personWithAdhdAugments: {
        fidgety: {
            availableAfter: 5,
            cpsMultiplier: 2,
            clickMultiplier: 0,
            cost: 10000,
            purchased: false,
            name: "Fidgety",
            augmentFor: "Person with ADHD",
            augmentForIdentifier: "personWithAdhd",
            upgradeType: "cps",
            id: "fidgety",
        },
        tourettes: {
            availableAfter: 30,
            cpsMultiplier: 2,
            clickMultiplier: 0,
            cost: 500000,
            purchased: false,
            name: "Tourettes Syndrome",
            augmentFor: "Person with ADHD",
            augmentForIdentifier: "personWithAdhd",
            upgradeType: "cps",
            id: "tourettes",
        },
    },
    twiceThePensAugments: {
        plusFivePercent: {
            availableAfter: 10,
            cpsMultiplier: 0,
            clickMultiplier: 1.05,
            cost: 100000,
            purchased: false,
            name: "\'Lil Bit More",
            augmentFor: "Twice as many pens",
            augmentForIdentifier: "twiceThePens",
            upgradeType: "click",
            id: "lil-bit-more",
        },
        plusTenPercent: {
            availableAfter: 20,
            cpsMultiplier: 0,
            clickMultiplier: 1.1,
            cost: 500000,
            purchased: false,
            name: "A Bit More",
            augmentFor: "Twice as Many Pens",
            augmentForIdentifier: "twiceThePens",
            upgradeType: "click",
            id: "a-bit-more",
        }
    },
    ultraFastGamerAugments: {
        niceCpu: {
            availableAfter: 10,
            cpsMultiplier: 2,
            clickMultiplier: 0,
            cost: 1000000,
            purchased: false,
            name: "Nice CPU",
            augmentFor: "Ultra Fast Gamer",
            augmentForIdentifier: "ultraFastGamer",
            upgradeType: "cps",
            id: "nice-cpu",
        },
        ergonomicMouse: {
            availableAfter: 50,
            cpsMultiplier: 3,
            clickMultiplier: 0,
            cost: 5000000,
            purchased: false,
            name: "Ergonomic Mouse",
            augmentFor: "Ultra Fast Gamer",
            augmentForIdentifier: "ultraFastGamer",
            upgradeType: "cps",
            id: "ergonomic-mouse",
        }
    },
    laserMachineAugments: {

    },
    ahkFileAugments: {

    },
    clickSquaredAugments: {

    },
    fiftyNinetyAugments: {

    },
    UFOsAugments: {

    },
    galacticImportsAugments: {

    }
}
makeDataObject = () => {
    let dataList = []
    for (let i = 0; i < upgrades.length; i++) {
        dataList.push({
            count: upgrades[i].count,
            cost: upgrades[i].cost,
            visible: upgrades[i].visible,
            cps: upgradeCps[i]
        })
    }
    Object.keys(augments).forEach((categoryKey) => {
        let category = augments[categoryKey];
        if (category && Object.keys(category).length != 0) {
        Object.keys(category).forEach((augmentKey) => {
            let augment = category[augmentKey];
            dataList.push({
            id: augment.id,
            purchased: augment.purchased
            });
        });
        }
    });

    dataList.push({
        clicks: clicks,
        cps: cps,
        clickIncrement: clickIncrement
    })
    return dataList
}
function readDataObject(dataList) { 
    if (dataList) {
        for (let i = 0; i < upgrades.length; i++) {
            upgrades[i].count = dataList[i].count
            upgrades[i].cost = dataList[i].cost
            upgrades[i].visible = dataList[i].visible
        }
        let augmentIndex = upgrades.length
        Object.keys(augments).forEach((categoryKey) => {
            let category = augments[categoryKey];
            if (category && Object.keys(category).length != 0) {
                Object.keys(category).forEach((augmentKey) => {
                    let augment = category[augmentKey];
                    augment.purchased = dataList[augmentIndex].purchased;
                    augmentIndex++;
                });
            }
        });
        clicks = dataList[dataList.length - 1].clicks
        cps = dataList[dataList.length - 1].cps
        clickIncrement = dataList[dataList.length - 1].clickIncrement
    }
}
function save() {
    let dataList = makeDataObject()
    localStorage.setItem("data", JSON.stringify(dataList))
}
function load() {
    if(localStorage.getItem("data")) {
        let dataList = JSON.parse(localStorage.getItem("data"))
        readDataObject(dataList)
        updateHTML()
    }
    
}
function reset() {
    localStorage.clear()
    location.reload()
}
function updateVisibility() {
    for (let i = 0; i < upgrades.length; i++) {
        if (upgrades[i].visible) {
            upgrades[i].button.style.display = "block";
        } else {
            upgrades[i].button.style.display = "none";
        }
    }
    Object.keys(augments).forEach((categoryKey) => {
        let category = augments[categoryKey];
        if (category && Object.keys(category).length != 0) {
            Object.keys(category).forEach((augmentKey) => {
                let augment = category[augmentKey];
                if (augment.button) {
                    if (augment.purchased) {
                        augment.button.style.display = "none";
                    } else {
                        augment.button.style.display = "block";
                    }
                }
            });
        }
    });
}
function addEventListeners(){
    for (let i = 0; i < upgrades.length; i++) {
        upgrades[i].button.addEventListener("click", () => {
            if(clicks >= upgrades[i].cost) {
                clicks -= upgrades[i].cost
                upgrades[i].cost *= upgrades[i].costMultiplier
                upgrades[i].cost = Math.round(upgrades[i].cost)
                upgrades[i].count++
                cps += upgrades[i].cps
                upgradeCps[i] += upgrades[i].cps
                if (upgrades[i].clickMultiplier > 0) {
                    clickIncrement *= upgrades[i].clickMultiplier
                }
                if(upgrades[i].name == "clickSquared") {
                    clickIncrement = Math.pow(clickIncrement, 2)
                }
                
                if (upgrades[i].count == 1) {
                    upgrades[i + 1].visible = true
                }
                function calculateCps() {
                    let totalCps = 0
                    for (let i = 0; i < upgrades.length; i++) {
                        totalCps += upgrades[i].cps * upgrades[i].count
                    }
                    cps = totalCps
                }
                updateAugments()
                updateHTML()
            }
        })
    }
}
function checkUpgradeCost(object) {
    if (clicks >= object.cost) {
        object.button.disabled = false;
    } else {
        object.button.disabled = true;
    }

    Object.keys(augments).forEach((categoryKey) => {
        let category = augments[categoryKey];
        if (category && Object.keys(category).length != 0) {
            Object.keys(category).forEach((augmentKey) => {
                let augment = category[augmentKey];
                let button = document.getElementById(augment.id)
                if (augment && button) {
                    if (clicks >= augment.cost) {
                        button.disabled = false;
                    } else {
                        button.disabled = true;
                    }
                }
            });
        }
    });
}

function makePrettyNumber(number) {
    let prettyNumber = number
    if (number >= 1000000000000) {
        number = Math.round(number)
        prettyNumber = (number / 1000000000000).toFixed(3) + "T"
    } else if (number >= 1000000000) {
        number = Math.round(number)
        prettyNumber = (number / 1000000000).toFixed(3) + "B"
    } else if (number >= 1000000) {
        number = Math.round(number)
        prettyNumber = (number / 1000000).toFixed(3) + "M"
    } else {   
        prettyNumber = Math.round(number)
        prettyNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    return prettyNumber
}

function augmentButton(title, cost, cpsMultiplier, clickMultiplier, upgradeType, augmentFor, id)  {
    let buttonHtml
    if(upgradeType == "cps") {
        buttonHtml = `
        <button class="augment" id="${id}">
            <span class="augment-head">${title}</span><br>
            <span class="augment-info">
                <span class="augment-cost">Cost: <span id="click-power-cost">${cost}</span> clicks</span><br>
                <span id="upgrade-description">x<span id="cps">${cpsMultiplier}</span> cps for ${augmentFor}</span>
            </span>
        </button>`
    } else if(upgradeType == "click") {
        buttonHtml = `
        <button class="augment">
            <span class="augment-head">${title}</span><br>
            <span class="augment-info">
                <span class="augment-cost">Cost: <span id="click-power-cost">${cost}</span> clicks</span><br>
                <span id="upgrade-description">+<span id="click">${clickMultiplier}\%</span> click power</span>
            </span>
        </button>`
    } 
    return buttonHtml
}

function addAugments() {
    // Loop through each augment category (e.g., autoClickerAugments, curiousSiblingAugments)
    Object.keys(augments).forEach((categoryKey) => {
        let category = augments[categoryKey] // Access the category object
        // Skip empty categories
        if (category && Object.keys(category).length != 0) {

            // Loop through each augment in the category
            Object.keys(category).forEach((augmentKey) => {
                let augment = category[augmentKey] // Access the specific augment

                // Find the corresponding upgrade
                let upgrade = upgrades.find(upg => upg.name === augment.augmentForIdentifier);

                // Check if the upgrade exists and the augment is available and not purchased
                if (
                    upgrade &&
                    augment &&
                    !augment.purchased &&
                    augment.availableAfter <= upgrade.count
                ) {
                    // Create the augment button
                    let buttonHtml = augmentButton(
                        augment.name,
                        makePrettyNumber(augment.cost),
                        augment.cpsMultiplier,
                        augment.clickMultiplier,
                        augment.upgradeType,
                        augment.augmentFor,
                        augment.id
                    );

                    // Add the button to the DOM
                    let augmentElement = document.createElement("li")
                    augmentElement.innerHTML = buttonHtml
                    document.getElementById("augment-list").appendChild(augmentElement)

                    // Store the button reference in the augment object
                    augment.button = augmentElement.querySelector("button")
                }
            })
        }
    })
}
function calculateCps() {
    let totalCps = 0
    for (let i = 0; i < upgrades.length; i++) {
        totalCps += upgrades[i].cps * upgrades[i].count
    }
    cps = totalCps
}
function addAugmentEventListeners() {
    Object.keys(augments).forEach((categoryKey) => {
        let category = augments[categoryKey];
        if (category && Object.keys(category).length != 0) {
            Object.keys(category).forEach((augmentKey) => {
                let augment = category[augmentKey];
                if (augment && augment.button) {
                    augment.button.addEventListener("click", () => {
                        if (clicks >= augment.cost) {
                            clicks -= augment.cost;
                            if (augment.cpsMultiplier > 0) {
                                let upgrade = upgrades.find(upg => upg.name === augment.augmentForIdentifier);
                                if (upgrade) {
                                    let index = upgrades.indexOf(upgrade);
                                    upgradeCps[index] = upgrades[index].cps * upgrades[index].count;
                                    upgrades[index].cps *= augment.cpsMultiplier;
                                    cps += upgradeCps[index] * (augment.cpsMultiplier - 1);
                                    upgradeCps[index] *= augment.cpsMultiplier;
                                    calculateCps()
                                }
                            }
                            if (augment.clickMultiplier > 0) {
                                clickIncrement *= augment.clickMultiplier;
                            }
                            augment.purchased = true;
                            updateAugments();
                            updateHTML();
                        }
                    });
                }
            });
        }
    });
}

function updateAugments() {
    document.getElementById("augment-list").innerHTML = "";
    addAugments()
    addAugmentEventListeners()
}

function updateCosts() {
    for (let i = 0; i < upgrades.length; i++) {
        if (i != 3 && i != 7) {
            upgrades[i].costElement.innerText = makePrettyNumber(upgrades[i].cost)
        }
        
    }       
}       

function updateCps() {
    for (let i = 0; i < upgrades.length; i++) {
        if (upgrades[i].count > 0 && upgrades[i].cpsElement) {
            upgrades[i].cpsElement.innerText = makePrettyNumber(Math.round(upgrades[i].cps * 10) / 10);
        }
    }
}
function checkIfDisabled() {
    for (let i = 0; i < upgrades.length; i++) {
        checkUpgradeCost(upgrades[i])
    }

}


function updateMainData() {
    niceClicks = Math.round(clicks)
    niceClicks = makePrettyNumber(niceClicks)
    niceCps = Math.round(cps * 10) / 10
    niceCps = makePrettyNumber(niceCps)
    clickCounter.innerText = niceClicks
    cpsCounter.innerText = niceCps
    upgrades[7].cost = Math.round(cps * 60 * 20)
}
let niceClicks
let niceCps
load()
addEventListeners()
updateAugments()
function updateHTML() {
    calculateCps()
    updateMainData()
    updateCps()
    checkIfDisabled()       
    updateCosts()
    updateVisibility()
    save()
}
updateHTML()
if(localStorage.getItem("data")) {
    load()
} 
button.addEventListener("mouseup", () => {
    clicks += clickIncrement
    updateHTML()
})

addEventListener("keyup", (event) => {
    if(event.code == "Space") {
        clicks += clickIncrement
        updateHTML()
        updateAugments()
    }
})

function main() {
    if(cps > 0) {
        clicks += cps / 30
        updateHTML()
    }
}

setInterval(main, 1000/30) // 30 fps loop