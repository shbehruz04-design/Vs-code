let homeScore = 0;
let guestScore = 0;

let home = document.getElementById("ball");
let guest = document.getElementById("ball2");

function homeAdd1() {
    homeScore = homeScore + 1;
    home.textContent = homeScore;
}

function homeAdd2() {
    homeScore = homeScore + 2;
    home.textContent = homeScore;
}

function homeAdd3() {
    homeScore = homeScore + 3;
    home.textContent = homeScore;
}

function guestAdd1() {
    guestScore = guestScore + 1;
    guest.textContent = guestScore;
}
function guestAdd2() {
    guestScore = guestScore + 2;
    guest.textContent = guestScore;
}
function guestAdd3() {
    guestScore = guestScore + 3;
    guest.textContent = guestScore;
}

function resetScores() {
    homeScore = 0;
    guestScore = 0;
    home.textContent = 0;
    guest.textContent = 0;
}
function resetScoreH() {
    homeScore = 0;
    home.textContent = 0;
}
function resetScoreA() {
    guestScore = 0;
    guest.textContent = 0;
}
// function resetScores() {
//     homeScore = 0;
//     guestScore = 0;
//     home.textContent = 0;
//     guest.textContent = 0;
// }


