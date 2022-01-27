import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimermiddlePageRoutingModule } from './timermiddle-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { TimermiddlePage } from './timermiddle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimermiddlePageRoutingModule,
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
  declarations: [TimermiddlePage]
})
export class TimermiddlePageModule {}
