var scores, roundScore, ActivePLayer, gamePlaying; 

init();

document.querySelector(".btn--roll").addEventListener('click', function(){
    if(gamePlaying){
       //1 Random number

    var dice = Math.floor(Math.random() * 6) + 1 ;

    //2.Display the result;
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src= "dice-" + dice + '.png';
    //3.Update the round score IF the rolled number was NOT a 1
        if( dice !== 1 ){
            //Add score
            roundScore += dice;
            document.querySelector("#current--" + activePlayer).textContent = roundScore;
        }else{
            nextPlayer();
        } 
    }

});

document.querySelector('.btn--hold').addEventListener('click', function(){
    if(gamePlaying){
         //Add Current score to Global score
         scores[activePlayer] += roundScore;

         //Update de UI
            document.querySelector('#score--'+ activePlayer).textContent = scores[activePlayer];
    
         //Check if player won the game
    
        if( scores[activePlayer] >= 100){
            document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
            document.querySelector('.player--' + activePlayer ).classList.add('player--winner');
            document.querySelector('.player--' + activePlayer ).classList.remove('player--active');
            gamePlaying = false;
    
        }else{
        nextPlayer();
        }
    
    }

});

function nextPlayer(){
//Next Player//
//activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; ==> Alternative solution for If/else <== //
if( activePlayer === 0){
        activePlayer = 1;
    }else{
        activePlayer = 0;
    }
    roundScore = 0;

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');

    document.querySelector('.dice').style.display = 'none';

}
//Starts a new Game //
document.querySelector('.btn--new').addEventListener('click', init);

//Initiazing the game//
function init(){
    scores= [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.querySelector('#name--0' ).textContent = 'Player 1';
    document.querySelector('#name--1' ).textContent = 'Player 2';

    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0' ).classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0' ).classList.add('player--active');

}













//dice = Math.floor(Math.random() * 6) + 1 ;
//document.querySelector("#current--" + activePlayer).textContent = dice;