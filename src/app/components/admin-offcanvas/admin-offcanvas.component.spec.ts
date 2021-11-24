import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOffcanvasComponent } from './admin-offcanvas.component';

describe('AdminOffcanvasComponent', () => {
  let component: AdminOffcanvasComponent;
  let fixture: ComponentFixture<AdminOffcanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOffcanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOffcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
