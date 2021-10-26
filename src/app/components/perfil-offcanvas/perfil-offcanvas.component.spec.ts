import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilOffcanvasComponent } from './perfil-offcanvas.component';

describe('PerfilOffcanvasComponent', () => {
  let component: PerfilOffcanvasComponent;
  let fixture: ComponentFixture<PerfilOffcanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilOffcanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilOffcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
