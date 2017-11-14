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
  public divineFavors: boolean;

  constructor(
    public navCtrl: NavController,
    private gameControllerProvider: GameControllerProvider
  ) {
    this.gameMode = "base";
    this.numberOfPlayers = 5;
    this.divineFavors = true;
  }

  changeGameMode() {
    console.log("Changing Game Mode to : ", this.gameMode);
    if (this.gameMode === 'titans' || this.gameMode === 'all') {
      if (this.numberOfPlayers === 2) {
        this.numberOfPlayers = 3;
      }
    }
    if (this.gameMode === 'base' || this.gameMode === 'hades') {
      if (this.numberOfPlayers === 6) {
        this.numberOfPlayers = 5;
      }
    }
    if (this.gameMode === 'hades' || this.gameMode === 'all') {
      this.divineFavors = true;
    } else {
      this.divineFavors = false;
    }
  }

  changeNumberOfPlayers() {
    this.numberOfPlayers = +this.numberOfPlayers;
    console.log("Changing number of players to: ", +this.numberOfPlayers);
    if (this.numberOfPlayers === 3) {
    }
  }

  playGame() {
    let settings = {
      gameMode: this.gameMode,
      numberOfPlayers: this.numberOfPlayers,
      divineFavors: this.divineFavors
    }
    this.gameControllerProvider.setGameSettings(settings);
    this.navCtrl.push(GamePage, {});
  }

}
