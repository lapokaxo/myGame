import Phaser from "phaser";

export default class EndGameScene extends Phaser.Scene {
  constructor() {
    super("end");
  }
  preload() {
    this.load.image("endgame", "assets/youdead.png");
  }
  create() {
    this.background = this.add.image(256 / 2, 272 / 2, "endgame");
    this.rKeys = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
  }
  update() {
    if (this.rKeys.isDown) {
      this.scene.start("startScene");
    }
  }
}
