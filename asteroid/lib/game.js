const Asteroid = require('./asteroid.js');

const DEFAULTS = {
  DIM_X: 500,
  DIM_Y: 500,
  NUM_ASTEROIDS: 10
};

function Game(){
  this.asteroids = this.addAsteroids();
  
}

Game.prototype.addAsteroids = function(){
  let asteroids = [];
  
  for (let i = 0; i < DEFAULTS.NUM_ASTEROIDS; i++) {
    asteroids.push(new Asteroid({pos: this.randomPosition()}));
  }
  return asteroids;
};

Game.prototype.randomPosition = function(){
  let pos = [];
  
  pos[0] = Math.floor(Math.random() * DEFAULTS.DIM_X);
  pos[1] = Math.floor(Math.random() * DEFAULTS.DIM_Y);
  return pos;
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, 500, 500);
  // asteroids.forEach();
  for (let i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].draw(ctx);
  }
};

Game.prototype.moveObjects = function(){
  for (let i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].move();
  }
};

module.exports = Game;