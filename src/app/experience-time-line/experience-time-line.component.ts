import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExperienceTimeLineDialogComponent } from './experience-time-line-dialog/experience-time-line-dialog.component';


@Component({
  selector: 'app-experience-time-line',
  templateUrl: './experience-time-line.component.html',
  styleUrls: ['./experience-time-line.component.css']
})
export class ExperienceTimeLineComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
  }

  showDialog() {
    this.dialog.open(ExperienceTimeLineDialogComponent,{width:'500px',height:'700px'});
  }

}
