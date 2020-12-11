class Game{
    constructor(){
        
    }
    getGameState(){
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value", function(data){gameState:data.val()})
        console.log("gameState" + gameState)
    }
    setGameState(){
        database.ref("/").update({
            gameState:gameState
        })
    }
    start(){
        if(gameState===0){
        player1= new Player();
        player1.getplayerCount();
        form1 = new Form();
        form1.display();
    }
}
}