import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselImgsComponent } from './carrusel-imgs.component';

describe('CarruselImgsComponent', () => {
  let component: CarruselImgsComponent;
  let fixture: ComponentFixture<CarruselImgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarruselImgsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
