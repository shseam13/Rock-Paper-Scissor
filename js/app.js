let choices = document.querySelectorAll(".choice");
let userScore = 0;
let compScore = 0;
let userWin = false;
document.addEventListener('contextmenu', event => event.preventDefault());
function genCompChoice(){
    let choices = ['rock', 'paper', 'scissor'];
    let choiceIndx = Math.floor(Math.random()*choices.length);
    return choices[choiceIndx];
}
function drawGame(){
    document.getElementById('message').innerHTML = 'Draw';
}

// game functionalities
function playGame(userChoice){
    let compChoice = genCompChoice();
    if (userChoice === compChoice){
        drawGame();
    }else{
        userWin = true;
        if (userChoice === 'paper'){
            // rock, scissor
            userWin = compChoice === 'rock'?true:false;
        }else if (userChoice === 'scissor'){
            // paper, rock
            userWin = compChoice === 'paper'?true:false;
        }else{
            // scissor, paper
            userWin = compChoice === 'scissor'?true:false;
        }
        if (userWin){
            userScore++;
            document.getElementById('user-score').innerHTML = userScore;
            document.getElementById('message').innerHTML = 'You Win';
        }else{
            compScore++;
            document.getElementById('computer-score').innerHTML = compScore;
            document.getElementById('message').innerHTML = 'You Lose';
        }
    }
}


// track userChoice
choices.forEach((choice)=>{
    choice.addEventListener('click', ()=>{
        let userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });

});
function restartGame(){
    userScore = 0;
    compScore = 0;
    document.getElementById('user-score').innerHTML = userScore;
    document.getElementById('computer-score').innerHTML = compScore;
    document.getElementById('message').innerHTML = 'Result will be shown here';
};