import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExternalPage } from './external';

@NgModule({
  declarations: [
    ExternalPage,
  ],
  imports: [
    IonicPageModule.forChild(ExternalPage),
  ],
})
export class ExternalPageModule {}
