class FirstScreen{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('NEXT');
        this.title = createElement('h1');
        this.image = logo;
        this.imageDisplay = true;
        
    }
    display(){
        fill("white");
        this.title.html("Jet Fighting Game");
        this.title.position(displayWidth/2 - 100, 0);

        this.input.position(displayWidth/2 +140 , displayHeight/2 - 140);
        this.button.position(displayWidth/2 +140, displayHeight/2 - 70);

        
        

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            totalPlayers = totalPlayers + 1;
            player.index = totalPlayers;
            player.update();
            player.updateCount(totalPlayers);
            //console.log(totalPlayers);
            //console.log(player.name);
            this.imageDisplay = false;
            secondScreen.displayBg();
            
        })
            
        
        if(this.imageDisplay){
            image(this.image,250,100);
            secondScreen.nextB.hide();
        }
        


    }
}