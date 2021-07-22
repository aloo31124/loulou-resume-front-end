import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceTimeLineDialogComponent } from './experience-time-line-dialog.component';

describe('ExperienceTimeLineDialogComponent', () => {
  let component: ExperienceTimeLineDialogComponent;
  let fixture: ComponentFixture<ExperienceTimeLineDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceTimeLineDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceTimeLineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
