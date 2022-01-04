//Screen control//
var screen = 0;

//Menu components//
var menuImage;
var menuTitle;
var exploreButton;
var homeButton;
var explorePressed = false;
var homePressed = false;

//Game select screen//
var gameSelectScreenImage;
var tracingWithSnakes;
var shapesWithMonkeys;
var colorsWithPeacocks;
var snakesPressed;
var monkeysPressed;
var peacocksPressed;

//Audio//
var menuMusic;
var gameSelectScreenAudio;

function preload () {
  
  menuImage = loadImage('animalBackground.jpg');
  menuMusic = loadSound('menuMusic.mp3');
  
  gameSelectScreenImage = loadImage('gameSelectScreen.jpg');
  gameSelectScreenAudio = loadSound('gameSelectScreenAudio.mp3');
  
}

function setup() {
  
  createCanvas(620, 450);
  
  if (!exploreButton) {
    exploreButton = createButton('Explore!');
    
  }
  exploreButton.position(245, 320);
  exploreButton.size(150,60);
  exploreButton.style('color : white');
  exploreButton.style('font-family : Ranchers,cursive');
  exploreButton.style('font-size : 33px');
  exploreButton.style('background-color : brown');
  exploreButton.mousePressed(exploreButtonPressed);
  
  if (!homeButton) {
    homeButton = createImg('homeButton.ico',"");
    
  }
  homeButton.position(20, 20);
  homeButton.size(75, 75); 
  homeButton.mousePressed(homeButtonPressed);
  
  if (!tracingWithSnakes) {
    tracingWithSnakes = createImg('tracingWithSnakes.jpg', "");
    
  }
  tracingWithSnakes.position(275, 75);
  tracingWithSnakes.size(75, 75);
  tracingWithSnakes.mousePressed(snakesButtonPressed);
  
  if (!shapesWithMonkeys) {
    shapesWithMonkeys = createImg('shapesWithMonkeys.png', "");
    
  }
  shapesWithMonkeys.size(150, 150);
  shapesWithMonkeys.position(85, 170);
  shapesWithMonkeys.mousePressed(monkeysButtonPressed);
  
  if (!colorsWithPeacocks) {
    colorsWithPeacocks = createImg('colorsWithPeacocks.gif', "");
    
  }
  colorsWithPeacocks.size(120, 120);
  colorsWithPeacocks.position(415, 175);
  colorsWithPeacocks.mousePressed(peacocksButtonPressed);
  
}

function draw() {
  
  if (screen == 0) {
    tracingWithSnakes.hide();
    shapesWithMonkeys.hide();
    colorsWithPeacocks.hide();
    menuScreen();
    gameSelectScreenAudio.stop();
    
  }
  
  if (screen == 1) {
    gameSelectScreen();
    menuMusic.stop();
    
  }
  
}

function menuScreen () {
  
  image(menuImage, 0, 0);
  textFont('Ranchers');
  fill(250);
  stroke(0);
  strokeWeight(10);
  textSize(70);
  text('FUN', 260, 100);
  text('IN THE', 230, 165);
  text('JUNGLE', 215, 225);
  
  if (!menuMusic.isPlaying()) {
    menuMusic.play();
    
  }
  
}

function gameSelectScreen () {
  
  image(gameSelectScreenImage, 0, 0);
  
  if (!gameSelectScreenAudio.isPlaying()) {
    gameSelectScreenAudio.play();
    
  }
  
  textFont('Ranchers');
  fill(248);
  stroke(0);
  strokeWeight(3);
  textSize(20);
  text('TO LEAVE THE JUNGLE, PRESS THE HOME BUTTON IN THE TOP LEFT CORNER!', 45, 425);
  
  stroke(0);
  strokeWeight(5);
  textSize(40);
  text('CHOOSE A PATHWAY!', 165, 50);
  
  textSize(25);
  
  text('Tracing with snakes!', 220, 175);
  
  text('Click the monkeys!', 70, 325);
  
  text('Colors with peacocks!', 360, 325);
  
}

function snakesButtonPressed () {
  window.location.href = 'https://editor.p5js.org/stzuniga/present/V2eE6ehO6';
  
}

function monkeysButtonPressed () {
  window.location.href = 'https://editor.p5js.org/stzuniga/present/CU7Q9jpfz';
  
}

function peacocksButtonPressed () {
  window.location.href = 'https://editor.p5js.org/stzuniga/present/I4m-HcD3F';
  
}

function exploreButtonPressed () {
  screen = 1;
  exploreButton.hide();
  tracingWithSnakes.show();
  shapesWithMonkeys.show();
  colorsWithPeacocks.show();
  
}

function homeButtonPressed () {
  screen = 0;
  exploreButton.show();
  
}
