"use strict";

let sudokuDiv = document.getElementById("sudokuDiv");
let numSelected = null;
let tileSelected = null;
let allowInteractions = true;
let errors = 0
let timer = 0;
let timerInterval;

const board = [
    "--5--9-7-",
    "27----8--",
    "----7----",
    "-97--4-5-",
    "-8-----1-",
    "-2-3--68-",
    "----9----",
    "--1----98",
    "-6-2--4--"
];

const solution = [
    "835429176",
    "279631845",
    "416578923",
    "697184352",
    "583962714",
    "124357689",
    "742893561",
    "351746298",
    "968215437"
];

window.onload = function () {
    setGame();
    startTimer();
}

function setGame() {

    errors = 0
    document.getElementById("errors").innerText = errors;

    for (let i = 1; i <= 9; i++) {

        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").appendChild(tile);
        }
    }
}

function selectNumber() {
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() {
    if (numSelected && allowInteractions) {
        if (this.innerText != "") {
            return;
        }

        let coords = this.id.split("-");
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
        }
        else if (errors < 3) {
            errors += 1;
            document.getElementById("errors").innerText = errors;
            if (errors === 3) {
                allowInteractions = false;
                alert("Maximum attempts reached. Game reset.");
                resetGame();
            }
        }
    }
}

function startTimer() {
    timerInterval = setInterval(function () {
        timer += 1;
        updateTimer();
    }, 1000);
}

function updateTimer() {
    const timerElement = document.getElementById("timer");
    if (timerElement) {
        timerElement.innerText = formatTime(timer);
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${padZero(minutes)}:${padZero(remainingSeconds)}`;
}

function padZero(value) {
    return value < 10 ? `0${value}` : value;
}

function resetGame() {
    allowInteractions = true;
    sudokuDiv.innerHTML = "";
    setGame();
}