import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SplashPage } from '../pages/splash/splash';
import { HomePage } from '../pages/home/home';
import { ReadingPage } from '../pages/reading/reading';
import { ListeningPage } from '../pages/listening/listening';
import { WritingPage } from '../pages/writing/writing';
import { SpeakingPage } from '../pages/speaking/speaking';
import { VocabPage } from '../pages/vocab/vocab';
import { GrammarPage } from '../pages/grammar/grammar';
import { ExternalPage } from '../pages/external/external';

import { AboutusPage } from '../pages/aboutus/aboutus';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SplashPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
                }

  gotoreading(){
    this.nav.push(ReadingPage);
                }

  gotolistening(){
    this.nav.push(ListeningPage);
  }

  gotowriting(){
    this.nav.push(WritingPage);
  }

  gotospeaking(){
    this.nav.push(SpeakingPage);
  }

  gotovocab(){
    this.nav.push(VocabPage);
  }
 
  gotogrammar(){
    this.nav.push(GrammarPage);
  }

  gotoexternalresources(){
    this.nav.push(ExternalPage);
  }

  

  gotoaboutus(){
    this.nav.push(AboutusPage);
  }
  
}
