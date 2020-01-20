function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    game.player.setDir(-5, 0);
  } else if (keyCode === RIGHT_ARROW) {
    game.player.setDir(5, 0);
  } else if (keyCode === DOWN_ARROW) {
    game.player.setDir(0, 5);
  } else if (keyCode === UP_ARROW) {
    game.player.setDir(0, -5);
  }
}

const game = new Game();

function preload() {
  game.init();
}

function setup() {
  createCanvas(1400, 750);
  //   game.setup();
}

function draw() {
  game.draw();
}

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
