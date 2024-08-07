let you_score = document.querySelector("#you_score");
let comp_score = document.querySelector("#comp_score");
let r = document.querySelector("#result");
let you_s = 0;
let comp_s = 0;

function comp_choice() {
    return Math.floor(Math.random() * 3);
}

let boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        let userChoice = box.getAttribute("id");
        console.log("User's choice:", userChoice);
        let comp = comp_choice();
        let choices = ["rock", "scissors", "paper"];
        let compChoice = choices[comp];
        console.log("Computer's choice:", compChoice);
        let result = determineWinner(userChoice, compChoice);
        if (result === "You win!") {
            you_s++;
            you_score.innerText = you_s;
            r.style.backgroundColor = "#28a745";
        }
        else if (result === "You lose!") {
            comp_s++;
            comp_score.innerText = comp_s;
            r.style.backgroundColor = "red";
        }
        else {
            r.style.backgroundColor = "#2e294e";
        }
        document.getElementById("result").innerText = result;
    });
});

function determineWinner(user, comp) {
    if (user === comp) {
        return "It's a tie!";
    } else if (
        (user === "rock" && comp === "scissors") ||
        (user === "scissors" && comp === "paper") ||
        (user === "paper" && comp === "rock")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}
