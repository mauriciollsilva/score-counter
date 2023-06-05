const formElement = document.querySelector("form");
const tableBodyElement = document.getElementById("tableBody");
const calculateButton = document.getElementById("calculateButton");
const winnerLabel = document.getElementById("winnerLabel");

let currentRound = 1;
const players = [];

formElement.addEventListener('submit', (e) => {
e.preventDefault();

const inputNameElement = document.querySelector("input#name").value;
const inputRoundElement = document.querySelector("input#round").value;
const inputScoresElement = document.querySelector("input#scores").value;

const player = {
name: inputNameElement,
round: parseInt(inputRoundElement),
scores: parseInt(inputScoresElement)
};

if (player.round !== currentRound) {
alert("A partida atual é diferente da partida registrada.");
return;
}

players.push(player);

const trElement = document.createElement("tr");

const tdElement1 = document.createElement("td");
tdElement1.textContent = player.name;

const tdElement2 = document.createElement("td");
tdElement2.textContent = player.round;

const tdElement3 = document.createElement("td");
tdElement3.textContent = player.scores;

trElement.append(tdElement1);
trElement.append(tdElement2);
trElement.append(tdElement3);

tableBodyElement.append(trElement);
});

calculateButton.addEventListener('click', () => {
if (players.length === 0) {
alert("Não há dados suficientes para calcular a média.");
return;
}

const roundPlayers = players.filter(player => player.round === currentRound);
if (roundPlayers.length === 0) {
alert("Não há jogadores registrados para a partida atual.");
return;
}

const winner = roundPlayers.reduce((prev, curr) => (curr.scores > prev.scores) ? curr : prev);
winnerLabel.textContent = `Vencedor da Partida ${currentRound}: ${winner.name} (${winner.scores} pontos)`;

currentRound++;
});
