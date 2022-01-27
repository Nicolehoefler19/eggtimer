import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimersoftPage } from './timersoft.page';

const routes: Routes = [
  {
    path: '',
    component: TimersoftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimersoftPageRoutingModule {}
