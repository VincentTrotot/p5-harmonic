let angle;
let circles = [];
let size = 20;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  colorMode(HSB);
  angle = 0;
  for(let i = size; i < height; i+= size){
    circles.push(new Circle(i, i/100, size));
  }
}

function draw() {
  background(0);

  for(let i = 0; i < circles.length; i++){
    circles[i].update(angle);
    circles[i].show();
  }
   angle++;
}
