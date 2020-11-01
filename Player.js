class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.Background = null;
    }
    getCount(){
        var getCountRef = database.ref('PlayerCount');
        getCountRef.on("value",(data)=>{
            totalPlayers = data.val()
        })
    }
    updateCount(x){
       database.ref('/').update({
           PlayerCount : x
        });
    }
    update(){
        var playerIndex = "Players/Player" + this.index;
        database.ref(playerIndex).set({
        Name:this.name,
        Background:this.Background
        });
    }
    getPlayerInfo(){

    }
}