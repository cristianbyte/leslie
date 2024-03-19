let body = document.getElementsByTagName('body')[0];
let numberGrids = Math.floor(window.innerWidth/300 + window.innerHeight/200);
const gridWidth = Math.floor( window.innerWidth / 50);
const gridHeight = Math.floor( window.innerHeight / 50);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

(function (){
  for(let i = 0;i < numberGrids ;i++){
    let fill = document.createElement("div");
    let heart = document.createElement("div")
    let randomX = getRandomInt(gridWidth);
    let randomY = getRandomInt(gridHeight);
    console.log(randomX);
    fill.classList.add('fill');
    fill.style.top = ((randomY * 50) - 2 ) + "px";
    fill.style.left = ((randomX * 50) - 2 ) + "px";
    heart.classList.add('heart');
    heart.style.top = getRandomInt(gridHeight*50) + "px";
    heart.style.left = getRandomInt(gridWidth*50) + "px";
    console.log(getRandomInt(gridHeight));
    
    body.appendChild(fill);
    body.appendChild(heart);
  } 
})();

window.addEventListener("DOMContentLoaded",()=>{
  folderStart();
});

function folderStart(){
  const folder = document.querySelector(".folder")
  folder.classList.add('animatedFolder')
}
