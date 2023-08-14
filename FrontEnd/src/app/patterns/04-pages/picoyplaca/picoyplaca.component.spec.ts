import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicoyplacaComponent } from './picoyplaca.component';

describe('PicoyplacaComponent', () => {
  let component: PicoyplacaComponent;
  let fixture: ComponentFixture<PicoyplacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicoyplacaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicoyplacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
