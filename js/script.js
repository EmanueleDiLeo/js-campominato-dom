const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

btn.addEventListener("click", function(){
  reset();
  const difficulty = (document.querySelector("#difficulty").value).toLowerCase();
  startBox(difficulty);
  
  
});




// Function

function reset(){
  container.innerHTML = "";
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
  const nRowCol = rowColBox(difficulty);
  const widthBox = 100 / nRowCol;

  for(let i = 1; i <= nRowCol; i++){
    for(let j = 1; j <= nRowCol; j++){
      counter++;
      const box = createBox(widthBox,counter);
      
      box.addEventListener("click",function(){
        this.classList.add("click");
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
