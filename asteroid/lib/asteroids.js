const MovingObject = require('./moving_object.js');
const Util = require('./util.js');
const Asteroid = require('./asteroid.js');
const Game = require('./game.js');

window.MovingObject = MovingObject;


document.addEventListener("DOMContentLoaded", function(){
  
  const canvasEl = document.getElementById("game-canvas");
  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 500, 500);
  let myGame = new Game();
  
  
  setInterval(function(){
    myGame.draw(ctx);
    myGame.moveObjects();
  }, 10);

  
});