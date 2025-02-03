const choices = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;
let totalGames = 0;
const maxGames = 5; // Game stops after 5 total rounds

document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));
document.getElementById("restart").addEventListener("click", restartGame);

function playGame(userChoice) {
    if (totalGames === maxGames) {
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * 15)];
    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        result = `You win! ${userChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        result = `You lose! ${computerChoice} beats ${userChoice}`;
    }

    totalGames++;

    document.getElementById("result").innerText = result;
    document.getElementById("user-score").innerText = userScore;
    document.getElementById("computer-score").innerText = computerScore;

    if (totalGames === maxGames) {
        showFinalResult();
        endGame();
    }
}

function showFinalResult() {
    let finalMessage = "";
    if (userScore > computerScore) {
        finalMessage = "🎉 Congratulations! You won the match!";
    } else if (userScore < computerScore) {
        finalMessage = "😞 Game Over! The computer wins.";
    } else {
        finalMessage = "🤝 It's a draw!";
    }
    document.getElementById("game-status").innerText = finalMessage;
}

function endGame() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

function restartGame() {
    userScore = 0;
    computerScore = 0;
    totalGames = 0;
    document.getElementById("user-score").innerText = userScore;
    document.getElementById("computer-score").innerText = computerScore;
    document.getElementById("result").innerText = "";
    document.getElementById("game-status").innerText = "";
    
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
}
