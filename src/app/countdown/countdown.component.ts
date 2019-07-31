import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  number = 10;
  private intervalId = 0;
  message = '';
  color = 'red';

  constructor() {
    this.countdown();
  }

  ngOnInit() {
  }

  private countdown() {
    this.intervalId = setInterval(() => {
      this.color = '#' + Math.floor(Math.random()*16777215).toString(16);
      this.number--;
      if (this.number <= 0) {
        clearInterval(this.intervalId);
        this.message = 'Happy New Year';
      }
    }, 1000)
  }
}
