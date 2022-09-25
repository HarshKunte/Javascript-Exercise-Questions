let buttons = document.querySelectorAll('.choice img');
let userScoreVal = document.getElementById('userScoreVal');
let compScoreVal = document.getElementById('compScoreVal');
let userChoiceDisplay = document.getElementById('result-user-stat');
let compChoiceDisplay = document.getElementById('result-comp-stat');
let winnerDisplay = document.getElementById('result-final-stat');

buttons.forEach(button =>{
    button.addEventListener('click', actionEvent);
})

let userScore = 0;
let compScore = 0;

let choices = ['r', 'p', 's'];

function actionEvent(event){
    let user = event.target.parentElement.id;
    userChoiceDisplay.innerText = 'User: '+ getFullName(user);

    let computer = selectForComputer();
    compChoiceDisplay.innerText = 'Computer: '+ getFullName(computer);

    let choices = [user, computer];
    
    let winnerChoice = getWinner(choices);

    if(user == winnerChoice){
        userScore= userScore+1;        
    }
    else if(computer == winnerChoice){
        compScore = compScore+1;
        
    }
    userScoreVal.innerText = userScore;
    compScoreVal.innerText = compScore;

    if(userScore>compScore){
        winnerDisplay.innerText = 'Winner: You'
    }
    else if(userScore<compScore){
        winnerDisplay.innerText = 'Winner: Computer'
    }
    else{
        winnerDisplay.innerText = 'Its a Tie'
    }
}

function selectForComputer(){
    return choices[Math.floor(Math.random() * 3)];
}

function getWinner(choices){
    if(choices.includes('r') && choices.includes('p')){
        return 'p';
    }
    else if(choices.includes('r') && choices.includes('s')){
        return 'r';
    }
    else if(choices.includes('s') && choices.includes('p')){
        return 's';
    }
}

function getFullName(name){
    if(name=='r') return 'rock'
    else if(name == 'p') return 'paper'
    else return 'scissor'
}