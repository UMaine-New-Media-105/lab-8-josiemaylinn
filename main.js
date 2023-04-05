function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background("red");
  stroke(1);
  strokeWeight(20);
  noFill();
  square(200, 200, 350);

  translate(50, 50);
  fill("black");
  noStroke();
  circle(175, 175, 250);

  noFill();
  stroke(1);
  stroke("red");
  strokeWeight(15);
  circle(175, 175, 200);

  translate(-50, -50);
  fill("white");
  noStroke();
  circle(175, 175, 250);

  stroke(1);
  strokeWeight(15);
  noFill();
  circle(175, 175, 200);
}
