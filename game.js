//HIIII this is my version of the lunar lander game in monkey style. WELCOME
//I got small tips from my brother at some places in this game, not sure if I'm supposed to site this in some way.
//HAPPY PLAYING!!! :)

//Not sure if this is needed but it got better when I added this
let width = 800;
let height = 600;

//Everything that is needed for the monkey to move and rotate
let y = -300;
let r = 4.9;
let speed = 0.3;
let rotation = 0.08;
let gravity = 0;

//Game State
let state = "start";

function setup() {
  createCanvas(800, 600); //800,600
}

function visuals(x, y) {
  background("#143601");
  noStroke();
  //shadows
  fill("#1a4301");
  ellipse(x + 80, y + 150, 220);
  ellipse(x + 200, y + 60, 270);
  //other side
  ellipse(x + width - 80, y + 150, 220);
  ellipse(x + width - 200, y + 60, 270);
  //trunk
  rect(x + 30, y + 100, 15, height);
  rect(x + width - 30, y + 100, -15, height);

  //lianas
  rect(x + 80, y, 3, height);
  rect(x + 150, y, 3, height);
  rect(x + 220, y, 3, height);
  rect(x + 300, y, 3, height);
  //other side
  rect(x + width - 80, y, -3, height);
  rect(x + width - 150, y, -3, height);
  rect(x + width - 220, y, -3, height);
  rect(x + width - 300, y, -3, height);

  //second shadow
  fill("#245501");
  ellipse(x + 50, y + 150, 200);
  ellipse(x + 170, y + 60, 250);
  //other side
  ellipse(x + width - 50, y + 150, 200);
  ellipse(x + width - 170, y + 60, 250);
  //trunk
  rect(x + 15, y + 100, 15, height);
  rect(x + width - 15, y + 100, -15, height);

  //lianas
  rect(x + 50, y, 5, height);
  rect(x + 120, y, 5, height);
  rect(x + 190, y, 5, height);
  rect(x + 270, y, 5, height);
  //other side
  rect(x + width - 50, y, -5, height);
  rect(x + width - 120, y, -5, height);
  rect(x + width - 190, y, -5, height);
  rect(x + width - 270, y, -5, height);

  //trunk of the tree on both sides
  fill("#7f5539");
  rect(x, y + 100, 15, height);
  rect(x + width, y + 100, -15, height);
  push();

  //behind bushes
  fill("#245501");
  ellipse(x + 60, y + 530, 140, 190);
  ellipse(x + width - 60, y + 530, 140, 190);

  //smaller bushes
  fill("#a7c957");
  ellipse(x + 110, y + 530, 120);
  ellipse(x + width - 110, y + 530, 120);

  //bigger bushes
  fill("#538d22");
  ellipse(x + 20, y + 530, 150, 160);
  ellipse(x + width - 20, y + 530, 150, 160);
  pop();

  //lianas
  push();
  fill("#73a942");
  rect(x + 35, y, 6, height);
  rect(x + 100, y, 6, height);
  //other side
  rect(x + width - 35, y, -6, height);
  rect(x + width - 100, y, -6, height);
  //other color
  fill("#538d22");
  rect(x + 210, y, 6, height);
  //other side
  rect(x + width - 210, y, -6, height);

  pop();

  //ground
  rect(x, y + 540, width, height);
  push();

  //grass
  fill("#6a994e");
  rect(x, y + 540, width, -15);
  pop();

  //trees
  fill("#73a942");
  ellipse(x + 30, y + 140, 180);
  fill("#538d22");
  ellipse(x + 140, y + 40, 230);
  fill("#245501");
  ellipse(x + 10, y + 70, 200);
  fill("#aad576");
  ellipse(x + 60, y - 40, 200);

  fill("#73a942");
  ellipse(x + width - 30, y + 140, 180);
  fill("#538d22");
  ellipse(x + width - 140, y + 40, 230);
  fill("#245501");
  ellipse(x + width - 10, y + 70, 200);
  fill("#aad576");
  ellipse(x + width - 60, y - 40, 200);
}

function startScreen() {
  visuals(0, 0);
  fill("white");
  textSize(25);
  text("Welcome to", 330, 200);
  textSize(65);
  text("Lunar Lander", 210, 260);
  textSize(15);
  text("Monkey style", 350, 290);

  textSize(20);
  fill("#aad576");
  text("press 'space' to start", 306, 450);
}
function instructions(x, y) {
  visuals(0, 0);
  textSize(40);
  fill(255, 255, 255);
  text("INSTRUCTIONS", 250, 100);
  fill("#004b23");
  rect(x - 5, y - 5, width - (x * 2 - 10), height - (y * 2 - 10), 20);
  fill("#aad576");
  rect(x, y, width - x * 2, height - y * 2, 15);

  fill("#004b23");
  textSize(20);
  text("DON'T LET THE MONKEY FALL TOO FAST!", 200, 180);
  text("Ease monkeys fall my pressing space key ", 220, 220);
  text("and slowing the monkey down", 260, 260);
  text("Slow down the speed as much as possible ", 210, 300);
  text("so the fall gets as smooth as possible", 240, 340);
  text("Thank you for being considerate!", 250, 380);
  text("HAPPY PLAYING!!:)", 310, 420);

  textSize(20);
  fill("#aad576");
  text("press 'space' to start", 306, 505);
}

