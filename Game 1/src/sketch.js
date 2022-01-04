//Screen control//
var screen = 0;

//Start Screen//
var startScreenBackground;

//Levels and Components//
var timerValue1 = 10;
var timerValue2 = 10;
var timerValue3 = 10;
var timerValue4 = 10;
var level1Snake;
var startTouched = false;
var startTimer = false;
var level2Snake;
var level3Snake;
var level4Snake;
var score1 = 0
var score2 = 0
var score3 = 0
var score4 = 0
var playAgainButton;
var goHomeButton;

//Audio//
var music;

function preload() {
  
  startScreenBackground = loadImage('game1StartScreen.jpg');
  
  music = loadSound('game1SnakesAudio.mp3');
  
}

function setup() {
  createCanvas(620, 450);
  
  setInterval(timeIt, 1000);
  
  if (!level1Snake) {
    level1Snake = createImg('level1Snake.png', "");
  }
  level1Snake.position(50, 100);
  level1Snake.size(550, 300);
  
  if (!level2Snake) {
    level2Snake = createImg('level2Snake.png', "");
  }
  level2Snake.position(100, 5);
  level2Snake.size(450, 450);
  
  if (!level3Snake) {
    level3Snake = createImg('level3Snake.png', "");
  }
  level3Snake.position(50, 75);
  level3Snake.size(550, 350);
  
  if (!level4Snake) {
    level4Snake = createImg('level4Snake.png', "");
  }
  level4Snake.position(50, 50);
  level4Snake.size(500, 400);
  
  if (!playAgainButton) {
    playAgainButton = createButton('Play Again!');    
  }
  playAgainButton.position(150, 340);
  playAgainButton.size(150, 100);
  playAgainButton.style('color : white');
  playAgainButton.style('font-family : Ranchers,cursive');
  playAgainButton.style('font-size : 33px');
  playAgainButton.style('background-color : brown');
  playAgainButton.mousePressed(playAgainButtonPressed);
  
  if (!goHomeButton) {
    goHomeButton = createButton('Go Home!');    
  }
  goHomeButton.position(350, 340);
  goHomeButton.size(150, 100);
  goHomeButton.style('color : white');
  goHomeButton.style('font-family : Ranchers,cursive');
  goHomeButton.style('font-size : 33px');
  goHomeButton.style('background-color : brown');
  goHomeButton.mousePressed(goHomeButtonPressed);
  
}

function draw() {
  
    if (!music.isPlaying()) {
    music.play();
  }
  
  if (screen == 0) {
    start();
    level1Snake.hide();
    level2Snake.hide();
    level3Snake.hide();
    level4Snake.hide();
    playAgainButton.hide();
    goHomeButton.hide();
  }
  
  if (screen == 1) {
    level1();
    level1Snake.show();
  }
  
  if (screen == 2) {
    level2();
    level1Snake.hide();
    level2Snake.show();
  }
  
  if (screen == 3) {
    level3();
    level2Snake.hide();
    level3Snake.show();
  }
  
  if (screen == 4) {
    level4();
    level3Snake.hide();
    level4Snake.show();  
  }
  
  if (screen == 5) {
    timesUp();
    level4Snake.hide();
    playAgainButton.show();
    goHomeButton.show();
  }
  
  if (screen == 6) {
    goodJob();
    level4Snake.hide();
    playAgainButton.show();
    goHomeButton.show();
  }
  
}

function start() {
  
  image(startScreenBackground, 0, 0);
  
  textFont('Ranchers');
  fill(250);
  stroke(0);
  strokeWeight(10);
  textSize(60);
  text('Tracing With Snakes', 75, 100)
  
  strokeWeight(5);
  textSize(40);
  text('Move Your Mouse Over the White Dot', 40, 250);
  text('at the Snakes Tail to Begin', 110, 300);
  
  strokeWeight(5);
  textSize(30);
  text('Click the Screen to Start', 175, 425);
  
  
  if(mouseIsPressed) {
    screen = 1;
  }
  
}

