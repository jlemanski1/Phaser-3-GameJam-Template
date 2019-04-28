import "phaser";

export default class PreloaderScene extends Phaser.Scene {
    constructor() {
        super("Preloader");
    }

    preload() {
        // Display Game Logo
        this.add.image(400, 200, "logo");   // Replace with Game/Studio Logo
        
        // Display progress bar
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(240, 270, 320, 50);
        
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: "Loading...",
            styl: {
                font: "20px monospace",
                fill: "#ffffff"
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        // Load Percent Text
        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: "0%",
            style: {
                font: "18px monospace",
                fill: "#ffffff"
            }
        });
        percentText.setOrigin(0.5, 0.5);
        
        // Asset Text
        var assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: "",
            style: {
                font: "18px monospace",
                fill: "#ffffff"
            }
        });
        assetText.setOrigin(0.5, 0.5);
        
        // Update Progress Bar
        this.load.on("progress", function (value) {
            percentText.setText(parseInt(value * 100) + "%");
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
        });
        
        // Update File Progress Text
        this.load.on("fileprogress", function (file) {
            assetText.setText("Loading asset: " + file.key);
        });
        
        // Remove Progress Bar on Completion
        this.load.on("complete", function() {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
            this.ready();
        }.bind(this));
        
        this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);
        
        // Load Game Assets
        this.load.image("blueButton1", "assets/ui/blue_button02.png");
        this.load.image("blueButton2", "assets/ui.blue_button03.png");
        this.load.image("phaserLogo", "assets/logo.png");
        this.load.image("box", "assets/ui/grey_box.png");
        this.load.image("checkedBox", "assets/ui/blue_boxCheckmark.png");
        this.load.audio("bgMusic", ["assets/TownTheme.mp3"]);
    }
    
    create() {
        
    }
    
};


function init() {
    this.readyCount = 0;
}

function ready() {
    this.readyCount++;
    if (this.readyCount === 2) {
        this.scene.start("Title");
    }
}