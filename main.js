function keyPressed() {
  if (!game.gameOver) {
    if (keyCode === LEFT_ARROW) {
      game.player.setDir(-13, 0);
      game.player.playerImg = game.player.playerLeft;
    } else if (keyCode === RIGHT_ARROW) {
      game.player.setDir(13, 0);
      game.player.playerImg = game.player.playerRight;
    } else if (keyCode === DOWN_ARROW) {
      game.player.setDir(0, 13);
      game.player.playerImg = game.player.playerDown;
    } else if (keyCode === UP_ARROW) {
      game.player.setDir(0, -13);
      game.player.playerImg = game.player.playerUp;
    }
  } else if (keyCode === 32) {
    preload();
    draw();
    game.reset();
    game.gameOver = false;
  }
}

const game = new Game();

let backSong;

function preload() {
  game.init();
  if (!backSong) {
    backSong = loadSound("assests/NationDetoNation.mp3");
  }
}

function setup() {
  createCanvas(1400, 750);
}

function draw() {
  if (!backSong.isPlaying() && game.started) {
    backSong.play();
  }

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
