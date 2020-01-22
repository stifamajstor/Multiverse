class Player {
  constructor() {
    this.img = loadImage("assests/rocket.jpg");
    this.width = 70;
    this.height = 70;
    this.x = 350;
    this.y = 300;
    this.xDir = 0;
    this.yDir = 0;
  }

  //   setup() {
  //     this.x = 100;
  //     this.y = 100;
  //   }

  draw() {
    image(this.img, this.x, this.y, this.width, this.height);
    this.x += this.xDir;
    this.y += this.yDir;
  }

  setDir(x, y) {
    this.xDir = x;
    this.yDir = y;
  }
}
