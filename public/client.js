// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html
var canv;
var ctx;
var xvel = 0;
var yvel = 0;
var playerx = 10; var playery = 10;
var gridSize = 20; var tilecount = 20;
var applex = 15;var appley = 15;
var snakeTrail = [];
var tailLength = 4 ;
function game (){
  document.getElementById("score").innerHTML = snakeTrail.length - 4;
  playerx = playerx + xvel;
  playery = playery + yvel;
  if (playerx < 0){
    playerx = tilecount -1;
  }
  if (playerx > tilecount -1){
    playerx = 0;
  }
  if (playery < 0){
    playery = tilecount - 1;
  }
  if (playery > tilecount -1){
    playery = 0;
  }
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canv.width, canv.height);
  ctx.fillStyle = "lime";
  for (var i = 0; i < snakeTrail.length; i++){
    ctx.fillRect(snakeTrail[i].x * gridSize,snakeTrail[i].y * gridSize, gridSize -2, gridSize -2);
    if (snakeTrail[i].x == playerx && snakeTrail[i].y == playery){
      tailLength = 4;
    }
  }
  snakeTrail.push({x: playerx,y: playery});
  while(snakeTrail.length > tailLength){
    snakeTrail.shift();
  }
  if (applex == playerx && appley == playery){
    tailLength++;
    applex = Math.floor(Math.random() * tilecount);
    appley = Math.floor(Math.random() * tilecount);
  }
  ctx.fillStyle="red";
	ctx.fillRect(applex*gridSize,appley*gridSize,gridSize-2,gridSize-2);
}

function keyPush(evt){
  switch(evt.keyCode){
case 37:
  xvel= -1;
  yvel= 0;
  break;
case 38:
  xvel= 0;
  yvel= -1;
  break;
case 39:
  xvel= 1;
  yvel= 0;
  break;
case 40:
  xvel= 0;
  yvel= 1;
  break;
                }
}
window.onload = function(){
  canv = document.getElementById("gc");
  ctx = canv.getContext("2d");
  document.addEventListener("keydown",keyPush);
  setInterval(game, 1000/15);
}