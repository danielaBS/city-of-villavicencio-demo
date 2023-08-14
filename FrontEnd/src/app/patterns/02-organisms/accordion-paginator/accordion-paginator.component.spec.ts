import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionPaginatorComponent } from './accordion-paginator.component';

describe('AccordionPaginatorComponent', () => {
  let component: AccordionPaginatorComponent;
  let fixture: ComponentFixture<AccordionPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionPaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
