class Portals {
  constructor() {
    this.width = 30;
    this.height = 30;
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.portal = imageLoad("assests/blackHole.gif");
  }

  draw() {
    image(this.portal, this.x, this.y, this.width, this.height);
  }
}
