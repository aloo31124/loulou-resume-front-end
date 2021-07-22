import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceTimeLineComponent } from './experience-time-line.component';
import { ExperienceTimeLineDialogComponent } from './experience-time-line-dialog/experience-time-line-dialog/experience-time-line-dialog.component';



@NgModule({
  declarations: [ExperienceTimeLineComponent, ExperienceTimeLineDialogComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ExperienceTimeLineComponent
  ]
})
export class ExperienceTimeLineModule { }
