const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const message = document.querySelector("#output");
const messPoin = document.querySelector("#points");

btn.addEventListener("click", function(){
  reset();
  const difficulty = (document.querySelector("#difficulty").value).toLowerCase();
  startBox(difficulty);
  
  
});




// Function

function reset(){
  container.innerHTML = "";
  message.innerHTML = "";

}

function rowColBox(value){
  switch (value){
    case "hard":
      return 10;
    case "normal":
      return 9;
    case "easy":
      return 7;
    default:
      return "ERRORE"
  }
}

function startBox(difficulty){
  let counter = 0;
  let points = 0;
  const nRowCol = rowColBox(difficulty);
  const widthBox = 100 / nRowCol;
  const boxTot = nRowCol * nRowCol;
  const bomb = random(boxTot);
  console.log(bomb);
  const maxPoints = boxTot - 16;
  
  for(let i = 1; i <= nRowCol; i++){
    for(let j = 1; j <= nRowCol; j++){
      counter++;
      
      const box = createBox(widthBox,counter);

      box.addEventListener("click",function game(){
        if(bomb.includes(this._boxID)){
          console.log("su if: " + this._boxID);
          this.classList.add("bomb");       
          gameOver(points);
          endGame(bomb);
          
        }
        else{
          console.log("su else: " + this._boxID);
          this.classList.add("clicked");
          this.removeEventListener("click",game);
          points++;
          if(points === maxPoints){
            win(points);
            endGame(bomb);
          }
          console.log(points);
        }
        console.log(this._boxID);
      
      });
      
      container.append(box);
    }
  }
}

function createBox(widthBox,nBox){
  const newBox = document.createElement('div');
  newBox.className = "square";
  newBox.style.width = widthBox + "%";
  newBox._boxID = nBox;
  return newBox;
}

function random(boxTot){
  let bomb = [];
  for(let i = 0; i < 16; i++){
    bomb.push(Math.ceil(Math.random() * boxTot));
  }
  return bomb;
}

function gameOver(points){
  message.innerHTML = "HAI PERSO";
  messPoin.innerHTML = "Punti totalizzati = " + points;
  
}

function win(points){
  message.innerHTML = "HAI VINTO";
  messPoin.innerHTML = "Punti totalizzati = " + points;
}

function endGame(bomb){
  const boxs = document.getElementsByClassName("square");
  for(let i = 0; i < boxs.length; i++){
    if(bomb.includes(boxs[i]._boxID)){
      boxs[i].classList.add("bomb");
    }
  }
  container.innerHTML += `<div class="end-game"></div>`;
}