import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselIconosComponent } from './carrusel-iconos.component';

describe('CarruselIconosComponent', () => {
  let component: CarruselIconosComponent;
  let fixture: ComponentFixture<CarruselIconosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarruselIconosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselIconosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
