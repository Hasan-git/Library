import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveQuickAcessComponent } from './drive-quick-acess.component';

describe('DriveQuickAcessComponent', () => {
  let component: DriveQuickAcessComponent;
  let fixture: ComponentFixture<DriveQuickAcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveQuickAcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveQuickAcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
