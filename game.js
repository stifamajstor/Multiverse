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

    if (
      this.portal.collides(this.player) &&
      this.portal.x + this.portal.width >= 0
    ) {
      const newXPlayer = random(0, width);
      const newYPlayer = random(0, height);
      const newXPortal = random(0, width);
      const newYPortal = random(0, height);
      this.player.x = newXPlayer;
      this.player.y = newYPlayer;
      this.portal.x = newXPortal;
      this.portal.y = newYPortal;
    }
    // if (
    //   this.portal.x + this.portal.width < this.player.x ||
    //   this.player.x + this.player.width < this.portal.x
    // ) {
    //   console.log(this.portal.x, this.player.x);

    //   //when they collide, move them to a random location
    // }

    // if (
    //   this.portal.y + this.portal.height < this.player.y ||
    //   this.player.y + this.player.height < this.portal.y
    // ) {
    //   console.log(this.portal.y, this.player.y);
    // }

    //create new portal when player collides
  }

  //   setup() {
  //     this.player.setup();
  //   }
}
