//IMPORT
import * as PIXI from "pixi.js";

import background from "./images/forest.png"
import levelOne from "./images/levelshow1.png"
import levelTwo from "./images/levelshow2.png"
import keyLock from "./images/lock.png"

//IMPORT SOUND
import startschermSound from "url:./sound/startschermsound.mp3";
import startvoiceSound from "url:./sound/voicelevel1.mp3";


export class Levels {

    public pixi: PIXI.Application;
    public loader: PIXI.Loader;

    public background: PIXI.Sprite;
    public levelOne: PIXI.Sprite;
    public levelTwo: PIXI.Sprite;
    public keyLock: PIXI.Sprite;

    public startschermSound: HTMLAudioElement
    public startvoiceSound: HTMLAudioElement


    constructor() {

        //PIXI CANVAS
        this.pixi = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            forceCanvas: true
        });
        document.body.appendChild(this.pixi.view);

        //LOADER
        this.loader = new PIXI.Loader();
        this.loader
            .add("bgTexture", background)
            .add("levelOneTexture", levelOne)
            .add("levelTwoTexture", levelTwo)
            .add("keyLockTexture", keyLock)

            .add("startschermSound", startschermSound)
            .add("startvoiceSound", startvoiceSound)

        this.loader.load(() => this.loadCompleted());

        //  MOUSE CURSOR TRACKER
        document.addEventListener("mousemove", (e: MouseEvent) => this.mouseMoveHandler(e));

    }

    loadCompleted() {

        //ADDING THE BACKGROUND
        // this.background = new PIXI.Sprite(this.loader.resources["bgTexture"].texture!);
        // this.background.scale.set(
        //     window.innerWidth / this.background.getBounds().width,
        //     window.innerHeight / this.background.getBounds().height
        // );
        // this.pixi.stage.addChild(this.background);



        //SOUND
        this.startschermSound = this.loader.resources["startschermSound"].data!
        this.startschermSound.volume = 0.5
        this.startvoiceSound = this.loader.resources["startvoiceSound"].data!

        //PLAY SOUND
        this.startschermSound.play();
        this.startvoiceSound.play();

        //LEVEL ONE
        // this.levelOne = new PIXI.Sprite(this.loader.resources["levelOneTexture"].texture!)
        // this.levelOne.scale.set(0.7, 0.7)
        // this.levelOne.x = 50
        // this.levelOne.y = 100
        // this.levelOne.interactive = true
        // this.levelOne.buttonMode = true
        // this.levelOne.on('pointerdown', () => this.onClick())

        this.pixi.stage.addChild(this.levelOne);

        //LEVEL TWO
        this.levelTwo = new PIXI.Sprite(this.loader.resources["levelTwoTexture"].texture!)
        this.levelTwo.scale.set(0.7, 0.7)
        this.levelTwo.x = 760
        this.levelTwo.y = 100
        // this.levelTwo.interactive = true
        // this.levelTwo.buttonMode = true
        // this.levelTwo.on('pointerdown', () => this.onClick2())

        this.pixi.stage.addChild(this.levelTwo);

        //LEVEL TWO LOCK
        this.keyLock = new PIXI.Sprite(this.loader.resources["keyLockTexture"].texture!)
        this.keyLock.scale.set(0.4, 0.4)
        this.keyLock.x = 1030
        this.keyLock.y = 340


        this.pixi.stage.addChild(this.keyLock);

    }

    // MOUSE CURSOR
    mouseMoveHandler(e: MouseEvent) {
        var relativeY = e.clientY - this.pixi.screen.top

        if (relativeY > 0 && relativeY < this.pixi.screen.height) {
            this.startschermSound.play()
            this.startvoiceSound.play()


        }
    }

    onClick() {
        console.log("klik")
        window.location.href = "level1index.html"
    }

    // onClick2() {
    //     console.log("klik")
    //     window.location.href = "level2index.html"
    //}

}