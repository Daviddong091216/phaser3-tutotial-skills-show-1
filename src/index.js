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


const game = new Phaser.Game(config);
