import { Injectable } from '@angular/core';

@Injectable()
export class GameControllerProvider {

  public gameStarted: boolean;
  public pruebaString: string;
  public gameMode: string;
  public numberOfPlayers: number;

  public allGods: Array<any> = [
    {
      name: 'Ares',
      number: 0,
      image: 'assets/imgs/gods/ares.png'
    },
    {
      name: 'Atenea',
      number: 1,
      image: 'assets/imgs/gods/atenea.png'
    },
    {
      name: 'Poseidon',
      number: 2,
      image: 'assets/imgs/gods/poseidon.png'
    },
    {
      name: 'Zeus',
      number: 3,
      image: 'assets/imgs/gods/zeus.png'
    },
    {
      name: 'Kronos',
      number: 4,
      image: 'assets/imgs/gods/kronos.jpg'
    },
    {
      name: 'Hades',
      number: 5,
      image: 'assets/imgs/gods/hades.png'
    }
  ];

  public thisGameGods: Array<any>; // Gods for selected game mode
  public selectedGods: Array<any>; // Gods for the current turn

  public hadesThreat: number = null; // Only to play with Hades expansion
  public cycladesDice: any = [0, 1, 1, 2, 2, 3];
  public hadesEnabled: boolean;

  constructor() {
    console.log('Hello GameControllerProvider Provider');
    this.gameStarted = false;
    this.pruebaString = "";
    this.selectedGods = [];
    this.hadesThreat = 0;
    this.hadesEnabled = false;
  }

  setGameSettings(settings: any) {
    this.gameMode = settings.gameMode;
    this.numberOfPlayers = settings.numberOfPlayers;
  }

  public startGame(): void {
    this.gameStarted = true;
    this.pruebaString = "El provider funciona y el juego comienza!";
    this.gameGodsSelector();
  }

  public gameGodsSelector(): void {
    switch (this.gameMode) {
      case 'base':
        this.thisGameGods = this.allGods.slice(0, 4);
        break;
      case 'hades':
        this.thisGameGods = this.allGods.slice(0, 4);
        break;
      case 'titans':
        this.thisGameGods = this.allGods.slice(0, 5);
        break;
      case 'all':
        this.thisGameGods = this.allGods.slice(0, 5);
        break;
    }
  }

  public shuffleGods() {
    let randomNumber: number = null;
    let randomToThreat1: number = null;
    let randomToThreat2: number = null;
    let totalDrawDices: number = 0;
    this.selectedGods = [];

    if (this.gameMode === 'hades' || this.gameMode === 'all') {
      randomToThreat1 = Math.floor(Math.random() * (6));
      randomToThreat2 = Math.floor(Math.random() * (6));
      totalDrawDices = this.cycladesDice[randomToThreat1] + this.cycladesDice[randomToThreat2];
      this.hadesThreat = this.hadesThreat + totalDrawDices;
      if (this.hadesThreat >= 9) {
        this.hadesEnabled = true;
      }
      console.log("Amenaza Hades: ", this.hadesThreat);
    }
    switch (this.numberOfPlayers) {
      case 2:
        for (let index = 0; index < 4; index++) {
          randomNumber = Math.floor(Math.random() * (this.thisGameGods.length));
          console.log(randomNumber);
          this.selectedGods.push(this.thisGameGods[randomNumber]);
          this.thisGameGods.splice(randomNumber, 1);
        }
        break;
      case 3:
        for (let index = 0; index < 2; index++) {
          randomNumber = Math.floor(Math.random() * (this.thisGameGods.length));
          this.selectedGods.push(this.thisGameGods[randomNumber]);
          this.thisGameGods.splice(randomNumber, 1);
        }
        break;
      case 4:
        for (let index = 0; index < 3; index++) {
          randomNumber = Math.floor(Math.random() * (this.thisGameGods.length));
          this.selectedGods.push(this.thisGameGods[randomNumber]);
          this.thisGameGods.splice(randomNumber, 1);
        }
        break;
      case 5:
        for (let index = 0; index < 4; index++) {
          randomNumber = Math.floor(Math.random() * (this.thisGameGods.length));
          this.selectedGods.push(this.thisGameGods[randomNumber]);
          this.thisGameGods.splice(randomNumber, 1);
        }
        break;
      case 6:
        for (let index = 0; index < 5; index++) {
          randomNumber = Math.floor(Math.random() * (this.thisGameGods.length));
          this.selectedGods.push(this.thisGameGods[randomNumber]);
          this.thisGameGods.splice(randomNumber, 1);
        }
        break;
    }
    if ((this.gameMode === 'hades' || this.gameMode === 'all') && this.hadesEnabled) {
      this.selectedGods.splice(this.selectedGods.length - 1, 1);
      this.selectedGods.push(this.allGods[5]);
      this.hadesEnabled = false;
      this.hadesThreat = 0;
    }
    this.gameGodsSelector();
    console.log("Los dioses que jugaran esta ronda", this.selectedGods);
    return this.selectedGods;
  }

  public endGame(): void {
    this.gameStarted = false;
  }

  public prueba(): string {
    return this.pruebaString;
  }

}
