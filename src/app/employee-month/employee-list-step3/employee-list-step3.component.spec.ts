import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListStep3Component } from './employee-list-step3.component';

describe('EmployeeListStep3Component', () => {
  let component: EmployeeListStep3Component;
  let fixture: ComponentFixture<EmployeeListStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
