let cells = document.querySelectorAll(".row > div");
let result = document.querySelector(".result");
let body = document.querySelector("body")

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}; // adding click tracker
let n = 0; // number of plays on board 
let x = 0; // number of total clicks used for reset 
function cellClicked() {
  if (event.target.textContent == "") {
    if (n % 2) {
      event.target.textContent = "O";
    } else if (n % 2 == false) {
      event.target.textContent = "X";
    };
    checkWin();
  };// Makes it so you can't edit once it's clicked
  if(result.textContent == ""){
    n++; // adding a click event
    let x = n;
  };
  checkReset();
  }; // alternates between X an 0 when clicked
 

function checkWin() {
  if (
    cells[0].textContent == cells[1].textContent &&
    cells[1].textContent == cells[2].textContent &&
    cells[2].textContent == "X"
  ) {
    result.textContent = "X Wins!";
  } else if (
    cells[0].textContent == cells[1].textContent &&
    cells[1].textContent == cells[2].textContent &&
    cells[2].textContent == "O"
  ) {
    result.textContent = "O Wins!";
  } else if (
    cells[3].textContent == cells[4].textContent &&
    cells[4].textContent == cells[5].textContent &&
    cells[5].textContent == "X"
  ) {
    result.textContent = "X Wins!";
  } else if (
    cells[3].textContent == cells[4].textContent &&
    cells[4].textContent == cells[5].textContent &&
    cells[5].textContent == "O"
  ) {
    result.textContent = "O Wins!";
  } else if (
    cells[6].textContent == cells[7].textContent &&
    cells[7].textContent == cells[8].textContent &&
    cells[8].textContent == "X"
  ) {
    result.textContent = "X Wins!";
  } else if (
    cells[6].textContent == cells[7].textContent &&
    cells[7].textContent == cells[8].textContent &&
    cells[8].textContent == "O"
  ) {
    result.textContent = "O Wins!";
  } else if (
    cells[0].textContent == cells[3].textContent &&
    cells[3].textContent == cells[6].textContent &&
    cells[6].textContent == "X"
  ) {
    result.textContent = "X Wins!";
  } else if (
    cells[0].textContent == cells[3].textContent &&
    cells[3].textContent == cells[6].textContent &&
    cells[6].textContent == "O"
  ) {
    result.textContent = "O Wins!";
  } else if (
    cells[1].textContent == cells[4].textContent &&
    cells[4].textContent == cells[7].textContent &&
    cells[7].textContent == "X"
  ) {
    result.textContent = "X Wins!";
  } else if (
    cells[1].textContent == cells[4].textContent &&
    cells[4].textContent == cells[7].textContent &&
    cells[7].textContent == "O"
  ) {
    result.textContent = "O Wins!";
  } else if (
    cells[2].textContent == cells[5].textContent &&
    cells[5].textContent == cells[8].textContent &&
    cells[8].textContent == "X"
  ) {
    result.textContent = "X Wins!";
  } else if (
    cells[2].textContent == cells[5].textContent &&
    cells[5].textContent == cells[8].textContent &&
    cells[8].textContent == "O"
  ) {
    result.textContent = "O Wins!";
  } else if (
    cells[0].textContent == cells[4].textContent &&
    cells[4].textContent == cells[8].textContent &&
    cells[8].textContent == "X"
  ) {
    result.textContent = "X Wins!";
  } else if (
    cells[0].textContent == cells[4].textContent &&
    cells[4].textContent == cells[8].textContent &&
    cells[8].textContent == "O"
  ) {
    result.textContent = "O Wins!";
  } else if (
    cells[2].textContent == cells[4].textContent &&
    cells[4].textContent == cells[6].textContent &&
    cells[6].textContent == "X"
  ) {
    result.textContent = "X Wins!";
  } else if (
    cells[2].textContent == cells[4].textContent &&
    cells[4].textContent == cells[6].textContent &&
    cells[6].textContent == "O"
  ) {
    result.textContent = "O Wins!";
  } else if (n == 9) {
      result.textContent = "Draw"
  };
}; // Checks all win conditions

function checkReset() {
  x++;
  if (x > n + 1) {
    n = 0; // resetting play number
    x = 0;
    result.textContent = ""; // resetting win message
    for (let i = 0; i < cells.length; i++) {
      cells[i].textContent = ""; // resetting all cells 
    };
  };
 };