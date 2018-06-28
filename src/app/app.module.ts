import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {SplashPage} from '../pages/splash/splash';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ReadingPage } from '../pages/reading/reading';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListeningPage } from '../pages/listening/listening';
import { WritingPage } from '../pages/writing/writing';
import { SpeakingPage } from '../pages/speaking/speaking';
import { Task1generalPage } from '../pages/task1general/task1general';
import { Task1acadamicPage } from '../pages/task1acadamic/task1acadamic';
import { Task2Page } from '../pages/task2/task2';
import { VocabPage } from '../pages/vocab/vocab';
import { GrammarPage } from '../pages/grammar/grammar';
import { ExternalPage } from '../pages/external/external';

import { AboutusPage } from '../pages/aboutus/aboutus';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SplashPage,
    ReadingPage,
    ListeningPage,
    WritingPage,
    SpeakingPage,
    Task1generalPage,
    Task1acadamicPage,
    Task2Page,
    VocabPage,
    GrammarPage,
    ExternalPage,

    AboutusPage,
 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SplashPage,
    ReadingPage,
    ListeningPage,
    WritingPage,
    SpeakingPage,
    Task1generalPage,
    Task1acadamicPage,
    Task2Page,
    VocabPage,
    GrammarPage,
    ExternalPage,

    AboutusPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
