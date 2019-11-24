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
    this.load.spritesheet("eship3", "assets/enemyship3.png", {
      frameWidth: 32,
      frameHeigh: 32
    });
    this.load.image("eship4", "assets/enemyship4.png");
  }

  create() {
    this.background = this.add.image(256 / 2, 272 / 2, "bg");
    this.ship = this.physics.add.sprite(256 / 2, 272 / 2, "ship");
    this.eship1 = this.physics.add.image(190 / 2, 100 / 2, "eship1");
    this.eship1.flipY = true;
    this.eship2 = this.physics.add.image(330 / 2, 100 / 2, "eship2");
    this.eship2.flipY = true;
    this.eship3 = this.physics.add.image(120 / 2, 100 / 2, "eship3");
    this.eship3.flipY = true;
    this.eship4 = this.physics.add.image(400 / 2, 100 / 2, "eship4");
    this.eship4.flipY = true;
    this.KDown = 1;
    this.KDownA = 1;
    this.KDownB = 1;
    this.KDownC = 1;
    this.anims.create({
      key: "ship_anim",
      frames: this.anims.generateFrameNumbers("ship"),
      frameRate: 20,
      repeat: -1
    });
    this.ship.play("ship_anim");
    this.keys = this.input.keyboard.createCursorKeys();
    this.rKeys = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    this.physics.add.overlap(this.ship, this.eship1, this.endgame, null, this);
    this.physics.add.overlap(this.ship, this.eship2, this.endgame, null, this);
    this.physics.add.overlap(this.ship, this.eship3, this.endgame, null, this);
    this.physics.add.overlap(this.ship, this.eship4, this.endgame, null, this);
  }

  update() {
    let speed = 3;
    let sceneW = 256;
    let sceneH = 272;
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
      if (this.ship.x > sceneW - 14) {
        this.ship.x = sceneW - 14;
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
      if (this.ship.y > sceneH - 14) {
        this.ship.y = sceneH - 14;
      }
    }
    if (this.rKeys.isDown) {
      this.ship.y = this.ship.y = 256 / 2;
      this.ship.x = this.ship.x = 272 / 2;
    }

    this.KDown = this.MoveShip(this.KDown, this.eship1, 2.5);

    this.KDownA = this.MoveShip(this.KDownA, this.eship2, 2.1);

    this.KDownB = this.MoveShip(this.KDownB, this.eship3, 3.5);

    this.KDownC = this.MoveShip(this.KDownC, this.eship4, 3);
  }

  MoveShip(KDown, eship, speed) {
    if (KDown === 1) {
      eship.y = eship.y + speed;
      if (eship.y > 275) {
        KDown = 0;
        eship.flipY = false;
      }
    } else {
      eship.y = eship.y - speed;
      if (eship.y < -10) {
        KDown = 1;
        eship.flipY = true;
        eship.x = Math.random() * 256;
      }
    }

    return KDown;
  }
  endgame() {
    this.scene.start("end");
  }
}
