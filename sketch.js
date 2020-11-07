var  database;
var game, form, player;
var gameState = 0;
var playerCount;



function setup(){
  database = firebase.database();
 
  createCanvas(400,400);

  var game = new Game();
  game.getState();
  game.start();
  

}

function draw(){
  background("white");
  
   
    drawSprites();
  
}
