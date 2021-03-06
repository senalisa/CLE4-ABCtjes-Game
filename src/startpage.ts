//IMPORT
//PIXI JS
import * as PIXI from "pixi.js";


//IMPORT IMAGES
import startpagebgImage from "./images/startpagebg.png";
import playerImage from "./images/player.png";
import startbuttonImage from "./images/startbutton.png";
import heroImage from "./images/superhero.png"
import crownImage from "./images/crown.png"

//IMPORT AUDIO
import startAudio from "url:./sound/startvoice.mp3"
import bgAudio from "url:./sound/startschermsound.mp3"

//GAME CLASS
export class Game {

  //GLOBALS
  public pixi: PIXI.Application;
  public loader: PIXI.Loader;
  public player!: PIXI.Sprite;
  public displaybg: PIXI.Graphics
  public hero: PIXI.Sprite;
  public crown: PIXI.Sprite;

  public speed: number;

  public startButton: PIXI.Sprite;

  public startAudio: HTMLAudioElement
  public bgAudio: HTMLAudioElement

  //CONSTRUCTOR
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
      .add("startpagebgTexture", startpagebgImage)
      .add("playerTexture", playerImage)
      .add("startbuttonTexture", startbuttonImage)
      .add("heroTexture", heroImage)
      .add("crownTexture", crownImage)
      .add("startAudio", startAudio)
      .add("bgSound", bgAudio)

    this.loader.load(() => this.loadCompleted());

    //  MOUSE CURSOR TRACKER
    document.addEventListener("mousemove", (e: MouseEvent) => this.mouseTracker(e));

  }

  //LOAD COMPLETED
  loadCompleted() {

    //BACKGROUND
    let background = new PIXI.Sprite(this.loader.resources["startpagebgTexture"].texture!);
    background.scale.set(
      window.innerWidth / background.getBounds().width,
      window.innerHeight / background.getBounds().height
    );
    this.pixi.stage.addChild(background);

    //CROWN PICTURE BG
    let crown = new PIXI.Sprite(this.loader.resources["crownTexture"].texture!);
    crown.scale.set(0.8, 0.8)
    crown.x = 550
    crown.y = 60
    this.pixi.stage.addChild(crown)

    //SOUND
    this.bgAudio = this.loader.resources["bgSound"].data!
    this.bgAudio.volume = 0.4
    this.startAudio = this.loader.resources["startAudio"].data!

    this.bgAudio.play();
    this.startAudio.play();

    //PLAYER HERO GIRL RAIESA
    let player = new PIXI.Sprite(this.loader.resources["playerTexture"].texture!);
    player.scale.set(0.6, 0.6)
    player.x = 250
    player.y = 450
    this.pixi.stage.addChild(player)

    //PLAYER HERO BOY SENA
    let hero = new PIXI.Sprite(this.loader.resources["heroTexture"].texture!);
    hero.x = 1100
    hero.y = 100
    hero.scale.set(0.95, 0.95)
    this.pixi.stage.addChild(hero)

    //START BUTTON
    let startButton = new PIXI.Sprite(this.loader.resources["startbuttonTexture"].texture!);
    startButton.scale.set(0.6, 0.6)
    startButton.x = 500
    startButton.y = 300
    startButton.interactive = true
    startButton.buttonMode = true
    startButton.on('pointerdown', () => this.goToLevelPage())
    this.pixi.stage.addChild(startButton)

  }


  goToLevelPage() {
    console.log("klik")
    window.location.href = "levelpage.html"
  }

  // MOUSE CURSOR
  mouseTracker(e: MouseEvent) {
    var relativeY = e.clientY - this.pixi.screen.top

    if (relativeY > 0 && relativeY < this.pixi.screen.height) {
      this.startAudio.play()
      this.bgAudio.play()


    }

  }