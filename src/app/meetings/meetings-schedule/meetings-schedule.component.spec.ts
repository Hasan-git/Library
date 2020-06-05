import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsScheduleComponent } from './meetings-schedule.component';

describe('MeetingsScheduleComponent', () => {
  let component: MeetingsScheduleComponent;
  let fixture: ComponentFixture<MeetingsScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingsScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingsScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
