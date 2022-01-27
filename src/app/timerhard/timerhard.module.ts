import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimerhardPageRoutingModule } from './timerhard-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { TimerhardPage } from './timerhard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimerhardPageRoutingModule,
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
  declarations: [TimerhardPage]
})
export class TimerhardPageModule {}
