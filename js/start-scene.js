import Phaser from "phaser";

export default class StartScene extends Phaser.Scene {
  constructor() {
    super("startScene");
  }
  preload() {
    this.load.image("play", "assets/start.png");
  }
  create() {
    this.background = this.add.image(256 / 2, 272 / 2, "play");
    this.rKeys = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
  }
  update() {
    if (this.rKeys.isDown) {
      this.scene.start("bootGame");
    }
  }
}
