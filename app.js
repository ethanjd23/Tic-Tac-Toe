let cells = document.querySelectorAll('.row > div');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
};

let n = 0; // number of clicks

function cellClicked() {
    if (n % 2) {
        event.target.textContent = 'O'
    } else if(n % 2 == false){
        event.target.textContent = 'X'
    }
    n++; // adding a click event
    checkWin(); 
}; // alternates between X an 0 when clicked 

function checkWin() {
    if (cells[0].textContent == cells[1].textContent && cells[1].textContent == cells[2].textContent && cells[2].textContent == 'X') {
        console.log('X Wins!');        
    } else if (cells[0].textContent == cells[1].textContent && cells[1].textContent == cells[2].textContent && cells[2].textContent == 'O') {
        console.log('O Wins!');
    } else if (cells[3].textContent == cells[4].textContent && cells[4].textContent == cells[5].textContent && cells[5].textContent == 'X') {
        console.log('X wins!');
    } else if (cells[3].textContent == cells[4].textContent && cells[4].textContent == cells[5].textContent && cells[5].textContent == 'O') {
        console.log('O wins!');
    } else if (cells[6].textContent == cells[7].textContent && cells[7].textContent == cells[8].textContent && cells[8].textContent == 'X') {
        console.log('X wins!');
    } else if (cells[6].textContent == cells[7].textContent && cells[7].textContent == cells[8].textContent && cells[8].textContent == 'O') {
        console.log('O wins!');
    } else if (cells[0].textContent == cells[3].textContent && cells[3].textContent == cells[6].textContent && cells[6].textContent == 'X') {
        console.log('X wins!');
    } else if (cells[0].textContent == cells[3].textContent && cells[3].textContent == cells[6].textContent && cells[6].textContent == 'O') {
        console.log('O wins!');
    } else if (cells[1].textContent == cells[4].textContent && cells[4].textContent == cells[7].textContent && cells[7].textContent == 'X') {
        console.log('X wins!');
    } else if (cells[1].textContent == cells[4].textContent && cells[4].textContent == cells[7].textContent && cells[7].textContent == 'O') {
        console.log('O wins!');
    } else if (cells[2].textContent == cells[5].textContent && cells[5].textContent == cells[8].textContent && cells[8].textContent == 'X') {
        console.log('X wins!');
    } else if (cells[2].textContent == cells[5].textContent && cells[5].textContent == cells[8].textContent && cells[8].textContent == 'O') {
        console.log('O wins!');
    } else if (cells[0].textContent == cells[4].textContent && cells[4].textContent == cells[8].textContent && cells[8].textContent == 'X') {
        console.log('X wins!');
    } else if (cells[0].textContent == cells[4].textContent && cells[4].textContent == cells[8].textContent && cells[8].textContent == 'O') {
        console.log('O wins!');
    } else if (cells[2].textContent == cells[4].textContent && cells[4].textContent == cells[6].textContent && cells[6].textContent == 'X') {
        console.log('X wins!');
    } else if (cells[2].textContent == cells[4].textContent && cells[4].textContent == cells[6].textContent && cells[6].textContent == 'O') {
        console.log('O wins!');
    } else {console.log("draw");}
};







// HINTS 
// cells[2].textcontent
// if else statements are your friend
// use === a lot 
// use else if to scaffold conditions 
// use && in if and chain them