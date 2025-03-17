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
    cost: 50,
    cps: 0.5,
}
let upgrade2 = {
    button: document.getElementById("upgrade-2"),
    costElement: document.getElementById("upgrade2-cost"),
    count: 0,
    cost: 500,
    cps: 5,
}
function checkUpgradeCost(object) {
    if(clicks >= object.cost) {
        object.button.disabled = false
    } else {
        object.button.disabled = true
    }
}

function updateCosts() {
    autoClicker.costElement.innerText = autoClicker.cost
    upgrade2.costElement.innerText = upgrade2.cost
}
function updateHTML() {
    clicks = Math.round(clicks)
    clickCounter.innerText = clicks
    cpsCounter.innerText = cps
    checkUpgradeCost(autoClicker)
    checkUpgradeCost(upgrade2)
    updateCosts()
    // localStorage.setItem("clicks", clicks.toString())
    // localStorage.setItem("autoClickerCount", autoClickerCount.toString())
}

button.addEventListener("mouseup", () => {
    clicks += clickIncrement
    updateHTML()
})

function autoClick() {
    if(cps > 0) {
        clicks += 1
        updateHTML()
    }
    setTimeout(autoClick, 1000 / cps)
}
autoClick()

autoClicker.button.addEventListener("click", () => {
    if(clicks >= autoClicker.cost) {
        clicks -= autoClicker.cost
        autoClicker.cost *= 1.05
        autoClicker.cost = Math.round(autoClicker.cost)
        autoClicker.count++
        cps += autoClicker.cps
        updateHTML()
    }
})

upgrade2.button.addEventListener("click", () => {
    if(clicks >= upgrade2.cost) {
        clicks -= upgrade2.cost
        upgrade2.cost *= 1.05
        upgrade2.cost = Math.round(upgrade2.cost)
        upgrade2.count++
        cps += upgrade2.cps
        updateHTML()
    }
})

addEventListener("keyup", (event) => {
    if(event.code == "Space") {
        clicks += clickIncrement
        updateHTML()
    }
})

// if(localStorage.getItem("clicks")) {
//     clicks = parseInt(localStorage.getItem("clicks"))
// }
// if(localStorage.getItem("autoClickerCount")) {
//     autoClickerCount = parseInt(localStorage.getItem("autoClickerCount"))
// }
updateHTML()