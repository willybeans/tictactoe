/* Issues:
-when there is a draw
-reset button
-also allow the game to reset once its finished
-allow players to pick turns
-allow player to play a computer???
9QYN16VBCBP2XCD9
*/
var squares = 9, turn = "X", counter = 0, ceiling = 3,
    topPos = 5, leftPos = 5, match = 0, win = false;
const gameContainer = document.querySelector('.game-container');
const wrapper = document.querySelector('.wrapper');
const wins =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

window.onload = () => {
  makeSquares();
  gameContainer.addEventListener('click',function(e){
    if(e.target !== e.currentTarget){
      const clickedItemId = e.target.id;
      const clickedItemClass = e.target.className;
      const itemParent = e.target.parentNode.className;
      const div = document.getElementById(clickedItemId);
      const test = div.childNodes[0]
      if(clickedItemClass === "square"){
        gameLogic(test, div, itemParent);
      } else if(clickedItemClass === "reset"){
        console.log("hi");
      }
    }
  }, false);
}

function gameLogic(test, div, itemParent){
    if(!test){ //if game squares text content is empty
      div.textContent = turn;
  } else {
    return;
  }
  //now you gotta figure out how to program in the win...
  let nodeList = document.querySelectorAll('.square');
  let nodeArray = [].slice.call(nodeList);
  let gameMoves = [];
  nodeArray.forEach( (x)=>{
    if(x.textContent === turn){ //logs all moves of current player
      gameMoves.push(Number(x.id));
    }
  });
  wins.forEach((x)=>{ //check for wins
    // console.log("x: " + x);
    // console.log("gameMoves: " + gameMoves);
    // console.log("match: " + match);
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < gameMoves.length; j++){
        if (x[i] === gameMoves[j]){
          match++
        }
      }
     }
     if(match === 3){
      win = true;
     }
     console.log("match after: " + match);
     //console.log("match: " + match);
     match = 0;
    });
  turn != "O" ? turn = "O" : turn = "X";//switches moves
  if(win){
    alert(win);
  }
}

function makeSquares(){
  for (let i = 0; i < squares; i++){
    var div = document.createElement("div");
    div.id = i;
    div.className = "square";
    div.style.position = "absolute";
    gameContainer.appendChild(div);
  }
let nodeList = document.querySelectorAll('.square');
let nodeArray = [].slice.call(nodeList);
  for (let i = 0; i < 3; i++){
    for (let j = counter; j < (counter + 3); j++){
      nodeArray[j].style.left = `${leftPos}%`
      nodeArray[j].style.top = `${topPos}%`;
      nodeArray[j].style.background = 'white';
      nodeArray[j].style.width = '29%';
      nodeArray[j].style.height = '29%';
      leftPos += 30;
    }
    counter += 3;
    leftPos = 5;
    topPos += 30;
  }
}
