import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thuc-hanh-name-card';
  newmessage: string;

  massageoutput(value) {
    console.log("app compomnet",value);
    this.newmessage = value;
  }
}
