function Circle(y, freq, size){
  this.x = 0;
  this.y = y;
  this.freq = freq;
  this.size = size;
  this.color = color(0,0,0);

}

Circle.prototype.update = function (angle) {
  this.x = map(sin(angle * this.freq), -1, 1, width / 4, 3 * width / 4);
  this.color = color(this.x % 256, 100, 100);
}

Circle.prototype.show = function () {
  push();
    fill(this.color);
    ellipse(this.x, this.y, this.size,this.size);
  pop();
};
