var angle;
var slider;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angle = PI;
  angleSwitchDown = false
  slider = createSlider(0, .005, .001, .001);
}

function draw() {
  var middle = width / 2;
  var length = height / 4;
  background(51);
  translate(middle, height);
  stroke(255);
  branch(length);

  if (angle == 0) {
    angleSwitchDown = false;
  } else if (angle == 6.28) {
    angleSwitchDown = true;
  }

  if (angleSwitchDown) {
    angle += slider.value();
  } else {
    angle -= slider.value();
  }

}

function branch(length) {
  line(0, 0, 0, -length);
  translate(0, -length);
  if (length > 4) {
    push();
    rotate(angle);
    branch(length * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(length * 0.67);
    pop();
  }
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
