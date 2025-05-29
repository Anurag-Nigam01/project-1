let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]; //Array
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";

};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
};

const playGame = (userChoice) => {
    // console.log("user choice=", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    // console.log("comp choice=", compChoice);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper (user ke pass rock h)
            userWin = compChoice === "paper" ? false : true; // agar comp ki choice paper hui to comp jeet jayega (userWin--false)  Aur agar comp ki choice scissors hui to user jeet jayega (userWin--true)
        } else if (userChoice === "paper") {
            //rock, scissors (user ke pass paper h)
            userWin = compChoice === "scissors" ? false : true; // agar comp ki choice scissors hui to comp jeet jayega (userWin--false) Aur agar comp ki choice rock hui to user jeet jayega (userWin--true)
        } else {
            //rock, paper (user ke pass scissors h)
            userWin = compChoice === "rock" ? false : true; // agar comp ki choice scissors hui to comp jeet jayega (userWin--false)  Aur agar comp ki choice paper hui to user jeet jayega (userWin--true)
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});