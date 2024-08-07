const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let turn_X = true;
let game_on = true;
let h1 = document.querySelector("h1");
let reset = document.querySelector("#reset");
let box = document.querySelectorAll(".box");

reset.addEventListener("click", () => {
    reset.innerText = "Reset";
    h1.innerText = "Tic Tac Toe";
    turn_X = true;
    game_on = true;
    for (let b of box) {
        b.innerText = "";
        b.classList.remove("disabled");
    }
});

box.forEach((b) => {
    b.addEventListener("click", () => {
        if (game_on && b.innerText === "") {
            if (turn_X) {
                b.innerText = "X";
                turn_X = false;
            } else {
                b.innerText = "O";
                turn_X = true;
            }
            b.classList.add("disabled");
            if (check_win()) {
                game_on = false;
            }
            else if (is_draw()) {
                h1.innerText = "It's a Draw!";
                reset.innerText = "New Game";
                game_on = false;
            }
        }
    });
});

function check_win() {
    for (let pattern of win) {
        let val_1 = box[pattern[0]].innerText;
        let val_2 = box[pattern[1]].innerText;
        let val_3 = box[pattern[2]].innerText;
        if (val_1 !== "" && val_2 !== "" && val_3 !== "") {
            if (val_1 === val_2 && val_1 === val_3) {
                h1.innerText = `${val_1} Won`;
                reset.innerText = "New Game";               
                return true;
            }
        }
    }
    return false;
}
function is_draw() {
    return Array.from(box).every(b => b.innerText !== "");
}