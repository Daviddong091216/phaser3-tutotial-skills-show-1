import Phaser from 'phaser';
// import logoImg from './assets/logo.png';
import bombImg from './assets/bomb.png';
import dudeImg from './assets/dude.png';
import groundImg from './assets/platform.png';
import skyImg from './assets/sky.png';
import starImg from './assets/star.png';

class MyGame extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {
        // this.load.image('logo', logoImg);
        this.load.image('bomb', starImg);
        this.load.image('ground', groundImg);
        this.load.image('sky', skyImg);
        this.load.image('star', starImg);
        this.load.image('bomb', bombImg);
        this.load.spritesheet('dude', dudeImg, { frameWidth: 32, frameHeight: 48 });
    }

    create() {
        // this.add.image(400, 300, 'star');
        this.add.image(400, 300, 'sky');

        platforms = this.physics.add.staticGroup();

        platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        platforms.create(600, 400, 'ground');
        platforms.create(50, 250, 'ground');
        platforms.create(750, 220, 'ground');

        player = this.physics.add.sprite(100, 450, 'dude');

        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
    }

    update() {

    }
}


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: MyGame
};

var platforms;
var player;


const game = new Phaser.Game(config);
