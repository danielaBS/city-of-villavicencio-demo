import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedeParaisoComponent } from './sede-paraiso.component';

describe('SedeParaisoComponent', () => {
  let component: SedeParaisoComponent;
  let fixture: ComponentFixture<SedeParaisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedeParaisoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SedeParaisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
