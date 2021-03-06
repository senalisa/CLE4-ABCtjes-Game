//IMPORT
import * as PIXI from "pixi.js";
import { Game } from "./level2";

//ENEMY CLASS
export class LetterM extends PIXI.Sprite {

    //GLOBALS
    private game: Game;
    public speed: number = 4;

      //CONSTRUCTOR
      constructor(texture: PIXI.Texture, game: Game) {
        super(texture);
        this.game = game;
        this.pivot.set(0.5)

        this.speed = 1.5;
        this.x = 700
        this.y = -1500

        this.scale.set(0.30, 0.30);

    }

    //ANIMATION
  public update() {
    this.y += this.speed
  
      this.keepInScreen();
    }

    //KEEP IN SCREEN
  private keepInScreen() {
    if (this.getBounds().top > this.game.pixi.screen.bottom) {
      this.y = -this.getBounds().height;
    }
  }
}