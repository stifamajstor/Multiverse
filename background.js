class Background {
  constructor() {
    this.back1 = loadImage("assests/background1.jpeg");
    this.back2 = loadImage("assests/background2.jpeg");
    this.back3 = loadImage("assests/background3.jpeg");
    this.back4 = loadImage("assests/background4.jpeg");
    this.back5 = loadImage("assests/background5.jpeg");
    this.back6 = loadImage("assests/background6.jpeg");
    this.back7 = loadImage("assests/background7.jpeg");
    this.back8 = loadImage("assests/background8.jpeg");
    this.back9 = loadImage("assests/background9.jpeg");
    this.back10 = loadImage("assests/background10.jpeg");
    this.backgrounds = [
      this.back1,
      this.back2,
      this.back3,
      this.back4,
      this.back5,
      this.back6,
      this.back7,
      this.back8,
      this.back9,
      this.back10
    ];
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
