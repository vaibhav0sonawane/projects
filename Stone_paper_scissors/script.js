let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#Me-score")
const comScorePara=document.querySelector("#Com-score")

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const Userchoice = choice.getAttribute("id");//:to get id like rock,paper
        playgame(Userchoice);
    })
})

const gencomChoice = () => {
    const choice = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return choice[idx];
}

const drawGame = () => {
    msg.innerText="Game Draw,play again";
}
const playgame = (Userchoice) => {
    const comChoice = gencomChoice();
 
    if (Userchoice === comChoice) {
        drawGame();
    } else {
        let Userwin;
     if (Userchoice === "rock") {
        Userwin = comChoice === "paper" ? false : true;
    } else if (Userchoice === "paper") {
        Userwin = comChoice === "scissors" ? false : true;
    } else {
        Userwin = comChoice === "rock" ? false : true;
    }
     ShowWinner(Userwin,Userchoice,comChoice);
    }
};
const ShowWinner = (Userwin,Userchoice,comChoice) => {
    if (Userwin) {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText="You Win";
    } else {
        compScore++;
        comScorePara.innerText=compScore;
        msg.innerText="You Loss"
    }
}