function level1() {
  
  image(startScreenBackground, 0, 0);
  
  circle(580, 285, 30); //Start point
  circle(420, 335, 25);
  circle(332, 165, 40);
  circle(180, 360, 40);
  circle(105, 175, 50); //End point
  
  
  textFont('Ranchers');
  fill(250);
  stroke(0);
  strokeWeight(5);
  textSize(30);
  
  text('Timer: ' + timerValue1, 485, 50);
  
  text('Score: ' + score1, 350, 50);
  
  if (mouseX > 565 && mouseX < 595 && mouseY > 270 && mouseY < 300) {
    startTouched = true;
    startTimer = true;
    
    text('GO!', 560, 260);
    
  }
  
  if (startTouched) {
    strokeWeight(5);
    stroke('green');
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  if (mouseX > 407 && mouseX < 432 && mouseY > 322 && mouseY < 347 && startTouched && score1 == 0) {
    score1 = 25;
    
  }
  
  if (mouseX > 312 && mouseX < 352 && mouseY > 145 && mouseY < 185 && startTouched && score1 == 25) {
    score1 = 50;
  }
  
  if (mouseX > 160 && mouseX < 200 && mouseY > 340 && mouseY < 380 && startTouched && score1 == 50) {
    score1 = 75;
  }
  
  if (mouseX > 80 && mouseX < 130 && mouseY > 150 && mouseY < 200 && startTouched && score1 == 75) {
    score1 = 100;
    startTouched = false;
    startTimer = false;
    screen = 2;
  }
  
}

function level2() {
  
  image(startScreenBackground, 0, 0);
  
  circle(210, 435, 25); //Start point
  circle(355, 365, 45);
  circle(168, 280, 50);
  circle(475, 250, 35);
  circle(300, 60, 40); //End point
  
  textFont('Ranchers');
  fill(250);
  stroke(0);
  strokeWeight(5);
  textSize(30);
  
  text('Timer: ' + timerValue2, 485, 50);
  
  text('Score: ' + score2, 350, 50);
  
  if (mouseX > 198 && mouseX < 222 && mouseY > 423 && mouseY < 447) {
    startTouched = true;
    startTimer = true;
    
    text('GO!', 145, 440);
  }
  
  if (startTouched) {
    strokeWeight(5);
    stroke('green');
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  if (mouseX > 333 && mouseX < 377 && mouseY > 343 && mouseY < 387 && startTouched && score2 == 0) {
    score2 = 25;
  }
  
  if (mouseX > 148 && mouseX < 193 && mouseY > 255 && mouseY < 305 && startTouched && score2 == 25) {
    score2 = 50;
  }
  
  if (mouseX > 458 && mouseX < 492 && mouseY > 233 && mouseY < 267 && startTouched && score2 == 50) {
    score2 = 75;
  }
  
  if (mouseX > 280 && mouseX < 320 && mouseY > 40 && mouseY < 80 && startTouched && score2 == 75) {
    score2 = 100;
    startTouched = false;
    startTimer = false;
    screen = 3;
  }
  
  
}

function level3() {
  
  image(startScreenBackground, 0, 0);
  
  circle(85, 332, 25); //Start point
  circle(165, 103, 30);
  circle(340, 403, 35);
  circle(535, 175, 35);
  circle(560, 305, 35); //End point
  
  textFont('Ranchers');
  fill(250);
  stroke(0);
  strokeWeight(5);
  textSize(30);
  
  text('Timer: ' + timerValue3, 485, 50);
  
  text('Score: ' + score3, 350, 50);
  
  if (mouseX > 73 && mouseX < 97 && mouseY > 320 && mouseY < 344) {
    startTouched = true;
    startTimer = true;
    
    text('GO!', 65, 305);
  }
  
  if (startTouched) {
    strokeWeight(5);
    stroke('green');
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  if (mouseX > 150 && mouseX < 180 && mouseY > 88 && mouseY < 117 && startTouched && score3 == 0) {
    score3 = 25;
  }
  
  if (mouseX > 323 && mouseX < 357 && mouseY > 386 && mouseY < 420 && startTouched && score3 == 25) {
    score3 = 50;
  }
  
  if (mouseX > 518 && mouseX < 552 && mouseY > 158 && mouseY < 192 && startTouched && score3 == 50) {
    score3 = 75;
  }
  
  if (mouseX > 543 && mouseX < 577 && mouseY > 288 && mouseY < 322 && startTouched && score3 == 75) {
    score3 = 100;
    startTouched = false;
    startTimer = false;
    screen = 4;
  }
  
}

function level4() {
  
  image(startScreenBackground, 0, 0);
  
  circle(225, 235, 30); //Start point
  circle(250, 85, 15);
  circle(525, 205, 30);
  circle(280, 360, 41);
  circle(205, 380, 42); //End point
  
  textFont('Ranchers');
  fill(250);
  stroke(0);
  strokeWeight(5);
  textSize(30);
  
  text('Timer: ' + timerValue4, 485, 50);
  
  text('Score: ' + score4, 350, 50);
  
  if (mouseX > 210 && mouseX < 240 && mouseY > 220 && mouseY < 250) {
    startTouched = true;
    startTimer = true;
    
    text('GO!', 252, 248);
  }
  
  if (startTouched) {
    strokeWeight(5);
    stroke('green');
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  if (mouseX > 243 && mouseX < 257 && mouseY > 78 && mouseY < 92 && startTouched && score4 == 0) {
    score4 = 25;
  }
  
  if (mouseX > 510 && mouseX < 540 && mouseY > 190 && mouseY < 220 && startTouched && score4 == 25) {
    score4 = 50;
  }
  
  if (mouseX > 260 && mouseX < 300 && mouseY > 340 && mouseY < 380 && startTouched && score4 == 50) {
    score4 = 75;
  }
  
  if (mouseX > 184 && mouseX < 226 && mouseY > 359 && mouseY < 401 && startTouched && score4 == 75) {
    score4 = 100;
    startTouched = false;
    startTimer = false;
    screen = 6;
  }
  
}

function timesUp () {
  
  image(startScreenBackground, 0, 0);
  
  textFont('Ranchers');
  fill(250);
  stroke(0);
  strokeWeight(10);
  textSize(75);
  
  text('TIMES UP!', 160, 75);
  
  textSize(45);
  strokeWeight(7);
  text('Level 1 Score: ' + score1, 175, 150);
  text('Level 2 Score: ' + score2, 170, 205);
  text('Level 3 Score: ' + score3, 175, 260);
  text('Level 4 Score: ' + score4, 175, 310);
  
}

function goodJob() {
  
  image(startScreenBackground, 0, 0);
  
  textFont('Ranchers');
  fill(250);
  stroke(0);
  strokeWeight(10);
  textSize(75);
  text('GOOD JOB!',140, 75);
  
  textSize(45);
  strokeWeight(5);
  text('You got a perfect score!', 105, 200);
  text('Try again to get a better time!', 55, 300);
  
  
}

function playAgainButtonPressed () {
  window.location.href = 'https://editor.p5js.org/stzuniga/present/slAh9o7dv';
}

function goHomeButtonPressed () {
  window.location.href = 'https://editor.p5js.org/stzuniga/present/9B2eNKHsT';
}

function timeIt () {
  
  if (timerValue1 > 0 && screen == 1 && startTimer) {
    timerValue1--;
  }
  
  if (timerValue1 == 0) {
    screen = 2;
  }
  
  if (timerValue2 > 0 && screen == 2 && startTimer) {
    timerValue2--;
  }
  
  if (timerValue2 == 0) {
    screen = 3;
  }

  if (timerValue3 > 0 && screen == 3 && startTimer) {
    timerValue3--;
  }
  
  if (timerValue3 == 0 && startTimer) {
    screen = 4;
  }
  
  if (timerValue4 > 0 && screen == 4 && startTimer) {
    timerValue4--;
  }
  
  if (timerValue4 == 0) {
    screen = 5;
  }
  
}