let cells = document.querySelectorAll('.row > div');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked() {
    event.target.textContent = 'X'
}



// HINTS 
// cells[2].textcontent
// if else statements are your friend
// use === a lot 
// use else if to scaffold conditions 
// use && in if and chain them