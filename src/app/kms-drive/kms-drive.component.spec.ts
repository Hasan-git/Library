import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmsDriveComponent } from './kms-drive.component';

describe('KmsDriveComponent', () => {
  let component: KmsDriveComponent;
  let fixture: ComponentFixture<KmsDriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmsDriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmsDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
