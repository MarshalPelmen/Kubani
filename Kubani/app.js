'use strict';

const rollButton = document.querySelector('.roll-button');
const diceElement = document.querySelector('#dice-element');
const leavePoints = document.querySelector('.leave-points');

let totalPoints = [0, 0];
let points = 0;
let activePlayer = 0;
let isPlaying = true;

function switchPlayer(){
    if(isPlaying){
        totalPoints[activePlayer] += points;
        points = 0;
        document.querySelector(`.score-${activePlayer}`).textContent = points;
        document.querySelector(`.total-score-${activePlayer}`).textContent = totalPoints[activePlayer];
        activePlayer = activePlayer === 0 ? 1 : 0;
    }
}

rollButton.addEventListener('click', function(){  
    if(isPlaying){
        const randomValue = Math.trunc((Math.random() * 6) + 1);
        diceElement.src = `/img/${randomValue}.jpg`;

        if(randomValue !== 1){
            points += randomValue;
            document.querySelector(`.score-${activePlayer}`).textContent = points;
        }
        else{
            points = 0;
            switchPlayer();
        }
    }
}); 

leavePoints.addEventListener('click', switchPlayer);