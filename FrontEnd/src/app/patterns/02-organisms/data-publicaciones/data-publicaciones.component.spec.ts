import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPublicacionesComponent } from './data-publicaciones.component';

describe('DataPublicacionesComponent', () => {
  let component: DataPublicacionesComponent;
  let fixture: ComponentFixture<DataPublicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPublicacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
