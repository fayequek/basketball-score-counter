let scoreHome = document.getElementById("score-home")
let scoreAway = document.getElementById("score-away")

let score = 0
let count = 0

//increment for home
function increment1() {
     score += 1
     scoreHome.textContent = score
}

function increment2() {
     score += 2
     scoreHome.textContent = score
}

function increment3() {
     score += 3
     scoreHome.textContent = score
}

//increment for guest
function increase1() {
     count += 1
     scoreAway.textContent = count
}

function increase2() {
     count += 2
     scoreAway.textContent = count
}

function increase3() {
     count += 3
     scoreAway.textContent = count
}

//reset score for new game
function reset() {
     scoreHome.textContent = 0
     scoreAway.textContent = 0
}

