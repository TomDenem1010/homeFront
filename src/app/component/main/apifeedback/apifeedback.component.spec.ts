import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApifeedbackComponent } from './apifeedback.component';

describe('ApifeedbackComponent', () => {
  let component: ApifeedbackComponent;
  let fixture: ComponentFixture<ApifeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApifeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApifeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
