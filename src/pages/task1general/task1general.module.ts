import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Task1generalPage } from './task1general';

@NgModule({
  declarations: [
    Task1generalPage,
  ],
  imports: [
    IonicPageModule.forChild(Task1generalPage),
  ],
})
export class Task1generalPageModule {}
