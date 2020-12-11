class Form{
    constructor(){
        
    }
    //name,button,greeting,title
    display(){
        var title = createElement('h2');
        title.html("Car Game")
        var button = createButton('Play');
        var input = createInput("name");
        var greeting = createElement('h3');
        input.position(350,160);
        button.position(350,200);
        button.mousePressed(function(){
            playerCount=playerCount+1
            var name=input.value()
            player1.setplayerCount();
            player1.setplayerName(name);
        })
    }
}