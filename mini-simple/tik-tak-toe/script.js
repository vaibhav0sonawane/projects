let boxes = document.querySelectorAll(".box");
let resBtn = document.querySelector("#btn-reset");
let newGamebtn = document.querySelector("#new-start");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;
let win_patt = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;//if a user click twise a box the box value won't change
        CheckWin();
    });
});


const showWinner = (winner) => {
    msg.innerText = `Congratulation,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBox();
}

const CheckWin = () => {
    for (pattern of win_patt) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner", pos1val);
                showWinner(pos1val);
            }
        }
        
    }
}


const resetBtn = () => {
    turn0 = true;
    enableBox();
    msgcontainer.classList.add("hide");
};

const disableBox = () => {
    for (box of boxes) {
        box.disabled = true;
    }
};
const enableBox = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};



newGamebtn.addEventListener("click", resetBtn);
resBtn.addEventListener("click", resetBtn);