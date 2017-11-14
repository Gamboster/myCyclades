import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

// Pages
import { GamePage } from '../pages/game/game';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

// Providers
import { GameControllerProvider } from '../providers/game-controller/game-controller';

@NgModule({
  declarations: [
    MyApp,
    GamePage,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GamePage,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GameControllerProvider
  ]
})
export class AppModule { }
