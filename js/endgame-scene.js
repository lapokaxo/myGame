import Phaser from "phaser";

export default class EndGameScene extends Phaser.Scene {
  constructor() {
    super("end");
  }
  preload() {
    this.load.image("endgame", "assets/youdead.png");
    this.load.spritesheet("ship", "assets/ship.png", {
      frameWidth: 32,
      frameHeigh: 32
    });
  }
  create() {
    this.background = this.add.image(256 / 2, 272 / 2, "endgame");
    this.rKeys = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    this.ship = this.physics.add.sprite(256 / 2, 370 / 2, "ship");
  }
  update() {
    if (this.rKeys.isDown) {
      this.scene.start("startScene");
    }
  }
}
