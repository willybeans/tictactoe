var squares = 9, turn = "X", counter = 0, ceiling = 3,
    topPos = 5, leftPos = 5;
window.onload = () => {
  makeSquares();
}


function makeSquares(){
  for (let i = 0; i < squares; i++){
    var div = document.createElement("div"); //i think its this line
    var text = document.createTextNode("am i working");
    var container = document.querySelector('.container');
    div.id = "square" + i;
    div.className = "square";
    div.style.position = "absolute";
    //var t = document.createTextNode("hi" + i);
    //btn.onlick = applyClick;
    //div.appendChild(text);
    container.appendChild(div);
    //document.body.insertBefore(container, square);
    //document.body.appendChild(square);
    //applyClick(i);
  }
var nodeList = document.querySelectorAll('.square');
const nodeArray = [].slice.call(nodeList);
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
