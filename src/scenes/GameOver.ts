import Phaser from "phaser";

export default class GameOver extends Phaser.Scene {
  constructor() {
    super("game-over");
  }

  preload() {
    this.load.image("over", "assets/gameover.png");
    this.load.image("sky", "assets/sky.png");
  }

  create() {
    this.add.image(400, 300, "sky");
    this.add.image(400, 300, "over").setDisplaySize(180, 100);
  }
}
