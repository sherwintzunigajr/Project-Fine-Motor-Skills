//declaring variables
let monkey;
let monkeys = [];
let count = 0;
let timer = 10;
let afterScreen = false;
let jungle;
let newCount;
let playAgain1;
let playAgain2;
let playAgain3;

function preload() {

  /*these load the images into the program*/
  monkey = loadImage('shapesWithMonkeys.png');    
  jungle = loadImage('jungle.jpg');
}

function setup() {
  createCanvas(620, 450);

  for (let i = 0; i < 1; i++)         //makes new monkey image in array
  {
    /* this for loop randomizes the position of the first monkey */
    let x = random(100, width - 150);      
    let y = random(100, height - 150);               
    let r = 150;                          
    let m = new Monkey(x, y, r);
    monkeys.push(m);
  }

  setInterval(keepTime, 1000);    //used for timer

}

function draw() {
  clear();                              //clears so the screen is clean

  background(jungle);                //resets background to jungle after cleared

  cursor('banana.png', 32, 32);

  /* this for loop shows the monkeys */
  for (let i = 0; i < monkeys.length; i++)
  {
    monkeys[i].show();
  }


  text('Score: ' + count, 550, 25); //score
  fill(255);

  text('Time: ' + timer, 450, 25);
  fill(255);

  /* this if statement is used for giving the outputs depending on how the user      scored after each of their games*/
  if (timer == 0)                         //timer expires
  {

    newCount = count; //used for showing score after game is done


    if (newCount > 1) //if score is greater than 1
    {
      clear();
      background(jungle);
      
      //output message
      textAlign(CENTER);
      textFont('Ranchers');
      textSize(20);
      text('Awesome job! You clicked ' + count + ' monkeys!',
        width / 2, height / 2);
      text('Try again to get an even higher score!', width / 2, height / 2 + 25)
      
      //play again button
      playAgain1 = createButton('Play Again');
      playAgain1.position(width / 2 - 100, height / 2 + 50);
      playAgain1.mousePressed(playAgainFunction);
      playAgain1.style('color : white');
      playAgain1.style('font-family : Ranchers,cursive');
      playAgain1.style('font-size : 33px');
      playAgain1.style('background-color : green');

      //home button
      homeButton = createButton('Go Home');
      homeButton.position(width / 2 - 90, height / 2 + 125);
      homeButton.mousePressed(goHomeFunction);
      homeButton.style('color : white');
      homeButton.style('font-family : Ranchers,cursive');
      homeButton.style('font-size : 33px');
      homeButton.style('background-color : green');
    }
  }

  if (newCount == 1) //if score is 1
  {
    clear();
    background(jungle);

    //output message
    textAlign(CENTER);
    textSize(20);
    text('Good job! You clicked 1 monkey, but', width / 2, height / 2);
    text(' I think you can do better than that. Try again!',
      width / 2, height / 2 + 25);

    //play again button
    playAgain2 = createButton('Play Again');
    playAgain2.position(width / 2 - 100, height / 2 + 50);
    playAgain2.mousePressed(playAgainFunction);
    playAgain2.style('color : white');
    playAgain2.style('font-family : Ranchers,cursive');
    playAgain2.style('font-size : 33px');
    playAgain2.style('background-color : green');

    //home button 
    homeButton = createButton('Go Home');
    homeButton.position(width / 2 - 90, height / 2 + 125);
    homeButton.mousePressed(goHomeFunction);
    homeButton.style('color : white');
    homeButton.style('font-family : Ranchers,cursive');
    homeButton.style('font-size : 33px');
    homeButton.style('background-color : green');
  }

  if (newCount == 0) //if score is 0
  {
    clear();
    background(jungle);

    //outputs message
    textAlign(CENTER);
    textSize(20);
    text("Oh no! You didn't click any monkeys. Try again",
         width / 2, height / 2);
    
    //play gain button
    playAgain3 = createButton('Play Again');
    playAgain3.position(width / 2 - 100, height / 2 + 50);
    playAgain3.mousePressed(playAgainFunction);
    playAgain3.style('color : white');
    playAgain3.style('font-family : Ranchers,cursive');
    playAgain3.style('font-size : 33px');
    playAgain3.style('background-color : green');

    //home button
    homeButton = createButton('Go Home');
    homeButton.position(width / 2 - 90, height / 2 + 125);
    homeButton.mousePressed(goHomeFunction);
    homeButton.style('color : white');
    homeButton.style('font-family : Ranchers,cursive');
    homeButton.style('font-size : 33px');
    homeButton.style('background-color : green');
  }

}      //end of timer expires if statement

//used for play again button
function playAgainFunction() {
  window.location.href = 'https://editor.p5js.org/ejosborn/present/3uyEZ9Qb2';
}

//used for go home button
function goHomeFunction() {
  window.location.href = 'https://editor.p5js.org/stzuniga/present/9B2eNKHsT';
}

/* this function keeps the timer counting down */
function keepTime() {
  if (timer > 0) {
    timer--;
  }
}

/*this function is used to tell if the monkey is pressed */
function mousePressed() {
  for (let i = 0; i < monkeys.length; i++) {
    monkeys[i].clicked(mouseX, mouseY);
  }
}

class Monkey {
  constructor(x, y, r) //sets parameters for the image
  {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  /* this clicked method is gets the parameters from the mousePressed() method        above and makes sure that the monkey was within the clickable part of the        monkey. It then randomizes the next position of the new monkey */
  clicked(px, py) {
    if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) //checks to see if mouse clicked on monkey  
    {
      this.x = random(50, width - 150);
      this.y = random(50, height - 150);
      count++;                              //used for score
    }
  }       //end of clicked method

  //shows image on canvas
  show() {
    image(monkey, this.x, this.y, this.r, this.r);     
  }

  /* makes sure there is only one monkey clickable on the canvas at a time */
  hide() {
    for (let i = 0; i < 1; i++) 
    {
      if (i != 0) { monkeys[i - 1].remove(); }
    }
  } //hide class
} //end of monkey class