var canvas;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  var middle = width / 2;
  var trunk = height / 1.3;
  background(51);
  stroke(255);
  line(middle, height, middle, trunk);
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
