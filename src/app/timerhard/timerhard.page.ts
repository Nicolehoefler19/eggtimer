import { Component, OnInit } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { Insomnia } from '@awesome-cordova-plugins/insomnia/ngx';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';

@Component({
  selector: 'app-timerhard',
  templateUrl: './timerhard.page.html',
  styleUrls: ['./timerhard.page.scss'],
})
export class TimerhardPage implements OnInit {

  constructor(private insomnia: Insomnia){};
  timer: any = false;
  percent: number = 0;
  radius: number = 100;
  progress: any = 0;
  fullTime: any = '00:10:00';
  minutes: number = 10;
  seconds: any = 0;
  minutesBelow: any = '00';
  secondsBelow: any = '00';
  endTime: number;
  startTimer: any;
  time: number = 1000 * 60 * 5;

  startTime(){

      if(this.timer){
        clearInterval(this.timer);
      }

      this.progressTimer();

      this.timer = false;
      this.percent = 0;
      this.progress = 0;

      let timeSplit = this.fullTime.split(':');
      this.minutes = timeSplit[1];
      this.seconds = timeSplit[2];

      let totalSeconds = Math.floor(this.minutes * 60) + parseInt(this.seconds);

      this.timer = setInterval(() => {

        if(this.percent == this.radius)
        clearInterval(this.timer);

        this.percent = Math.floor((this.progress / totalSeconds) * 100);
        this.progress++;
      }, 1000);
  }

  progressTimer() {
    this.insomnia.keepAwake()
    .then(
      () => console.log('success'),
      () => console.log('error')
    );
    this.startTimer = new Date().getTime();
    this.endTime = this.startTimer + this.time;


    setInterval(() => {
      let timeLeft = this.endTime - new Date().getTime();

      if(timeLeft > 0){
        this.minutesBelow = timeLeft / (1000 * 60);
        this.minutesBelow = Math.floor(this.minutesBelow);
        this.secondsBelow = (timeLeft / 1000) % 60;
        this.secondsBelow = Math.round(this.secondsBelow);

      }

      else{
        const alarm = new Audio('../../assets/audio/wecker.mp3');
        for(let i = 0; i < 5; i++ ){
            alarm.play();
        }
        this.minutesBelow = 0;
        this.secondsBelow = 0;
        this.insomnia.allowSleepAgain()
        .then(
          () => console.log('success'),
          () => console.log('error')
        );
      }

    }, 1000);
  }


  ngOnInit() {
  }


}
