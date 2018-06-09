var slider;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  slider = createSlider(0, TWO_PI, PI/4, 0.01);
}

function draw() {
  var middle = width / 2;
  var length = height / 4;
  background(51);
  translate(middle, height);
  stroke(255);
  branch(length);
}

function branch(length) {
  line(0, 0, 0, -length);
  translate(0, -length);
  if (length > 1) {
    push();
    rotate(slider.value());
    branch(length * 0.67);
    pop();
    push();
    rotate(-slider.value());
    branch(length * 0.67);
    pop();
  }
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
