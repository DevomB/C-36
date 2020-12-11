var database;
var gameState=0;
var playerCount=0;
var form1, player1, game1;



function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game1=new Game()
  game1.getGameState()
  game1.start()
}

function draw(){
  background("white");
 
}
