var database;
var totalPlayers, gameState;
var logo;
var firstScreen;
var player;
var dayBackground_1Img ,dayBackground_2Img , nightBackground_1Img , nightBackground_2Img; 
var dayBackground_1sprite ,dayBackground_2sprite ,nightBackground_1sprite ,nightBackground_2sprite
var secondScreen;
var bgSelected=1;
var Jet_1_Player_1Img,Jet_2_Player_1Img,Jet_3_Player_1Img,Jet_4_Player_1Img,Jet_5_Player_1Img,Jet_6_Player_1Img,Jet_7_Player_1Img,Jet_8_Player_1Img,Jet_9_Player_1Img,Jet_10_Player_1Img;
var Jet_1_Player_1Sprite,Jet_2_Player_1Sprite,Jet_3_Player_1Sprite,Jet_4_Player_1Sprite,Jet_5_Player_1Sprite,Jet_6_Player_1Sprite,Jet_7_Player_1Sprite,Jet_8_Player_1Sprite,Jet_9_Player_1Sprite,Jet_10_Player_1Sprite;
var Jet_1_Player_2Img,Jet_2_Player_2Img,Jet_3_Player_2Img,Jet_4_Player_2Img,Jet_5_Player_2Img,Jet_6_Player_2Img,Jet_7_Player_2Img,Jet_8_Player_2Img,Jet_9_Player_2Img,Jet_10_Player_2Img;
var Jet_1_Player_2Sprite,Jet_2_Player_2Sprite,Jet_3_Player_2Sprite,Jet_4_Player_2Sprite,Jet_5_Player_2Sprite,Jet_6_Player_2Sprite,Jet_7_Player_2Sprite,Jet_8_Player_2Sprite,Jet_9_Player_2Sprite,Jet_10_Player_2Sprite;
var thirdScreen;
function preload(){
  logo = loadImage("Images/logoJetFighterGame.png");

  dayBackground_1Img = loadImage("Images/Backgrounds/DayBackground_1.jpeg");
  dayBackground_2Img = loadImage("Images/Backgrounds/DayBackground_2.jpeg");
  nightBackground_1Img = loadImage("Images/Backgrounds/NightBackground_1.jpeg")
  nightBackground_2Img = loadImage("Images/Backgrounds/NightBackground_2.jpeg")

  Jet_1_Player_1Img = loadImage("Images/JetsPlayer1/Jet_1_Player_1.png");
  Jet_2_Player_1Img = loadImage("Images/JetsPlayer1/Jet_2_Player_1.png");
  Jet_3_Player_1Img = loadImage("Images/JetsPlayer1/Jet_3_Player_1.png");
  Jet_4_Player_1Img = loadImage("Images/JetsPlayer1/Jet_4_Player_1.png");
  Jet_5_Player_1Img = loadImage("Images/JetsPlayer1/Jet_5_Player_1.png");
  Jet_6_Player_1Img = loadImage("Images/JetsPlayer1/Jet_6_Player_1.png");
  Jet_7_Player_1Img = loadImage("Images/JetsPlayer1/Jet_7_Player_1.png");
  Jet_8_Player_1Img = loadImage("Images/JetsPlayer1/Jet_8_Player_1.png");
  Jet_9_Player_1Img = loadImage("Images/JetsPlayer1/Jet_9_Player_1.png");
  Jet_10_Player_1Img = loadImage("Images/JetsPlayer1/Jet_10_Player_1.png");

  Jet_1_Player_2Img = loadImage("Images/JetsPlayer2/Jet_1_Player_2.png");
  Jet_2_Player_2Img = loadImage("Images/JetsPlayer2/Jet_2_Player_2.png");
  Jet_3_Player_2Img = loadImage("Images/JetsPlayer2/Jet_3_Player_2.png");
  Jet_4_Player_2Img = loadImage("Images/JetsPlayer2/Jet_4_Player_2.png");
  Jet_5_Player_2Img = loadImage("Images/JetsPlayer2/Jet_5_Player_2.png");
  Jet_6_Player_2Img = loadImage("Images/JetsPlayer2/Jet_6_Player_2.png");
  Jet_7_Player_2Img = loadImage("Images/JetsPlayer2/Jet_7_Player_2.png");
  Jet_8_Player_2Img = loadImage("Images/JetsPlayer2/Jet_8_Player_2.png");
  Jet_9_Player_2Img = loadImage("Images/JetsPlayer2/Jet_9_Player_2.png");
  Jet_10_Player_2Img = loadImage("Images/JetsPlayer2/Jet_10_Player_2.png");
}

function setup() {
	createCanvas(1300, 800);

  database = firebase.database();

  firstScreen = new FirstScreen();
  player = new Player();
  player.getCount();

  secondScreen = new SecondScreen();

  thirdScreen = new ThirdScreen();

  
  

  
}


function draw() {
  
  background(rgb(255,0,0));
  
  firstScreen.display();

  
  
  secondScreen.selectBg();
  drawSprites();

  text(mouseX+" : "+mouseY,20,20);
}



