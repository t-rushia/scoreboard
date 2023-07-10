function addOneHome() {
  homeScore++;
  homeScoreTotal.textContent = homeScore;
}

function addOneAway() {
  awayScore++;
  awayScoreTotal.textContent = awayScore;
}

function addTwoHome() {
  homeScore += 2;
  homeScoreTotal.textContent = homeScore;
}

function addTwoAway() {
  awayScore += 2;
  awayScoreTotal.textContent = awayScore;
}

function addThreeHome() {
  homeScore += 3;
  homeScoreTotal.textContent = homeScore;
}

function addThreeAway() {
  awayScore += 3;
  awayScoreTotal.textContent = awayScore;
}

let homeScore = 0;
let awayScore = 0;
let homeScoreTotal = document.getElementById("homescore-el");
let awayScoreTotal = document.getElementById("awayscore-el");
