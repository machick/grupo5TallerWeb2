import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoOffcanvasComponent } from './carrito-offcanvas.component';

describe('CarritoOffcanvasComponent', () => {
  let component: CarritoOffcanvasComponent;
  let fixture: ComponentFixture<CarritoOffcanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoOffcanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoOffcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
