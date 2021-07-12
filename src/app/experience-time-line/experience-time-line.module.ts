import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceTimeLineComponent } from './experience-time-line.component';



@NgModule({
  declarations: [ExperienceTimeLineComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ExperienceTimeLineComponent
  ]
})
export class ExperienceTimeLineModule { }
