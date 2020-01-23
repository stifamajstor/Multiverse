class Player {
  constructor() {
    this.playerImg = loadImage("assests/ship_up.jpeg");
    this.playerUp = loadImage("assests/ship_up.jpeg");
    this.playerDown = loadImage("assests/ship_down.jpeg");
    this.playerLeft = loadImage("assests/ship_left.jpeg");
    this.playerRight = loadImage("assests/ship_right.jpeg");
    this.img2 = loadImage("assests/explosion.gif");
    this.width = 70;
    this.height = 70;
    this.x = 350;
    this.y = 300;
    this.xDir = 0;
    this.yDir = 0;
  }

  draw() {
    image(this.playerImg, this.x, this.y, this.width, this.height);
    this.x += this.xDir;
    this.y += this.yDir;
  }

  setDir(x, y) {
    this.xDir = x;
    this.yDir = y;
  }
}
