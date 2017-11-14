import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Pages
import { GamePage } from '../game/game';

// Providers
import { GameControllerProvider } from '../../providers/game-controller/game-controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public gameMode: string;
  public numberOfPlayers: number;

  constructor(
    public navCtrl: NavController,
    private gameControllerProvider: GameControllerProvider
  ) {
    this.gameMode = "base";
    this.numberOfPlayers = 5;
  }

  changeGameMode() {
    console.log("Changing Game Mode to : ", this.gameMode);
  }

  changeNumberOfPlayers() {
    this.numberOfPlayers = +this.numberOfPlayers;
    console.log("Changing number of players to: ", +this.numberOfPlayers);
    if (this.numberOfPlayers === 3) {
      console.log("Es un numero!");
    }
  }

  playGame() {
    let settings = {
      gameMode: this.gameMode,
      numberOfPlayers: this.numberOfPlayers
    }
    this.gameControllerProvider.setGameSettings(settings);
    this.navCtrl.push(GamePage, {});
  }

  prueba() {
    console.log(this.gameControllerProvider.prueba());
  }

}