function gameScreen() {
  visuals(0, 0);
}

function endScreen1() {
  textSize(60);
  text("SUCCESS!!", 240, 280);
  textSize(20);
  text("Press 'space' to restart", 305, 450);
}

function endScreen2() {
  visuals(0, 0);
  fill("red");
  textSize(60);
  text("GAME OVER", 240, 280);
  textSize(20);
  text("Press 'space' to restart", 305, 450);
  characterDead(330, 505);
}

function character(x, y) {
  scale(0.3);
  //Background
  noStroke();

  //Ears
  fill(130, 75, 12);
  ellipse(x - 110, y - 30, 110);
  ellipse(x + 110, y - 30, 110);
  push();
  fill(201, 177, 150);
  ellipse(x - 100, y - 25, 75);
  ellipse(x + 100, y - 25, 75);
  pop();

  //Body/Stomach
  ellipse(x, y + 200, 190, 280);
  push();
  fill(172, 137, 97);
  ellipse(x, y + 200, 120, 200);
  pop();

  //Legs
  ellipse(x - 40, y + 320, 40, 60);
  ellipse(x + 40, y + 320, 40, 60);

  //Feet
  push();
  fill(201, 177, 150);
  ellipse(x - 65, y + 355, 80, 50);
  ellipse(x + 65, y + 355, 80, 50);
  pop();

  //Arms
  push();
  ellipse(x - 115, y + 140, 100, 40);
  ellipse(x + 115, y + 140, 100, 40);
  ellipse(x - 153, y + 125, 40, 50);
  ellipse(x - 158, y + 115, 40, 60);
  ellipse(x + 153, y + 125, 40, 50);
  ellipse(x + 158, y + 115, 40, 60);
  pop();

  //Hands
  push();
  fill(201, 177, 150);
  ellipse(x - 165, y + 70, 60, 70);
  ellipse(x + 165, y + 70, 60, 70);
  pop();

  //Head
  ellipse(x, y, 200);

  //Face
  push();
  fill(180, 147, 108);
  ellipse(x - 35, y, 90, 110);
  ellipse(x + 35, y, 90, 110);
  rect(x - 5, y - 44, 10, 9);
  pop();
  ellipse(x, y - 50, 20);

  //Eyes
  push();
  fill(255, 255, 255);
  ellipse(x - 36, y, 60, 80);
  ellipse(x + 36, y, 60, 80);
  fill(0, 0, 0);
  ellipse(x - 36, y + 10, 40, 65);
  ellipse(x + 36, y + 10, 40, 65);
  fill(255, 255, 255);
  ellipse(x - 43, y - 5, 4);
  ellipse(x - 40, y - 12, 4);
  ellipse(x - 35, y - 7, 4);

  ellipse(x + 43, y - 5, 4);
  ellipse(x + 40, y - 12, 4);
  ellipse(x + 35, y - 7, 4);
  pop();

  //Cheeks
  push();
  fill(201, 177, 150);
  ellipse(x, y + 70, 180, 100);
  pop();

  //Nose
  push();
  fill(84, 45, 0);
  ellipse(x, y + 40, 30, 15);
  pop();

  //Mouth
  beginShape();
  fill(92, 64, 51);
  vertex(x, y + 80);
  bezierVertex(x + 20, y + 100, x + 40, y + 100, x + 40, y + 60);
  bezierVertex(x + 30, y + 90, x, y + 80, x - 10, y + 70);
  endShape();
}
function characterDead(x, y) {
  fill(130, 75, 12);
  rect(x, y, 150, 20, 5);
}
function updateGame() {
  //brothers help
  push();
  translate(400, y);
  rotate(r);
  character(0, -150);
  pop();

  y = y + speed;
  speed = speed + gravity;
  r = r + rotation;
  if (y >= 480) {
    if (speed < 5) {
      state = "end1";
    } else {
      state = "end2";
    }
  }

  if (keyIsDown(32)) {
    speed = speed - 0.9;
    gravity = 0;
  } else if (gravity < 0.5) {
    gravity = gravity + 0.1;
  }
}
function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "instructions") {
    instructions(150, 130);
  } else if (state === "game") {
    gameScreen();
    updateGame();
  } else if (state === "end1") {
    endScreen1();
  } else if (state === "end2") {
    endScreen2();
  }
}

function resetGame() {
  //brothers help
  y = -300;
  r = 4.9;
  speed = 0.3;
  rotation = 0.08;
  gravity = 0;
}

function keyPressed() {
  if (key === " " && state === "start") {
    state = "instructions";
  } else if (key === " " && state === "instructions") {
    state = "game";
    resetGame();
  } else if (key === " " && (state === "end1" || state === "end2")) {
    state = "game";
    resetGame();
  }
}
