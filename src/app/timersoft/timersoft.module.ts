import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimersoftPageRoutingModule } from './timersoft-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';


import { TimersoftPage } from './timersoft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimersoftPageRoutingModule,
    NgCircleProgressModule.forRoot({
      outerStrokeColor: '#fff700',
      animationDuration: 10000,
      showInnerStroke: true,
      responsive: true,
      radius: 100,
      animation: false,
      renderOnClick: false
    })
],
  declarations: [TimersoftPage]
})
export class TimersoftPageModule {}
