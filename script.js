let userScore = 0;
let computerScore = 0;

let choices = document.querySelectorAll(".choice");
let mssg = document.querySelector("#mssg");

let userScorePara = document.querySelector("#user-score");
let computerScorePara = document.querySelector("#computer-score");

let genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}; 

let drawGame = () => {
    mssg.innerText = "Game draw. Play again";
    mssg.style.backgroundColor = "darkblue"
};

let showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        mssg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        mssg.style.backgroundColor = "green";
    }
    else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        mssg.innerText = `You lost! ${compChoice} beats ${userChoice}`;
        mssg.style.backgroundColor = "red";
    }
};

let playGame = (userChoice) => {
    let compChoice = genCompChoice();

    if(userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id"); 
        console.log("choice was clicked", userChoice);
        playGame(userChoice);


    });
});