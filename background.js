class Background {
  constructor() {
    this.randomBackg = color(random(255), random(255), random(255));

    //
  }

  draw() {
    background(this.randomBackg);
  }

  reDraw() {
    this.randomBackg = color(random(255), random(255), random(255));
    // background(this.randomBackg);
  }
}
