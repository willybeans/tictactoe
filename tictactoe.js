var squares = 9, turn = "X", counter = 0, ceiling = 3,
    topPos = 5, leftPos = 5;
const container = document.querySelector('.container');
window.onload = () => {
  makeSquares();
  container.addEventListener('click',function(e){
    if(e.target !== e.currentTarget){
      const clickedItemId = e.target.id;
      const clickedItemClass = e.target.className;
      const itemParents = e.target.parentNode.className;
      const div = document.getElementById(clickedItemId);
      console.log(div.childNodes[0]);
      if(clickedItemClass === "square"){
        if(div.textContent === ""){
          div.textContent = "meow";
        }
        // if(test.textContent === null){
        //   test.textContent = " "
        // } else if (test.textContent != null) {
        //   test.textContent = "meow"
        // }
        //clickedItemId.textContent = "meow";
      }
    }
  }, false);
}


function makeSquares(){
  for (let i = 0; i < squares; i++){
    var div = document.createElement("div"); //i think its this line
    div.id = `square${i}`;
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
