function keyPressed() {
  if (!game.gameOver) {
    if (keyCode === LEFT_ARROW) {
      game.player.setDir(-10, 0);
    } else if (keyCode === RIGHT_ARROW) {
      game.player.setDir(10, 0);
    } else if (keyCode === DOWN_ARROW) {
      game.player.setDir(0, 10);
    } else if (keyCode === UP_ARROW) {
      game.player.setDir(0, -10);
    }
  } else if (keyCode === 32) {
    preload();
    draw();
    game.reset();
    game.gameOver = false;
  }
}

const game = new Game();

function preload() {
  game.init();
}

function setup() {
  createCanvas(1400, 750);
}

function draw() {
  if (
    keyCode === LEFT_ARROW ||
    keyCode === RIGHT_ARROW ||
    keyCode === DOWN_ARROW ||
    keyCode === UP_ARROW
  ) {
    game.started = true;
  }
  if (!game.started) {
    return game.drawStartScreen();
  }
  game.draw();
}

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
