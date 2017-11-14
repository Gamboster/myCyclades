import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Providers
import { GameControllerProvider } from '../../providers/game-controller/game-controller';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  public startedGame: boolean;
  public selectedGods: Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private gameControllerProvider: GameControllerProvider
  ) {
    this.startedGame = false;
    this.selectedGods = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

  startGame() {
    console.log("Starting game");
    this.gameControllerProvider.startGame();
    this.startedGame = true;
  }

  finishGame() {
    this.gameControllerProvider.endGame();
    this.startedGame = false;
  }

  shuffle() {
    //let randomNumber = Math.floor(Math.random() * 6) + 1;
    //console.log("reandomNumber: ", randomNumber);
    //randomNumber = Math.floor(Math.random() * (3 - 0));
    //console.log(randomNumber);
    this.selectedGods = this.gameControllerProvider.shuffleGods();
  }

  prueba() {
    console.log(this.gameControllerProvider.prueba());
  }

}
