class Background {
  constructor() {
    this.back1 = loadImage("assests/background1.jpeg");
    this.back2 = loadImage("assests/background2.jpeg");
    this.back3 = loadImage("assests/background3.jpeg");
    this.back4 = loadImage("assests/background4.jpeg");
    this.backgrounds = [this.back1, this.back2, this.back3, this.back4];
    this.randomBackg = random(this.backgrounds);
  }

  draw() {
    background(this.randomBackg);
  }

  reDraw() {
    // this.randomBackg = color(random(255), random(255), random(255));
    this.randomBackg = random(this.backgrounds);
    background(this.randomBackg);
  }
}
