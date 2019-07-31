import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NamecardComponent } from './namecard/namecard.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { CountdownComponent } from './countdown/countdown.component';
import { DemoOutputComponent } from './demo-output/demo-output.component';
import { DemoInputComponent } from './demo-input/demo-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NamecardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountdownComponent,
    DemoOutputComponent,
    DemoInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
