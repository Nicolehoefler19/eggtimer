import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimerhardPage } from './timerhard.page';

const routes: Routes = [
  {
    path: '',
    component: TimerhardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimerhardPageRoutingModule {}
