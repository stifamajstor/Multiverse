class Game {
  constructor() {
    //
  }

  init() {
    this.background = new Background();
    this.player = new Player();
    this.portal = new Portals();
    // this.explosion = new Explosion();
  }

  draw() {
    this.background.draw();
    this.player.draw();
    this.portal.draw();
    // this.explosion.draw();

    if (this.portal.collides(this.player)) {
      console.log("KABOOM");
      const newXPlayer = random(1, 1400);
      const newYPlayer = random(1, 750);
      const newXPortal = random(1, 1400 - this.portal.width);
      const newYPortal = random(1, 750 - this.portal.height);
      const randomNumberX = (Math.floor(Math.random() * 4) - 1) * 5;
      const randomNumberY = (Math.floor(Math.random() * 4) - 1) * 5;
      this.player.x = newXPlayer;
      this.player.y = newYPlayer;
      this.portal.x = newXPortal;
      this.portal.y = newYPortal;
      this.player.setDir(randomNumberX, randomNumberY);
      this.background.reDraw();
    }

    if (
      this.player.x > 0 &&
      this.player.x + this.player.width < 1400 &&
      this.player.y > 0 &&
      this.player.y + this.player.height < 750
    ) {
      console.log("inside if");
    } else {
      textSize(32);
      fill(random(255), random(255), random(255));
      text(`Game Over`, width - width / 1.2, 30);

      //   noLoop();
    }
  }
}
