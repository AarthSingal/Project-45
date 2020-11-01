class SecondScreen{
    constructor(){
        this.greeting = createElement('h3');
        this.subTitle = createElement('h3');
        this.nextB = createButton('NEXT');

        
    }
    displayBg(){
        
        dayBackground_1sprite = createSprite(300,300,100,200);
        dayBackground_1sprite.addImage(dayBackground_1Img);
        dayBackground_1sprite.scale = 0.2;

        dayBackground_2sprite = createSprite(900,300,100,200);
        dayBackground_2sprite.addImage(dayBackground_2Img);
        dayBackground_2sprite.scale = 0.25;

        nightBackground_1sprite = createSprite(300,650,100,200);
        nightBackground_1sprite.addImage(nightBackground_1Img);
        nightBackground_1sprite.scale = 0.2;

        nightBackground_2sprite = createSprite(900,650,100,200);
        nightBackground_2sprite.addImage(nightBackground_2Img);
        nightBackground_2sprite.scale = 0.25;

        this.greeting.html("Hello "+player.name);
        this.greeting.position(displayWidth/2 -10, displayHeight/2 -320);

        this.subTitle.html("Please Select an Image of the Background by clicking on it");
        this.subTitle.position(displayWidth/2 -210 , displayHeight/2 - 280);
        //this.subTitle.color("White");
        
        this.nextB.position(1170,650);
        this.nextB.show();
    }
    selectBg(){

        if(mousePressedOver(dayBackground_1sprite) && dayBackground_1sprite.visible === true){
            
            dayBackground_1sprite.scale = 0.5;
            dayBackground_2sprite.scale = 0.25;
            nightBackground_1sprite.scale = 0.2;
            nightBackground_2sprite.scale = 0.25;
            bgSelected = 1;
            //thirdScreen.displayJets();
        }
        if(mousePressedOver(dayBackground_2sprite) && dayBackground_1sprite.visible === true){
            
            dayBackground_1sprite.scale = 0.2;
            dayBackground_2sprite.scale = 0.5;
            nightBackground_1sprite.scale = 0.2;
            nightBackground_2sprite.scale = 0.25;
            bgSelected = 2;
            //thirdScreen.displayJets();
        }
        if(mousePressedOver(nightBackground_1sprite) && dayBackground_1sprite.visible === true){
            dayBackground_1sprite.scale = 0.2;
            dayBackground_2sprite.scale = 0.25;
            nightBackground_1sprite.scale = 0.3;
            nightBackground_2sprite.scale = 0.25;
            bgSelected = 3;
            
            //thirdScreen.displayJets();
        }
        if(mousePressedOver(nightBackground_2sprite) && dayBackground_1sprite.visible === true){
            dayBackground_1sprite.scale = 0.2;
            dayBackground_2sprite.scale = 0.25;
            nightBackground_1sprite.scale = 0.2;
            nightBackground_2sprite.scale = 0.5;
            bgSelected = 4;
            //thirdScreen.displayJets();
        }
        this.nextB.mousePressed(()=>{
            if(bgSelected === 1){
                player.Background = "dayBackground_1Img";
                player.update();
            }else if(bgSelected === 2){
                player.Background = "dayBackground_2Img";
                player.update();
            }else if(bgSelected === 3){
                player.Background = "nightBackground_1Img";
                player.update();
            }else if(bgSelected === 4){
                player.Background = "nightBackground_2Img";
                player.update();
            }
            this.subTitle.hide();
            this.nextB.hide();
            dayBackground_1sprite.destroy();
            dayBackground_2sprite.destroy();
            nightBackground_1sprite.destroy();
            nightBackground_2sprite.destroy();

        })

    }
}