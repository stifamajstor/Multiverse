class Portals {
  constructor() {
    this.width = 250;
    this.height = 250;
    this.x = random(1400 - 200);
    this.y = random(750 - 200);
    this.portal = loadImage("assests/blackHole.gif");
  }

  draw() {
    push();
    tint(255, 100);
    image(this.portal, this.x, this.y, this.width, this.height);
    pop();
  }

  collides(obj) {
    if (this.x + this.width < obj.x || obj.x + obj.width < this.x) {
      return false;
    }

    if (this.y + this.height < obj.y || obj.y + obj.height < this.y) {
      return false;
    }

    return true;
  }
}
