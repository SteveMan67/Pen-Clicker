let clicks = 0
let clickIncrement = 1
let cps = 0
let button = document.getElementById('clicker')
let clickCounter = document.getElementById('clicks')
let cpsCounter = document.getElementById('cps')
let autoClicker = {
    button: document.getElementById("auto-clicker"),
    costElement: document.getElementById("auto-clicker-cost"),
    count: 0,
    cost: 30,
    cps: 0.2,
    costMultiplier: 1.05,
    clickMultiplier: 0,
    visible: true
}
let curiousSibling = {
    button: document.getElementById("curious-sibling"),
    costElement: document.getElementById("curious-sibling-cost"),
    count: 0,
    cost: 500,
    cps: 1,
    costMultiplier: 1.05,
    clickMultiplier: 0,
    visible: false
}
let personWithAdhd = {
    button: document.getElementById("personWithAdhd"),
    costElement: document.getElementById("personWithAdhd-cost"),
    count: 0,
    cost: 1000,
    cps: 7.5,
    costMultiplier: 1.10,
    clickMultiplier: 0,
    visible: false
}
let twiceThePens = {
    button: document.getElementById("twice-as-many-pens"),
    costElement: document.getElementById("twice-as-many-pens-cost"),
    count: 0,
    cost: 15000,
    cps: 0,
    costMultiplier: 1.5,
    clickMultiplier: 2,
    visible: false
}
let ultraFastGamer = {
    button: document.getElementById("ultra-fast-gamer"),
    costElement: document.getElementById("ultra-fast-gamer-cost"),
    count: 0,
    cost: 75000,
    cps: 100,
    costMultiplier: 1.1,
    clickMultiplier: 0,
    visible: false
}
let laserMachine = {
    button: document.getElementById("laser-machine"),
    costElement: document.getElementById("laser-machine-cost"),
    count: 0,
    cost: 5000000,
    cps: 1000,
    costMultiplier: 1.05,
    clickMultiplier: 0,
    visible: false
}
let ahkFile = {
    button: document.getElementById("ahk-file"),
    costElement: document.getElementById("ahk-file-cost"),
    count: 0,
    cost: 50000000,
    cps: 15000,
    costMultiplier: 1.1,
    clickMultiplier: 0,
    visible: false
}
let clickSquared = {
    button: document.getElementById("click-squared"),
    costElement: document.getElementById("click-squared-cost"),
    count: 0,
    cost: 0,
    cps: 0,
    costMultiplier: 0,
    clickMultiplier: 0,
    visible: false
}
let fiftyNinety = {
    button: document.getElementById("5090"),
    costElement: document.getElementById("5090-cost"),
    count: 0,
    cost: 1000000000,
    cps: 1000000,
    costMultiplier: 1.1,
    clickMultiplier: 0,
    visible: false
}
let UFOs = {
    button: document.getElementById("ufos"),
    costElement: document.getElementById("ufos-cost"),
    count: 0,
    cost: 50000000000,
    cps: 25000000,
    costMultiplier: 1.15,
    clickMultiplier: 0,
    visible: false
}
let galacticImports = {
    button: document.getElementById("galactic-imports"),
    costElement: document.getElementById("galactic-imports-cost"),
    count: 0,
    cost: 500000000000,
    cps: 5000000,
    costMultiplier: 1.15,
    clickMultiplier: 0,
    visible: false
}
upgrades = [autoClicker, curiousSibling, personWithAdhd, twiceThePens, ultraFastGamer, laserMachine, ahkFile, clickSquared, fiftyNinety, UFOs, galacticImports]

function updateVisibility() {
    for (let i = 0; i < upgrades.length; i++) {
        if (upgrades[i].visible) {
            upgrades[i].button.style.display = "block";
        } else {
            upgrades[i].button.style.display = "none";
        }
    }
}

