import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ExperienceTimeLineComponent } from './experience-time-line/experience-time-line.component'

@NgModule({
  declarations: [
    AppComponent,
    ExperienceTimeLineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // 需要再 BrowserModule 之後!
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
