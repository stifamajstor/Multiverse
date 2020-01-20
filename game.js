class Game {
  constructor() {
    //
  }

  init() {
    this.background = new Background();
    this.player = new Player();
    this.portal = new Portals();
  }

  draw() {
    this.background.draw();
    this.player.draw();
    this.portal.draw();

    //collision - to finish

    if (this.portal.collides(this.player)) {
      const newX = random(0, width);
      const newY = random(0, height);
      this.player.x = newX;
      this.player.y = newY;

      //when they collide, move them to a random location
    }

    //create new portal when player collides
  }

  //   setup() {
  //     this.player.setup();
  //   }
}