for (let i = 0; i < upgrades.length; i++) {
    upgrades[i].button.addEventListener("click", () => {
        if(clicks >= upgrades[i].cost) {
            clicks -= upgrades[i].cost
            upgrades[i].cost *= upgrades[i].costMultiplier
            upgrades[i].cost = Math.round(upgrades[i].cost)
            upgrades[i].count++
            cps += upgrades[i].cps
            if (upgrades[i].clickMultiplier > 0) {
                clickIncrement *= upgrades[i].clickMultiplier
            }
            if(upgrades[i] == clickSquared) {
                clickIncrement = Math.pow(clickIncrement, 2)
            }
            
            if (upgrades[i].count == 1) {
                upgrades[i + 1].visible = true
            }
            updateHTML()
        }
    })
}
function checkUpgradeCost(object) {
    if(clicks >= object.cost) {
        object.button.disabled = false
    } else {
        object.button.disabled = true
    }
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

makeDataObject = () => {
    let dataList = []
    for (let i = 0; i < upgrades.length; i++) {
        dataList.push({
            count: upgrades[i].count,
            cost: upgrades[i].cost,
            visible: upgrades[i].visible
        })
    }
    dataList.push({
        clicks: clicks,
        cps: cps,
        clickIncrement: clickIncrement
    })
    return dataList
}
function readDataObject(dataList) { 
    for (let i = 0; i < upgrades.length; i++) {
        upgrades[i].count = dataList[i].count
        upgrades[i].cost = dataList[i].cost
        upgrades[i].visible = dataList[i].visible
    }
    clicks = dataList[dataList.length - 1].clicks
    cps = dataList[dataList.length - 1].cps
    clickIncrement = dataList[dataList.length - 1].clickIncrement
}
function save() {
    let dataList = makeDataObject()
    localStorage.setItem("data", JSON.stringify(dataList))
}
function load() {
    let dataList = JSON.parse(localStorage.getItem("data"))
    readDataObject(dataList)
    updateHTML()
}
function reset() {
    localStorage.clear()
    location.reload()
}

function updateCosts() {
    for (let i = 0; i < upgrades.length; i++) {
        upgrades[i].costElement.innerText = makePrettyNumber(upgrades[i].cost)
    }       
}       

function checkIfDisabled() {
    for (let i = 0; i < upgrades.length; i++) {
        checkUpgradeCost(upgrades[i])
    }
}

let niceClicks
let niceCps
function updateHTML() {
    niceClicks = Math.round(clicks)
    niceClicks = makePrettyNumber(niceClicks)
    niceCps = Math.round(cps * 10) / 10
    niceCps = makePrettyNumber(niceCps)
    clickCounter.innerText = niceClicks
    cpsCounter.innerText = niceCps
    clickSquared.cost = makePrettyNumber(Math.round(cps * 60 * 20))
    checkIfDisabled()   
    updateCosts()
    updateVisibility()
    save()
}
if(localStorage.getItem("data")) {
    load()
} 
button.addEventListener("mouseup", () => {
    clicks += clickIncrement
    updateHTML()
})

autoClicker.button.addEventListener("click", () => {
    if(clicks >= autoClicker.cost) {
        clicks -= autoClicker.cost
        autoClicker.cost *= autoClicker.costMultiplier
        autoClicker.cost = Math.round(autoClicker.cost)
        autoClicker.count++
        cps += autoClicker.cps
        updateHTML()
    }
})

personWithAdhd.button.addEventListener("click", () => {
    if(clicks >= personWithAdhd.cost) {
        clicks -= personWithAdhd.cost
        personWithAdhd.cost *= personWithAdhd.costMultiplier
        personWithAdhd.cost = Math.round(personWithAdhd.cost)
        personWithAdhd.count++
        cps += personWithAdhd.cps
        updateHTML()
    }
})

addEventListener("keyup", (event) => {
    if(event.code == "Space") {
        clicks += clickIncrement
        updateHTML()
    }
})

function main() {
    if(cps > 0) {
        clicks += cps / 32
        updateHTML()
    }
}

setInterval(main, 31.25) // 32 fps loop