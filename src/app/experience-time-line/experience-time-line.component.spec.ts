import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceTimeLineComponent } from './experience-time-line.component';

describe('ExperienceTimeLineComponent', () => {
  let component: ExperienceTimeLineComponent;
  let fixture: ComponentFixture<ExperienceTimeLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceTimeLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceTimeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
