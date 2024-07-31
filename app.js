let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetButton");
let newGameButton = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg =  document.querySelector("#msg");

let turn0 = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    enableBtns();
    msgContainer.classList.add("hide");
};

const gameDraw = () => {
  msg.innerText = `Game is Draw`;
  msgContainer.classList.remove("hide");
  disableBtns();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => { 
    let count = 0;
    if(turn0 == true){
      box.innerText="X";
      turn0 = false;
    }

    else{
      box.innerText="O";
      turn0 = true;
    }
    box.disabled = true;

    count++;

    checkWinner();

    let isWinner = checkWinner();
    if(count  === 9 && !isWinner){
      gameDraw();
    }
  });
});


const disableBtns = () =>{
    for(let box of boxes){
      box.disabled = true;
    }
};

const enableBtns = () =>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
};


const showWinner = (winner) =>{
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtns();
};

const checkWinner = () => {
   for(let pattern of winPattern){
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if(pos1 !="" && pos2!= "" && pos3!= ""){
      if(pos1===pos2 && pos2===pos3){
        showWinner(pos1);  
      }
    }
   }
};

newGameButton.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);