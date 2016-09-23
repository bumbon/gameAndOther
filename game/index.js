// The markup has three sections: 1) enclosed in div paragraph telling game rules, 2) table where numbers will be placed and 3) div with information shown at the end of a game.

// Next, we create functions that will make the game logic.

// First function allows to switch visibility state of elements on a page with class active.  If we pass as parameter string value 'hidden', the elements will receive hidden attribute and will not be shown, if pass empty string value, the attribute hidden will be removed. Note that we use method getElementsByClassName to get the list of all elements, then we iterate over the list and change attribute of each element.

function changeActiveHiddenState(hiddenVal) {

    var active = document.getElementsByClassName('active');

    for (var i = 0; i < active.length; i++) {

        active[i].hidden = hiddenVal;

    }

}

// Next function prepareGame() prepares game by hiding game over info, showing active info and filling table cells with random numbers:

function prepareGame() {

    document.getElementById('gameover').hidden = 'hidden';

    changeActiveHiddenState('');

    var cells = document.getElementsByTagName('td');

    for (var i = 0; i < cells.length; i++) {

        cells[i].hidden = '';

        cells[i].innerHTML = Math.floor((Math.random() * 100) + 1);

        cells[i].onclick = handleClick;

    }

    cellsLeft = 16;

    startTime = Date.now();

}

// Function handleClick() handles clicks on table cells, it gets inner content from a clicked cell and converts it into a number, then it iterates over all cells of a table but ignore hidden ones to check if clicked number is the lower number and hides it if it is true. Also it checks if no visible cells left:

function handleClick() {

    var current = parseInt(this.innerHTML);

    var incorrect = false;

    var cells = document.getElementsByTagName('td');

    for (var i = 0; i < cells.length; i++) {

        var cell = cells[i];

        if (!cell.hidden) {

            if (parseInt(cell.innerHTML) < current) {

                incorrect = true;

            }

        }

    }

    if (!incorrect) {

        this.hidden = 'hidden';

        cellsLeft--;

        if (cellsLeft == 0) {

            finishGame();

        }

    }

}

//Method finishGame() calculates time spent for the game and writes it to the span contents with id "time", also it hides all not required elements for the finish screen and hides all elements required during the game:

function finishGame() {

    changeActiveHiddenState('hidden');

    document.getElementById('time').innerHTML = (Date.now() - startTime) / 1000;

    document.getElementById('gameover').hidden = '';

}