let compScore = 0;
let userScore = 0;

const choices = document.querySelectorAll(".move");
const msg = document.querySelector("#msg");

const userScores = document.querySelector(".playerscore");
const compScores = document.querySelector(".computerscore");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScores.innerText = userScore;
        msg.innerText = `Congratulations! Your ${userChoice} beats ${compChoice}`;
        msg.computedStyleMap.backgroundColor = "green";
    }else{
        compScore++;
        compScores.innerText = compScore;
        console.log("You Lost!");
        msg.innerText = `You Lost ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () => {
    console.log("Game Was Draw!");
    msg.innerText = "Draw!";
    msg.style.backgroundColor = "black";
};

const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer Choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, compChoice, userChoice);
    }
};

choices.forEach((move) => {
    move.addEventListener("click", () => {
        const userChoice = move.getAttribute("id");
        playGame(userChoice);
    })
});