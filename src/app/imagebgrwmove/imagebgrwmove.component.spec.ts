import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagebgrwmoveComponent } from './imagebgrwmove.component';

describe('ImagebgrwmoveComponent', () => {
  let component: ImagebgrwmoveComponent;
  let fixture: ComponentFixture<ImagebgrwmoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagebgrwmoveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagebgrwmoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
