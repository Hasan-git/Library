import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListStep2Component } from './employee-list-step2.component';

describe('EmployeeListStep2Component', () => {
  let component: EmployeeListStep2Component;
  let fixture: ComponentFixture<EmployeeListStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
