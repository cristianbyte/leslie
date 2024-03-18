let body = document.getElementsByTagName('body')[0];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


for(let i = 0;i < 8;i++){
  let fill = document.createElement("div");
  let randomX = getRandomInt(41);
  let randomY = getRandomInt(21);
  fill.classList.add('fill');
  fill.style.top = ((randomY * 50) - 2) + "px";
  fill.style.left = ((randomX * 50) - 2) + "px";
  console.log(randomX ,randomY);

  body.appendChild(fill);
} 