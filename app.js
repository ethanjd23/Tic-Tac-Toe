let cells = document.querySelectorAll(".row > div");
let result = document.querySelector(".result");

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
} // adding click tracker

let n = 0; // number of clicks

function cellClicked() {
  if (event.target.textContent == "") {
    if (n % 2) {
      event.target.textContent = "O";
    } else if (n % 2 == false) {
      event.target.textContent = "X";
    }
    n++; // adding a click event
    checkWin();
  };
  }; // Makes it so you can't edit once it's clicked
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

function checkDraw() {
    for (let i = 0; i < cells.length; i++) {
        if(cells[i].textContent.stringlength > 0) {
            result.textContent = "Draw"
        };
    };
};

// HINTS
// cells[2].textcontent
// if else statements are your friend
// use === a lot
// use else if to scaffold conditions
// use && in if and chain them
