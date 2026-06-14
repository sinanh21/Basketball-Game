// State variables to track scores
let homeScore = 0;
let guestScore = 0;

// Grab DOM elements
const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");
const homeCard = document.getElementById("home-card");
const guestCard = document.getElementById("guest-card");

// Functions to add scores for Home
function addHome(points) {
    homeScore += points;
    homeScoreEl.textContent = homeScore;
    highlightLeader();
}

// Functions to add scores for Guest
function addGuest(points) {
    guestScore += points;
    guestScoreEl.textContent = guestScore;
    highlightLeader();
}

// STRETCH GOAL: Highlight the leading team dynamically
function highlightLeader() {
    // Remove leader styles first
    homeCard.classList.remove("leader");
    guestCard.classList.remove("leader");

    // Apply leader style to whoever has more points (ignore if tied)
    if (homeScore > guestScore) {
        homeCard.classList.add("leader");
    } else if (guestScore > homeScore) {
        guestCard.classList.add("leader");
    }
}

function resetGame() {
    homeScore=0;
    guestScore=0;

    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;

    homeCard.classList.remove("leader");
    guestCard.classList.remove("leader");


}