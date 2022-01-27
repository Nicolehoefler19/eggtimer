import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimermiddlePage } from './timermiddle.page';

const routes: Routes = [
  {
    path: '',
    component: TimermiddlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimermiddlePageRoutingModule {}
