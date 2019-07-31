import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  width = 0;
  private intervalId = 0;
  @Input() backgroundColor = '#d9d9d9';
  @Input() progressColor = '#4CAF50';

  constructor() {
  }

  ngOnInit() {
    this.risebar();
  }

  private risebar() {
    this.intervalId = window.setInterval(() => {
      this.width+=0.1;
      if (this.width >= 100) {
        this.width = 0;
      }
      console.log(this.width)
    }, 1);
  }
}
