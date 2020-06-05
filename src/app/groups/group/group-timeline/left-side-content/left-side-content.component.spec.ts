import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideContentComponent } from './left-side-content.component';

describe('LeftSideContentComponent', () => {
  let component: LeftSideContentComponent;
  let fixture: ComponentFixture<LeftSideContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSideContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSideContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
