import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagefeedbackComponent } from './messagefeedback.component';

describe('MessagefeedbackComponent', () => {
  let component: MessagefeedbackComponent;
  let fixture: ComponentFixture<MessagefeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagefeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagefeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
