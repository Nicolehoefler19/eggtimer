import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  goToTimerSoft(){
    this.router.navigate(['/timersoft']);
  }

  goToTimerMiddle(){
    this.router.navigate(['/timermiddle']);
  }

  goToTimerHard(){
    this.router.navigate(['/timerhard']);
  }
}
