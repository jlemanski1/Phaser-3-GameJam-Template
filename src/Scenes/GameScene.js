import "phaser";

// Exported GameScene class that contains main game logic
export default class GameScene extends Phaser.Scene {
    constructor() {
        super("Game");
    }

    preload() {
        // Load images
        this.preload.image("logo", "assets/logo.png");
    }

    create() {
        this.add.image(400, 300, "logo");
    }

};