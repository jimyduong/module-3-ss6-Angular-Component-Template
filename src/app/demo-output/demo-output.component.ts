import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-demo-output',
  templateUrl: './demo-output.component.html',
  styleUrls: ['./demo-output.component.scss']
})
export class DemoOutputComponent implements OnInit {
  @Output() message = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  inputkeyboard(value) {

    this.message.emit(value);
    console.log("output massage:",this.message.emit);
    // this.onChangeMessage.emit(myObject);
  }
}
