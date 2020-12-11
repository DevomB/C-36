class Player{
    constructor(){
        
    }
    getplayerCount(){
        var playerCountRef=database.ref("playerCountt");
        playerCountRef.on("value", function(data){playerCount:data.val()})
        console.log("playerCount" + playerCount)
                    }               
    setplayerCount(){
        database.ref("/").update({
            playerCount:playerCount
        })
                    }
    setplayerName(name){
    var playername="player"+playerCount
    database.ref("playername").set({name:name})
                    }
}