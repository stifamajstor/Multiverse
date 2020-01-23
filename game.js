class Game {
  constructor() {
    this.level = 0;
    this.gameOver = false;
    this.gameStarted = false;
  }

  init() {
    this.background = new Background();
    this.player = new Player();
    this.portal = new Portals();
  }

  reset() {
    this.level = 0;
  }

  drawStartScreen() {
    textSize(170);
    fill(random(255), random(255), random(255));
    text(`MULTIVERSE`, 180, 200);

    textSize(50);
    fill(random(255), random(255), random(255));
    text(`Guide the Spaceship to the portal to enter a new universe`, 70, 320);

    textSize(35);
    fill(random(255), random(255), random(255));
    text(`Control Space Ship with UP, DOWN, LEFT and RIGHT arrows`, 220, 450);

    textSize(45);
    fill(random(255), random(255), random(255));
    text(`Press any arrow to start`, 490, 590);
  }

  draw() {
    this.background.draw();
    this.player.draw();
    this.portal.draw();

    if (this.portal.collides(this.player)) {
      const newXPlayer = random(200, 1200);
      const newYPlayer = random(200, 550);
      const newXPortal = random(70, 1400 - this.portal.width);
      const newYPortal = random(70, 750 - this.portal.height);
      const randomNumberX = (Math.floor(Math.random() * 4) - 1) * 5;
      const randomNumberY = (Math.floor(Math.random() * 4) - 1) * 5;
      this.level++;
      this.player.x = newXPlayer;
      this.player.y = newYPlayer;
      this.portal.x = newXPortal;
      this.portal.y = newYPortal;
      this.player.setDir(randomNumberX, randomNumberY);
      this.background.reDraw();
      return this.level;
    }

    textSize(60);
    fill(random(255), random(255), random(255));
    text(`Level: ${this.level}`, 10 / 1.2, 60);

    if (
      this.player.x > 0 &&
      this.player.x + this.player.width < 1400 &&
      this.player.y > 0 &&
      this.player.y + this.player.height < 750
    ) {
    } else {
      this.player.width = 100;
      this.player.height = 100;
      this.player.playerImg = this.player.img2;
      textSize(200);
      fill(random(255), random(255), random(255));
      text(`Game Over`, 170, 400);

      textSize(70);
      fill(random(255), random(255), random(255));
      text(`Press SPACE to restart`, 330, 600);

      this.player.setDir(0, 0);
      this.gameOver = true;
      console.log("game over");
    }
  }
}
