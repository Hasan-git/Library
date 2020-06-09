import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveFileTableComponent } from './drive-file-table.component';

describe('DriveFileTableComponent', () => {
  let component: DriveFileTableComponent;
  let fixture: ComponentFixture<DriveFileTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveFileTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveFileTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
