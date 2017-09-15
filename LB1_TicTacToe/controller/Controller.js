
var playerOnesTurn = true;
var playerOne = 'playerOne';
var playerTwo = 'playerTwo';
var activePlayer;
var buttonArray;


function parseArray(arrayParameter) {
    buttonArray = arrayParameter;
}

function buttonClick(button) {
    if (clickIsInvalid()) return;
    activePlayer = (playerOnesTurn) ? playerOne : playerTwo;
    changeColor(button, activePlayer);
    registerInArray(button);
    checkIfSomeWon();
    playerOnesTurn = !playerOnesTurn;
}

function checkIfSomeWon()
{
    var counter = 0;
    buttonArray.forEach(function(t) {
        t.forEach(function() {
            counter++;
        });
    });
    if (!counter > 4)
    {
        return;
    }
    if (counter === 9)
    {
        noBodyWon();
        return;
    }

    for (var x = 0; x <= 2; x++)
    {

        if (areTheyTheSame(x, 0, x, 1) && areTheyTheSame(x, 1, x, 2)) someoneWon(buttonArray[x][0]);
    }

}

function areTheyTheSame(x1, y1, x2, y2) {
    return (doesTheyExist(x1, y1, x2, y2) && buttonArray[x1][y1] === buttonArray[x2][y2]);
}

function doesTheyExist(x1, y1, x2, y2) {
    return (itExist(x1, y1) && itExist(x2, y2));
}

function itExist(x, y) {
    return (buttonArray[x] !== undefined && buttonArray[x][y] !== undefined);
}

function registerInArray(button) {
    //Lazy initalization (damn javascript)
    var x = parseInt(button.textContent.substr(0, 1));
    var y = parseInt(button.textContent.substr(1, 1));
    if (!buttonArray[x]) buttonArray[x] = [];
    buttonArray[x][y] = activePlayer;
}

function clickIsInvalid() {
    return false;
}

/*
function checkEmail(email, btn){

    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var p = (regex.test(email)) ? 'emailValid' : 'emailInvalid';
    addClass(btn,  s);
}
*/

function onloadEvent() {
    alert('swag');
}

window.onload = onloadEvent ;