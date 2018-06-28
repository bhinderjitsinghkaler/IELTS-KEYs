import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Task1generalPage } from '../task1general/task1general';
import { Task1acadamicPage } from '../task1acadamic/task1acadamic';
import { Task2Page } from '../task2/task2';

/**
 * Generated class for the WritingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-writing',
  templateUrl: 'writing.html',
})
export class WritingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WritingPage');
  }

  gototask1general(){
    this.navCtrl.push(Task1generalPage);
  }

  gototask1acadamic(){
    this.navCtrl.push(Task1acadamicPage);
  }

  gototask2(){
    this.navCtrl.push(Task2Page);
  }
}
