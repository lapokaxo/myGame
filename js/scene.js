import Phaser from "phaser";

export default class Scene extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("bg", "assets/bg.png");
    this.load.spritesheet("ship", "assets/ship.png", {
      frameWidth: 32,
      frameHeigh: 32
    });
    this.load.image("eship1", "assets/enemyship1.png");
    this.load.image("eship2", "assets/enemyship2.png");
  }

  create() {
    this.background = this.add.image(256 / 2, 272 / 2, "bg");
    this.ship = this.add.sprite(256 / 2, 272 / 2, "ship");
    this.eship1 = this.add.image(220 / 2, 100 / 2, "eship1");
    this.eship2 = this.add.image(280 / 2, 100 / 2, "eship2");

    this.anims.create({
      key: "ship_anim",
      frames: this.anims.generateFrameNumbers("ship"),
      frameRate: 20,
      repeat: -1
    });
    this.ship.play("ship_anim");
    this.keys = this.input.keyboard.createCursorKeys();
    this.rKeys = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
  }

  update() {
    let speed = 3;
    if (this.keys.left.isDown) {
      this.ship.x = this.ship.x - speed;
      this.ship.rotateX = true;
      if (this.ship.x < 14) {
        this.ship.x = 14;
      }
    }
    if (this.keys.right.isDown) {
      this.ship.x = this.ship.x + speed;
      this.ship.flipX = true;
      if (this.ship.x > 256 - 14) {
        this.ship.x = 256 - 14;
      }
    }
    if (this.keys.up.isDown) {
      this.ship.y = this.ship.y - speed;
      this.ship.flipY = false;
      if (this.ship.y < 14) {
        this.ship.y = 14;
      }
    }
    if (this.keys.down.isDown) {
      this.ship.y = this.ship.y + speed;
      this.ship.flipY = true;
      if (this.ship.y > 272 - 14) {
        this.ship.y = 272 - 14;
      }
    }
    if (this.rKeys.isDown) {
      this.ship.y = this.ship.y = 256 / 2;
      this.ship.x = this.ship.x = 272 / 2;
    }
  }
}
