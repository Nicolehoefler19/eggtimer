import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'timer',
    loadChildren: () => import('./timer/timer.module').then( m => m.TimerPageModule)
  },
  {
    path: 'timersoft',
    loadChildren: () => import('./timersoft/timersoft.module').then( m => m.TimersoftPageModule)
  },
  {
    path: 'timermiddle',
    loadChildren: () => import('./timermiddle/timermiddle.module').then( m => m.TimermiddlePageModule)
  },
  {
    path: 'timerhard',
    loadChildren: () => import('./timerhard/timerhard.module').then( m => m.TimerhardPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
