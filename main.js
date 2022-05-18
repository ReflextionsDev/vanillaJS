const adder = document.getElementsByClassName('add')
const subtractor = document.getElementsByClassName('remove')
const counter = document.getElementsByClassName('counter')
const container = document.getElementById('items')
let count = 0

adder[0].addEventListener("click", add)
subtractor[0].addEventListener("click", subtract)

updateCount()

function add() {
    count++
    updateCount()
}

function subtract() {
    count--
    updateCount()
}

function updateCount() {
    if (count < 0) { count = 0 }
    counter[0].innerHTML = count
    drawItems()
}

function drawItems() {

    // Remove all items
    const items = document.querySelectorAll(".item")
    items.forEach(e => e.remove())

    // Draw an item for count
    for (let i = 0; i < count; i++) {
        const elem = document.createElement("div")
        elem.className = "item"
        elem.innerHTML = "ITEM"
        container.appendChild(elem)
    }
}