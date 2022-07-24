import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideofilterComponent } from './videofilter.component';

describe('VideofilterComponent', () => {
  let component: VideofilterComponent;
  let fixture: ComponentFixture<VideofilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideofilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideofilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
