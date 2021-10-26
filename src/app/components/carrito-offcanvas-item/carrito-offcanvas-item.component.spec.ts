import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoOffcanvasItemComponent } from './carrito-offcanvas-item.component';

describe('CarritoOffcanvasItemComponent', () => {
  let component: CarritoOffcanvasItemComponent;
  let fixture: ComponentFixture<CarritoOffcanvasItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoOffcanvasItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoOffcanvasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
