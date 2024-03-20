let body = document.getElementsByTagName('body')[0];
const folder = document.querySelector(".folder")
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

window.addEventListener("DOMContentLoaded", async ()=>{
  await folderStart();
  loadIputTypeFiles();
  relaseContent();
});

function loadIputTypeFiles(){
  let input = document.createElement('input');
  input.type = "file";
  input.accept = "images/*";
  input.multiple = true;
  input.style.display = "none";
  body.appendChild(input);
  input.click();
}

function relaseContent(){
  let pastPos = undefined;
  let actualPos = undefined;
  const traking = setInterval(()=>{
    actualPos = folder.getBoundingClientRect().left;
    console.log(actualPos);
    if(pastPos == actualPos){
      clearInterval(traking)
    }else{
      pastPos = folder.getBoundingClientRect().left;
    }
  },50)
}

async function folderStart(){
  return new Promise((resolve) =>{
    folder.addEventListener("click", ()=>{
      const open = document.querySelector(".open");
      open.classList.add('open--folder');
      setTimeout(()=>{
        folder.classList.add('folder__moved');
        resolve();
      },400)
    });
  });
}
