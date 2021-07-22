import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ExperienceTimeLineComponent } from './experience-time-line/experience-time-line.component';
import { ExperienceTimeLineDialogComponent } from './experience-time-line/experience-time-line-dialog/experience-time-line-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceTimeLineComponent,
    ExperienceTimeLineDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // 需要再 BrowserModule 之後!
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ExperienceTimeLineDialogComponent
  ]
})
export class AppModule { }
