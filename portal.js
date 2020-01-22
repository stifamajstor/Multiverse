class Portals {
  constructor() {
    this.width = 180;
    this.height = 180;
    this.x = random(1400 - 180);
    this.y = random(750 - 180);
    this.portal = loadImage("assests/blackHole.gif");
  }

  draw() {
    image(this.portal, this.x, this.y, this.width, this.height);
  }

  collides(obj) {
    //check if obj collides with self
    //self completely to the left || self completely to the right
    if (this.x + this.width < obj.x || obj.x + obj.width < this.x) {
      return false;
    }

    // self completely to the top || self completely to the bottom
    if (this.y + this.height < obj.y || obj.y + obj.height < this.y) {
      return false;
    }

    return true;
  }
  //   collides(obj) {
  //     if (this.sizeX < obj.sizeX) {
  //       return true;
  //     }

  //     if (this.y + this.height == obj.y || obj.y + obj.height == this.y) {
  //       return true;
  //     }
  //   }
}
