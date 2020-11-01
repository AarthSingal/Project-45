class ThirdScreen{
    constructor(){
        this.subTitle = createElement('h3');
    }
    displayJets(){
        this.subTitle.html("Please Select an Image of the Jet by clicking on it");
        this.subTitle.position(displayWidth/2 -210 , displayHeight/2 - 280);
        if(player.index%2 !== 0){
            Jet_1_Player_1Sprite = createSprite(200,200,50,50);
            Jet_1_Player_1Sprite.addImage(Jet_1_Player_1Img);
            Jet_1_Player_1Sprite.scale(0.5);
        }

    }
}